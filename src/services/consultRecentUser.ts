// src/services/consultRecentUser.ts

import type { JsonValue } from '@prisma/client/runtime/library';
import { prisma } from '../prisma.js';

type RecentItem = {
  sessionId: string;
  date: string; // ISO
  title: string;
  keywords: string[]; // 최대 3개
};

type Result =
  | { ok: true; status: 200; items: RecentItem[] }
  | { ok: false; status: number; error: string };

type Args = {
  requesterUserId: number;
  take?: number; // 기본 3
};

// ✅ JsonValue -> "객체"인지 확인하는 타입가드
function isJsonObject(v: JsonValue): v is Record<string, any> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

// ✅ 안전하게 문자열 뽑기
function asString(v: unknown): string {
  return typeof v === 'string' ? v : '';
}

// ✅ payload에서 타이틀 후보(우선순위대로)
function pickTitle(payloadObj: Record<string, any>): string {
  // 네 사용자 요약 프롬프트 기준으로 summary 필드가 있음
  const s = asString(payloadObj.summary).trim();
  if (s) return s;

  // 혹시 nested 구조일 때 대비 (없으면 그냥 빈값)
  const alt1 = asString(payloadObj?.result?.summary).trim();
  if (alt1) return alt1;

  return '';
}

// ✅ payload에서 키워드 최대 3개 만들기 (사실 "키워드" 필드가 없으니, 현재 구조에서 뽑아내는 방식)
// - currentStatus.label 2개 + coreActions.title 1개 (없으면 가능한 만큼)
function pickKeywords(payloadObj: Record<string, any>): string[] {
  const out: string[] = [];

  // 1) currentStatus: [{label, value, ...}]에서 label 우선
  const currentStatus = payloadObj.currentStatus;
  if (Array.isArray(currentStatus)) {
    for (const row of currentStatus) {
      const label = asString(row?.label).trim();
      if (label && !out.includes(label)) out.push(label);
      if (out.length >= 2) break; // 여기서 2개까지만
    }
  }

  // 2) coreActions: [{title, ...}]에서 1개
  const coreActions = payloadObj.coreActions;
  if (out.length < 3 && Array.isArray(coreActions)) {
    for (const row of coreActions) {
      const title = asString(row?.title).trim();
      if (title && !out.includes(title)) {
        out.push(title);
        break;
      }
    }
  }

  // 최대 3개
  return out.slice(0, 3);
}

/**
 * 최근 "요약된 상담" 최대 3개
 * - ConsultSummary (audience=USER)만 대상으로 함 (요약 전 절대 반환 X)
 * - 각 항목: sessionId, date(createdAt), title, keywords[3]
 */
export async function getRecentUserConsultSummaries(
  args: Args,
): Promise<Result> {
  const { requesterUserId, take = 3 } = args;

  // 1) 유저가 소유한 세션 중 요약된 것만 최신순으로 3개
  // - ConsultSession.createdAt이 있어야 함 (없으면 createdAt 추가 필요)
  // - ConsultSummary는 최신 버전만 뽑기 위해 distinct/서브쿼리 대신
  //   먼저 session을 최신순으로 가져온 뒤, 각 session의 최신 summary를 1개만 select
  const sessions = await prisma.consultSession.findMany({
    where: { userId: requesterUserId },
    orderBy: { createdAt: 'desc' },
    take: 30, // 넉넉히 가져와서 요약된 것만 추려서 3개 만들기
    select: {
      id: true,
      createdAt: true,
      summaries: {
        where: { audience: 'USER' },
        orderBy: { version: 'desc' },
        take: 1,
        select: { payload: true },
      },
    },
  });

  const items: RecentItem[] = [];

  for (const s of sessions) {
    const row = s.summaries[0];
    if (!row) continue; // ✅ 요약 전이면 건너뜀 (절대 반환 X)

    const payload = row.payload;

    // payload는 JsonValue -> 객체인지 확인
    if (!isJsonObject(payload)) {
      // 이상한 payload면 스킵 (배열이거나 null 등)
      continue;
    }

    const title = pickTitle(payload);
    const keywords = pickKeywords(payload);

    items.push({
      sessionId: s.id,
      date: s.createdAt.toISOString(),
      title: title || '(요약)',
      keywords,
    });

    if (items.length >= take) break;
  }

  return { ok: true, status: 200, items };
}
