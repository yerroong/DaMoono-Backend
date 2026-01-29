import { PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function main() {
  // -----------------------------
  // Plans Seed
  // -----------------------------
  await prisma.plan.createMany({
    data: [
      {
        id: 1,
        name: '5G 슈퍼플랜',
        price: 95000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('5.0'),
        voice_minutes: -1,
        sms_included: 200,
        network_type: '5G',
        subscription_services: ['NETFLIX', 'YOUTUBE_PREMIUM'],
        badges: [],
      },
      {
        id: 2,
        name: '5G 스탠다드',
        price: 75000,
        data_amount_mb: 100000,
        overage_speed_mbps: new Decimal('3.0'),
        voice_minutes: 1000,
        sms_included: 100,
        network_type: '5G',
        subscription_services: ['DISNEY+'],
        badges: [],
      },
      {
        id: 3,
        name: 'LTE 베이직',
        price: 45000,
        data_amount_mb: 50000,
        overage_speed_mbps: new Decimal('1.0'),
        voice_minutes: 500,
        sms_included: 50,
        network_type: 'LTE',
        subscription_services: ['WAVVE', 'TVING'],
        badges: [],
      },
      {
        id: 4,
        name: '5G 프리미엄',
        price: 120000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('10.0'),
        voice_minutes: -1,
        sms_included: 300,
        network_type: '5G',
        subscription_services: ['NETFLIX', 'YOUTUBE_PREMIUM', 'DISNEY+'],
        badges: [],
      },
      {
        id: 5,
        name: 'LTE 라이트',
        price: 35000,
        data_amount_mb: 30000,
        overage_speed_mbps: new Decimal('0.5'),
        voice_minutes: 300,
        sms_included: 30,
        network_type: 'LTE',
        subscription_services: [],
        badges: [],
      },
      {
        id: 6,
        name: '5G 미디엄',
        price: 65000,
        data_amount_mb: 80000,
        overage_speed_mbps: new Decimal('2.0'),
        voice_minutes: 800,
        sms_included: 80,
        network_type: '5G',
        subscription_services: ['MILLIE'],
        badges: [],
      },
      {
        id: 7,
        name: 'LTE 스탠다드',
        price: 55000,
        data_amount_mb: 60000,
        overage_speed_mbps: new Decimal('1.5'),
        voice_minutes: 600,
        sms_included: 60,
        network_type: 'LTE',
        subscription_services: ['TVING'],
        badges: [],
      },
      {
        id: 8,
        name: '5G 울트라',
        price: 150000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('15.0'),
        voice_minutes: -1,
        sms_included: 500,
        network_type: '5G',
        subscription_services: [
          'NETFLIX',
          'YOUTUBE_PREMIUM',
          'DISNEY+',
          'WAVVE',
          'TVING',
        ],
        badges: [],
      },
      {
        id: 9,
        name: '5G 스마트',
        price: 85000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('4.0'),
        voice_minutes: -1,
        sms_included: 150,
        network_type: '5G',
        subscription_services: ['YOUTUBE_PREMIUM', 'WAVVE'],
        badges: ['인기'],
      },
      {
        id: 10,
        name: 'LTE 프리미엄',
        price: 60000,
        data_amount_mb: 70000,
        overage_speed_mbps: new Decimal('1.2'),
        voice_minutes: 700,
        sms_included: 70,
        network_type: 'LTE',
        subscription_services: ['TVING'],
        badges: [],
      },
      {
        id: 11,
        name: '5G 스타터',
        price: 55000,
        data_amount_mb: 40000,
        overage_speed_mbps: new Decimal('1.5'),
        voice_minutes: 400,
        sms_included: 40,
        network_type: '5G',
        subscription_services: [],
        badges: ['신규'],
      },
      {
        id: 12,
        name: 'LTE 플러스',
        price: 50000,
        data_amount_mb: 55000,
        overage_speed_mbps: new Decimal('1.0'),
        voice_minutes: 550,
        sms_included: 55,
        network_type: 'LTE',
        subscription_services: ['WAVVE'],
        badges: [],
      },
      {
        id: 13,
        name: '5G 엔터테인먼트',
        price: 110000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('8.0'),
        voice_minutes: -1,
        sms_included: 400,
        network_type: '5G',
        subscription_services: [
          'NETFLIX',
          'YOUTUBE_PREMIUM',
          'DISNEY+',
          'TVING',
        ],
        badges: ['추천'],
      },
      {
        id: 14,
        name: 'LTE 이코노미',
        price: 30000,
        data_amount_mb: 25000,
        overage_speed_mbps: new Decimal('0.3'),
        voice_minutes: 250,
        sms_included: 25,
        network_type: 'LTE',
        subscription_services: [],
        badges: ['저렴'],
      },
      {
        id: 15,
        name: '5G 비즈니스',
        price: 130000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('12.0'),
        voice_minutes: -1,
        sms_included: 600,
        network_type: '5G',
        subscription_services: [
          'NETFLIX',
          'YOUTUBE_PREMIUM',
          'DISNEY+',
          'WAVVE',
          'TVING',
          'MILLIE',
        ],
        badges: ['프리미엄'],
      },
      {
        id: 16,
        name: 'LTE 미디엄',
        price: 48000,
        data_amount_mb: 45000,
        overage_speed_mbps: new Decimal('0.8'),
        voice_minutes: 450,
        sms_included: 45,
        network_type: 'LTE',
        subscription_services: [],
        badges: [],
      },
      {
        id: 17,
        name: '5G 게이밍',
        price: 100000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('7.0'),
        voice_minutes: -1,
        sms_included: 350,
        network_type: '5G',
        subscription_services: ['YOUTUBE_PREMIUM'],
        badges: ['특화'],
      },
      {
        id: 18,
        name: 'LTE 스마트',
        price: 42000,
        data_amount_mb: 40000,
        overage_speed_mbps: new Decimal('0.7'),
        voice_minutes: 400,
        sms_included: 40,
        network_type: 'LTE',
        subscription_services: ['WAVVE'],
        badges: [],
      },
      {
        id: 19,
        name: '5G 패밀리',
        price: 140000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('9.0'),
        voice_minutes: -1,
        sms_included: 450,
        network_type: '5G',
        subscription_services: [
          'NETFLIX',
          'YOUTUBE_PREMIUM',
          'DISNEY+',
          'WAVVE',
        ],
        badges: ['가족'],
      },
      {
        id: 20,
        name: 'LTE 베이직 플러스',
        price: 38000,
        data_amount_mb: 35000,
        overage_speed_mbps: new Decimal('0.5'),
        voice_minutes: 350,
        sms_included: 35,
        network_type: 'LTE',
        subscription_services: [],
        badges: [],
      },
      {
        id: 21,
        name: '5G 프로',
        price: 125000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('11.0'),
        voice_minutes: -1,
        sms_included: 550,
        network_type: '5G',
        subscription_services: [
          'NETFLIX',
          'YOUTUBE_PREMIUM',
          'DISNEY+',
          'TVING',
        ],
        badges: ['프로'],
      },
      {
        id: 22,
        name: 'LTE 컴팩트',
        price: 32000,
        data_amount_mb: 28000,
        overage_speed_mbps: new Decimal('0.4'),
        voice_minutes: 280,
        sms_included: 28,
        network_type: 'LTE',
        subscription_services: [],
        badges: ['경제'],
      },
      {
        id: 23,
        name: '5G 엔터프라이즈',
        price: 160000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('20.0'),
        voice_minutes: -1,
        sms_included: 1000,
        network_type: '5G',
        subscription_services: [
          'NETFLIX',
          'YOUTUBE_PREMIUM',
          'DISNEY+',
          'WAVVE',
          'TVING',
          'MILLIE',
        ],
        badges: ['최고급'],
      },
      {
        id: 24,
        name: 'LTE 프리미엄 플러스',
        price: 65000,
        data_amount_mb: 80000,
        overage_speed_mbps: new Decimal('2.0'),
        voice_minutes: 800,
        sms_included: 80,
        network_type: 'LTE',
        subscription_services: ['TVING', 'WAVVE'],
        badges: [],
      },
      {
        id: 25,
        name: '5G 스트리밍',
        price: 90000,
        data_amount_mb: 0,
        overage_speed_mbps: new Decimal('6.0'),
        voice_minutes: -1,
        sms_included: 300,
        network_type: '5G',
        subscription_services: ['NETFLIX', 'YOUTUBE_PREMIUM', 'DISNEY+'],
        badges: ['스트리밍'],
      },
      {
        id: 26,
        name: 'LTE 스탠다드 플러스',
        price: 58000,
        data_amount_mb: 65000,
        overage_speed_mbps: new Decimal('1.8'),
        voice_minutes: 650,
        sms_included: 65,
        network_type: 'LTE',
        subscription_services: ['TVING'],
        badges: [],
      },
      {
        id: 27,
        name: '5G 라이트',
        price: 60000,
        data_amount_mb: 50000,
        overage_speed_mbps: new Decimal('2.5'),
        voice_minutes: 500,
        sms_included: 50,
        network_type: '5G',
        subscription_services: ['YOUTUBE_PREMIUM'],
        badges: ['신규'],
      },
      {
        id: 28,
        name: 'LTE 이코노미 플러스',
        price: 40000,
        data_amount_mb: 38000,
        overage_speed_mbps: new Decimal('0.6'),
        voice_minutes: 380,
        sms_included: 38,
        network_type: 'LTE',
        subscription_services: [],
        badges: ['저렴'],
      },
    ],
    skipDuplicates: true,
  });

  // -----------------------------
  // Subscribes Seed
  // -----------------------------
  await prisma.subscribe.createMany({
    data: [
      {
        id: 1,
        name: '넷플릭스 프리미엄',
        price: 17000,
        monthly_price: 17000,
        category: 'OTT',
        benefits: ['4K 화질', '동시 시청 4명', '광고 없음'],
        description: '최고 화질의 영화와 드라마를 광고 없이 시청하세요',
        badges: ['인기', '추천'],
      },
      {
        id: 2,
        name: '유튜브 프리미엄',
        price: 13900,
        monthly_price: 13900,
        category: 'OTT',
        benefits: ['광고 없음', '백그라운드 재생', '오프라인 저장'],
        description: '유튜브를 광고 없이, 백그라운드에서도 즐기세요',
        badges: ['인기'],
      },
      {
        id: 3,
        name: '디즈니+',
        price: 9900,
        monthly_price: 9900,
        category: 'OTT',
        benefits: ['디즈니 콘텐츠', '4K 화질', '다운로드'],
        description: '디즈니, 마블, 스타워즈를 한 곳에서',
        badges: [],
      },
      {
        id: 4,
        name: '스포티파이',
        price: 10900,
        monthly_price: 10900,
        category: 'MUSIC',
        benefits: ['광고 없음', '오프라인 재생', '고음질'],
        description: '전 세계 음악을 광고 없이',
        badges: ['인기'],
      },
      {
        id: 5,
        name: '밀리의 서재',
        price: 9900,
        monthly_price: 9900,
        category: 'EDUCATION',
        benefits: ['무제한 독서', '오디오북', '이벤트'],
        description: '책 한 달에 10권 이상 읽는 사람들을 위한',
        badges: [],
      },
      {
        id: 6,
        name: '뉴스스탠드',
        price: 4900,
        monthly_price: 4900,
        category: 'NEWS',
        benefits: ['다양한 뉴스', '오프라인 읽기', '요약 기능'],
        description: '세상의 모든 뉴스를 한 곳에서',
        badges: [],
      },
      {
        id: 7,
        name: '쿠팡플레이',
        price: 4990,
        monthly_price: 4990,
        category: 'OTT',
        benefits: ['무제한 시청', '쿠팡 와우 혜택'],
        description: '쿠팡 와우 회원을 위한 스트리밍 서비스',
        badges: ['특가'],
      },
      {
        id: 8,
        name: '애플 뮤직',
        price: 11000,
        monthly_price: 11000,
        category: 'MUSIC',
        benefits: ['광고 없음', '공간 음향', '라이브 라디오'],
        description: 'Apple 기기와 완벽하게 연동되는 음악 서비스',
        badges: [],
      },
      {
        id: 9,
        name: '유튜브 프리미엄 + 추가혜택(택1)',
        price: 13900,
        monthly_price: 13900,
        category: 'OTT',
        benefits: ['유튜브 프리미엄', '추가 라이프 혜택'],
        description: '유튜브 프리미엄과 추가 라이프 혜택까지',
        badges: ['BEST'],
      },
      {
        id: 10,
        name: '더블 스트리밍 연간권',
        price: 226800,
        monthly_price: 18900,
        category: 'OTT',
        benefits: ['넷플릭스', '유튜브 프리미엄'],
        description: '넷플릭스+유튜브 프리미엄 국내 유일 월 18,900원!',
        badges: ['특가'],
      },
      {
        id: 11,
        name: '티빙 월정액 이용권',
        price: 4950,
        monthly_price: 4950,
        category: 'OTT',
        benefits: ['티빙 오리지널', '방송', '영화', '해외시리즈'],
        description: '티빙 오리지널 콘텐츠, 방송, 영화, 해외시리즈까지!',
        badges: ['할인'],
      },
      {
        id: 12,
        name: '유튜브 프리미엄 + 이모티콘플러스 구독팩',
        price: 14900,
        monthly_price: 14900,
        category: 'OTT',
        benefits: ['유튜브 프리미엄', '카카오 이모티콘 무제한'],
        description: '유튜브프리미엄과 카카오이모티콘 무제한 구독상품을 한번에',
        badges: [],
      },
      {
        id: 13,
        name: '넷플릭스 월정액',
        price: 7000,
        monthly_price: 7000,
        category: 'OTT',
        benefits: ['무제한 시청', '다양한 콘텐츠'],
        description: '넷플릭스에서 영화와 시리즈를 무제한으로 즐겨보세요!',
        badges: ['할인'],
      },
      {
        id: 14,
        name: '디즈니 + 추가혜택(택1)',
        price: 9900,
        monthly_price: 9900,
        category: 'OTT',
        benefits: ['디즈니+', '추가 라이프 혜택'],
        description: '디즈니+와 추가 라이프 혜택까지',
        badges: ['U⁺ 모바일 전용'],
      },
      {
        id: 15,
        name: '디즈니+월정액 이용권',
        price: 9405,
        monthly_price: 9405,
        category: 'OTT',
        benefits: ['스트리밍', '다양한 콘텐츠'],
        description: '지금 스트리밍중! 내가 좋아하는 이야기가 모두 여기에!',
        badges: ['할인'],
      },
      {
        id: 16,
        name: '유튜브 프리미엄 + 배달의민족 구독팩',
        price: 17900,
        monthly_price: 17900,
        category: 'OTT',
        benefits: ['유튜브 프리미엄', '배달의민족 5,000원 교환권'],
        description: '매월 제공되는 배달앱 1위 배민 5,000원 교환권 제공!',
        badges: [],
      },
      {
        id: 17,
        name: '지니뮤직 마음껏듣기 월정액',
        price: 7900,
        monthly_price: 7900,
        category: 'MUSIC',
        benefits: ['무제한 스트리밍', '데이터 무료'],
        description: '데이터 걱정없는 무제한 나만의 음악 요정 지니',
        badges: ['U⁺ 모바일 전용'],
      },
      {
        id: 18,
        name: '지니뮤직 + 추가혜택(택1)',
        price: 8400,
        monthly_price: 8400,
        category: 'MUSIC',
        benefits: ['지니뮤직', '추가 라이프 혜택'],
        description: '지니뮤직과 추가 라이프 혜택까지',
        badges: ['U⁺ 모바일 전용'],
      },
      {
        id: 19,
        name: '유튜브 프리미엄 + 스타벅스 구독팩',
        price: 17900,
        monthly_price: 17900,
        category: 'OTT',
        benefits: ['유튜브 프리미엄', '스타벅스 5,000원 모바일카드'],
        description:
          '유튜브프리미엄과 매월 제공되는 스타벅스 5,000원 모바일카드!',
        badges: [],
      },
      {
        id: 20,
        name: '유튜브 프리미엄 + CGV 구독팩',
        price: 15900,
        monthly_price: 15900,
        category: 'OTT',
        benefits: ['유튜브 프리미엄', 'CGV 영화 1+1'],
        description: '유튜브는 광고없이 프리미엄 영화는 1+1 스마트하게!',
        badges: ['U⁺ 모바일 전용'],
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seed 완료 (Plans + Subscribes)');
  // -----------------------------
  // Consult Mock Data (Users: id=5, id=7)
  // -----------------------------
  const daysAgo = (n) => new Date(Date.now() - n * 24 * 60 * 60 * 1000);

  const sessions = [
    // userId=5 (recent/history용: USER summary 3개 만들기)
    {
      id: 'session-mock-5-001',
      userId: 5,
      consultantId: 7,
      status: 'ENDED',
      createdAt: daysAgo(7),
    },
    {
      id: 'session-mock-5-002',
      userId: 5,
      consultantId: 7,
      status: 'ENDED',
      createdAt: daysAgo(5),
    },
    {
      id: 'session-mock-5-003',
      userId: 5,
      consultantId: 7,
      status: 'ENDED',
      createdAt: daysAgo(2),
    },
    // 요약 없는 세션(히스토리에서 fallback title 확인용)
    {
      id: 'session-mock-5-004',
      userId: 5,
      consultantId: null,
      status: 'WAITING',
      createdAt: daysAgo(1),
    },

    // userId=7 (기존 2개)
    {
      id: 'session-mock-7-001',
      userId: 7,
      consultantId: 5,
      status: 'ENDED',
      createdAt: daysAgo(6),
    },
    {
      id: 'session-mock-7-002',
      userId: 7,
      consultantId: 5,
      status: 'ENDED',
      createdAt: daysAgo(3),
    },

    // ✅ userId=7 추가 2개 (총 4개로)
    {
      id: 'session-mock-7-003',
      userId: 7,
      consultantId: 5,
      status: 'ENDED',
      createdAt: daysAgo(9),
    },
    {
      id: 'session-mock-7-004',
      userId: 7,
      consultantId: null,
      status: 'WAITING',
      createdAt: daysAgo(0), // 오늘
    },
  ];

  await prisma.consultSession.createMany({
    data: sessions,
    skipDuplicates: true,
  });

  // 메시지(각 세션당 2~6개 정도, seq 유니크 보장)
  const messages = [
    // session-mock-5-001
    {
      id: 'msg-5-001-01',
      sessionId: 'session-mock-5-001',
      seq: 1,
      senderRole: 'USER',
      content: '요금제가 갑자기 비싸진 것 같은데 확인 가능할까요?',
    },
    {
      id: 'msg-5-001-02',
      sessionId: 'session-mock-5-001',
      seq: 2,
      senderRole: 'CONSULTANT',
      content:
        '최근 청구서 기준으로 요금제/부가서비스/할인을 순서대로 확인해드릴게요.',
    },
    {
      id: 'msg-5-001-03',
      sessionId: 'session-mock-5-001',
      seq: 3,
      senderRole: 'USER',
      content: '부가서비스가 뭔지 잘 모르겠어요.',
    },
    {
      id: 'msg-5-001-04',
      sessionId: 'session-mock-5-001',
      seq: 4,
      senderRole: 'CONSULTANT',
      content:
        '현재 가입된 항목과 해지 방법까지 안내드렸고, 다음 달부터 청구 금액이 줄어들 예정입니다.',
    },

    // session-mock-5-002
    {
      id: 'msg-5-002-01',
      sessionId: 'session-mock-5-002',
      seq: 1,
      senderRole: 'USER',
      content: '로밍 요금 폭탄 걱정돼요. 출국 전에 뭐 확인해야 하나요?',
    },
    {
      id: 'msg-5-002-02',
      sessionId: 'session-mock-5-002',
      seq: 2,
      senderRole: 'CONSULTANT',
      content:
        '국가/데이터 사용량/차단 설정 여부 확인이 중요합니다. 간단 체크리스트 드릴게요.',
    },

    // session-mock-5-003
    {
      id: 'msg-5-003-01',
      sessionId: 'session-mock-5-003',
      seq: 1,
      senderRole: 'USER',
      content: '통화 품질이 자꾸 끊겨요. 특정 장소에서만 그래요.',
    },
    {
      id: 'msg-5-003-02',
      sessionId: 'session-mock-5-003',
      seq: 2,
      senderRole: 'CONSULTANT',
      content:
        '기지국 영향 가능성이 있어요. 위치/시간대/단말기 재부팅 등 먼저 점검해볼게요.',
    },
    {
      id: 'msg-5-003-03',
      sessionId: 'session-mock-5-003',
      seq: 3,
      senderRole: 'USER',
      content: '알겠어요. 테스트해보고 다시 연락할게요.',
    },

    // session-mock-5-004 (요약 없음)
    {
      id: 'msg-5-004-01',
      sessionId: 'session-mock-5-004',
      seq: 1,
      senderRole: 'USER',
      content: '분실했는데 지금 당장 뭘 해야 하나요? 너무 급해요.',
    },

    // session-mock-7-001
    {
      id: 'msg-7-001-01',
      sessionId: 'session-mock-7-001',
      seq: 1,
      senderRole: 'USER',
      content: '단말기 교체했는데 인증이 계속 실패해요.',
    },
    {
      id: 'msg-7-001-02',
      sessionId: 'session-mock-7-001',
      seq: 2,
      senderRole: 'CONSULTANT',
      content:
        'USIM 재장착/네트워크 설정 초기화 후에도 동일하면 인증 수단 변경을 안내드릴게요.',
    },

    // session-mock-7-002
    {
      id: 'msg-7-002-01',
      sessionId: 'session-mock-7-002',
      seq: 1,
      senderRole: 'USER',
      content: '약정 위약금이 얼마나 나오는지 미리 알고 싶어요.',
    },
    {
      id: 'msg-7-002-02',
      sessionId: 'session-mock-7-002',
      seq: 2,
      senderRole: 'CONSULTANT',
      content:
        '약정 잔여기간/할인반환금 기준으로 조회 가능하고, 대략 범위를 먼저 안내드릴게요.',
    },

    // ✅ session-mock-7-003 (추가 / ENDED)
    {
      id: 'msg-7-003-01',
      sessionId: 'session-mock-7-003',
      seq: 1,
      senderRole: 'USER',
      content:
        '데이터가 빨리 닳는 것 같아요. 백그라운드에서 뭘 쓰는지 모르겠어요.',
    },
    {
      id: 'msg-7-003-02',
      sessionId: 'session-mock-7-003',
      seq: 2,
      senderRole: 'CONSULTANT',
      content:
        '최근 사용량이 큰 앱부터 확인하고, 데이터 절약모드/백그라운드 제한 설정을 안내드릴게요.',
    },
    {
      id: 'msg-7-003-03',
      sessionId: 'session-mock-7-003',
      seq: 3,
      senderRole: 'USER',
      content: '설정 바꾸면 체감될까요?',
    },
    {
      id: 'msg-7-003-04',
      sessionId: 'session-mock-7-003',
      seq: 4,
      senderRole: 'CONSULTANT',
      content:
        '네, 상시 동기화 앱을 제한하면 효과가 큽니다. 변경 후 하루 정도 추이를 확인해보세요.',
    },

    // ✅ session-mock-7-004 (추가 / WAITING, 요약 없음)
    {
      id: 'msg-7-004-01',
      sessionId: 'session-mock-7-004',
      seq: 1,
      senderRole: 'USER',
      content: '요금제 추천 좀요. 데이터는 많이 쓰는데 통화는 거의 안 해요.',
    },
  ];

  await prisma.consultMessage.createMany({
    data: messages,
    skipDuplicates: true,
  });

  // USER 요약(Recent/History 둘 다에 영향)
  // - history: ConsultSummary.summary 컬럼을 title로 사용
  // - recent: ConsultSummary.payload 객체에서 title/keywords를 뽑아감(키가 달라도 대응되게 여러 키를 넣음)
  // -----------------------------
  // ConsultSummary Seed (USER payload = 프론트 기대 스펙으로)  ✅ upsert로 덮어쓰기
  // -----------------------------
  const userPayload = ({
    id,
    category,
    summary,
    tipsItems,
    guideSteps,
    notices,
    proposals,
    coreActions,
    nextActions,
    currentStatus,
  }) => ({
    id,
    category,
    summary,

    tips: { title: '🎁 꿀팁', items: tipsItems },
    guides: { title: '📘 이용 가이드', steps: guideSteps },
    notices, // [{id,title,text}...]

    proposals: { title: '💡 제시안', items: proposals },
    coreActions, // [{id,icon,title,description}...]
    nextActions, // [string...]
    currentStatus, // [{icon,label,value,detail}...]

    // recent/history 쪽에서 title/keywords 뽑는 로직이 있을 수 있어서 호환용으로 같이 둠
    title: summary,
    keywords: Array.isArray(proposals) ? proposals.slice(0, 3) : [],
  });

  const upsertSummaries = [
    // ===== userId=5 =====
    {
      where: {
        sessionId_audience_version: {
          sessionId: 'session-mock-5-001',
          audience: 'USER',
          version: 1,
        },
      },
      create: {
        id: 'sum-5-001-user-v1',
        sessionId: 'session-mock-5-001',
        audience: 'USER',
        ticketId: 'BILL-10021',
        category: '요금',
        summary:
          '요금 상승은 부가서비스 영향. 해지 후 다음 달 청구서에서 감소 확인.',
        version: 1,
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'BILL-10021',
          category: '요금',
          summary:
            '요금 상승은 부가서비스 영향. 해지 후 다음 달 청구서에서 감소 확인.',
          tipsItems: [
            '부가서비스 목록 확인',
            '다음 달 청구서 재확인',
            '결합/할인 적용 여부 확인',
          ],
          guideSteps: [
            '마이페이지 > 청구/납부에서 최근 청구서 확인',
            '부가서비스/구독 항목 목록 확인',
            '미사용 항목은 해지 처리',
            '다음 달 청구서에서 반영 여부 확인',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 반영 시점',
              text: '해지/변경 내용은 다음 청구 주기에 반영될 수 있어요.',
            },
            {
              id: 2,
              title: '⚠️ 할인 조건',
              text: '결합/프로모션 할인 조건이 바뀌면 요금이 변동될 수 있어요.',
            },
          ],
          proposals: [
            '불필요 부가서비스 해지',
            '데이터 사용량에 맞춘 요금제 조정',
          ],
          coreActions: [
            {
              id: 1,
              icon: '🧾',
              title: '청구서 항목 확인',
              description: '요금 상승 원인(부가서비스/할인 변동) 확인',
            },
            {
              id: 2,
              icon: '🧹',
              title: '부가서비스 정리',
              description: '미사용 항목 해지 및 유지 항목 재정리',
            },
          ],
          nextActions: [
            '📩 다음 달 청구서 수신 후 금액 비교',
            '📞 금액 변동 지속 시 상담 재문의',
          ],
          currentStatus: [
            { icon: '✨', label: '상태', value: '점검 완료', detail: '' },
            {
              icon: '✨',
              label: '조치',
              value: '부가서비스 정리 안내',
              detail: '',
            },
          ],
        }),
      },
      update: {
        ticketId: 'BILL-10021',
        category: '요금',
        summary:
          '요금 상승은 부가서비스 영향. 해지 후 다음 달 청구서에서 감소 확인.',
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'BILL-10021',
          category: '요금',
          summary:
            '요금 상승은 부가서비스 영향. 해지 후 다음 달 청구서에서 감소 확인.',
          tipsItems: [
            '부가서비스 목록 확인',
            '다음 달 청구서 재확인',
            '결합/할인 적용 여부 확인',
          ],
          guideSteps: [
            '마이페이지 > 청구/납부에서 최근 청구서 확인',
            '부가서비스/구독 항목 목록 확인',
            '미사용 항목은 해지 처리',
            '다음 달 청구서에서 반영 여부 확인',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 반영 시점',
              text: '해지/변경 내용은 다음 청구 주기에 반영될 수 있어요.',
            },
            {
              id: 2,
              title: '⚠️ 할인 조건',
              text: '결합/프로모션 할인 조건이 바뀌면 요금이 변동될 수 있어요.',
            },
          ],
          proposals: [
            '불필요 부가서비스 해지',
            '데이터 사용량에 맞춘 요금제 조정',
          ],
          coreActions: [
            {
              id: 1,
              icon: '🧾',
              title: '청구서 항목 확인',
              description: '요금 상승 원인(부가서비스/할인 변동) 확인',
            },
            {
              id: 2,
              icon: '🧹',
              title: '부가서비스 정리',
              description: '미사용 항목 해지 및 유지 항목 재정리',
            },
          ],
          nextActions: [
            '📩 다음 달 청구서 수신 후 금액 비교',
            '📞 금액 변동 지속 시 상담 재문의',
          ],
          currentStatus: [
            { icon: '✨', label: '상태', value: '점검 완료', detail: '' },
            {
              icon: '✨',
              label: '조치',
              value: '부가서비스 정리 안내',
              detail: '',
            },
          ],
        }),
      },
    },

    {
      where: {
        sessionId_audience_version: {
          sessionId: 'session-mock-5-002',
          audience: 'USER',
          version: 1,
        },
      },
      create: {
        id: 'sum-5-002-user-v1',
        sessionId: 'session-mock-5-002',
        audience: 'USER',
        ticketId: 'NET-20250129',
        category: '로밍',
        summary: '로밍 과금 리스크 점검 및 사전 설정 가이드 제공.',
        version: 1,
        promptKey: 'user_mock_v2',
        payload: {
          // 너가 예시로 준 “원하는 스펙” 그대로
          id: 'NET-20250129',
          tips: {
            items: ['호텔 Wi-Fi 사용 권장', '백그라운드 앱 새로고침 꺼두기'],
            title: '🎁 꿀팁',
          },
          guides: {
            steps: [
              '설정 > 셀룰러 > 셀룰러 데이터 옵션으로 이동',
              '데이터 로밍 스위치를 ON으로 활성화',
              '네트워크 선택에서 자동 스위치 껐다가 다시 켜기',
              '네트워크 설정 재설정 실행',
              '기기 전원 껐다가 1분 후 다시 켜기',
            ],
            title: '📘 이용 가이드',
          },
          notices: [
            {
              id: 1,
              text: '데이터 25GB 소진 후 속도 제한이 걸리며, 고화질 영상은 주의 필요',
              title: '⚠️ 속도 제한',
            },
            {
              id: 2,
              text: '전화 및 문자는 현지 요율로 별도 부과될 수 있음',
              title: '⚠️ 추가 과금',
            },
          ],
          summary: '로밍 사용량/설정 점검 및 과금 리스크 안내',
          category: '로밍',
          proposals: {
            items: ['로밍 패스 가입', '데이터 차단/알림 설정'],
            title: '💡 제시안',
          },
          coreActions: [
            {
              id: 1,
              icon: '📱',
              title: '로밍 설정 점검',
              description: '로밍/네트워크 설정을 점검하고 가이드 제공',
            },
            {
              id: 2,
              icon: '🛡️',
              title: '과금 리스크 안내',
              description: '속도 제한/추가 과금 항목을 사전 고지',
            },
          ],
          nextActions: [
            '📩 설정 변경 후 데이터 사용량 확인',
            '📞 문제 지속 시 재문의',
          ],
          currentStatus: [
            { icon: '✨', label: '로밍', value: '사전 점검 완료', detail: '' },
            { icon: '✨', label: '리스크', value: '고지 완료', detail: '' },
          ],

          // recent/history 호환용(혹시 title/keywords 쓰는 코드가 있으면 안전)
          title: '로밍 과금 리스크 점검 및 사전 설정 가이드',
          keywords: ['로밍', '데이터', '과금'],
        },
      },
      update: {
        ticketId: 'NET-20250129',
        category: '로밍',
        summary: '로밍 과금 리스크 점검 및 사전 설정 가이드 제공.',
        promptKey: 'user_mock_v2',
        payload: {
          id: 'NET-20250129',
          tips: {
            items: ['호텔 Wi-Fi 사용 권장', '백그라운드 앱 새로고침 꺼두기'],
            title: '🎁 꿀팁',
          },
          guides: {
            steps: [
              '설정 > 셀룰러 > 셀룰러 데이터 옵션으로 이동',
              '데이터 로밍 스위치를 ON으로 활성화',
              '네트워크 선택에서 자동 스위치 껐다가 다시 켜기',
              '네트워크 설정 재설정 실행',
              '기기 전원 껐다가 1분 후 다시 켜기',
            ],
            title: '📘 이용 가이드',
          },
          notices: [
            {
              id: 1,
              text: '데이터 25GB 소진 후 속도 제한이 걸리며, 고화질 영상은 주의 필요',
              title: '⚠️ 속도 제한',
            },
            {
              id: 2,
              text: '전화 및 문자는 현지 요율로 별도 부과될 수 있음',
              title: '⚠️ 추가 과금',
            },
          ],
          summary: '로밍 사용량/설정 점검 및 과금 리스크 안내',
          category: '로밍',
          proposals: {
            items: ['로밍 패스 가입', '데이터 차단/알림 설정'],
            title: '💡 제시안',
          },
          coreActions: [
            {
              id: 1,
              icon: '📱',
              title: '로밍 설정 점검',
              description: '로밍/네트워크 설정을 점검하고 가이드 제공',
            },
            {
              id: 2,
              icon: '🛡️',
              title: '과금 리스크 안내',
              description: '속도 제한/추가 과금 항목을 사전 고지',
            },
          ],
          nextActions: [
            '📩 설정 변경 후 데이터 사용량 확인',
            '📞 문제 지속 시 재문의',
          ],
          currentStatus: [
            { icon: '✨', label: '로밍', value: '사전 점검 완료', detail: '' },
            { icon: '✨', label: '리스크', value: '고지 완료', detail: '' },
          ],
          title: '로밍 과금 리스크 점검 및 사전 설정 가이드',
          keywords: ['로밍', '데이터', '과금'],
        },
      },
    },

    {
      where: {
        sessionId_audience_version: {
          sessionId: 'session-mock-5-003',
          audience: 'USER',
          version: 1,
        },
      },
      create: {
        id: 'sum-5-003-user-v1',
        sessionId: 'session-mock-5-003',
        audience: 'USER',
        ticketId: 'QLTY-55290',
        category: '품질',
        summary: '특정 장소 통화 끊김. 재현 정보 수집 후 추가 점검 진행 안내.',
        version: 1,
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'QLTY-55290',
          category: '품질',
          summary:
            '특정 장소 통화 끊김. 재현 정보 수집 후 추가 점검 진행 안내.',
          tipsItems: [
            '발생 위치/시간 기록',
            '통화 중 Wi-Fi Calling 여부 확인',
            '재부팅 후 재현 테스트',
          ],
          guideSteps: [
            '문제 발생 장소/시간대를 기록',
            '단말기 재부팅 후 동일 장소에서 재현 테스트',
            '네트워크 설정 초기화(가능 시) 진행',
            '재현 시 콜백/티켓 접수로 정밀 점검',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 환경 요인',
              text: '지하/고층/밀집지역은 품질 영향이 있을 수 있어요.',
            },
            {
              id: 2,
              title: '⚠️ 재현 중요',
              text: '동일 조건에서 재현되면 원인 분석이 빨라져요.',
            },
          ],
          proposals: ['정밀 품질 점검 티켓 접수', 'USIM/단말 점검 병행'],
          coreActions: [
            {
              id: 1,
              icon: '📍',
              title: '재현 정보 수집',
              description: '위치/시간/상황 기록 요청',
            },
            {
              id: 2,
              icon: '🧪',
              title: '기본 점검',
              description: '재부팅/설정 초기화 등 1차 조치 안내',
            },
          ],
          nextActions: ['📩 재현 정보 전달', '📞 재현 지속 시 티켓 접수 요청'],
          currentStatus: [
            { icon: '✨', label: '상태', value: '추가 확인 필요', detail: '' },
            { icon: '✨', label: '조치', value: '기본 점검 안내', detail: '' },
          ],
        }),
      },
      update: {
        ticketId: 'QLTY-55290',
        category: '품질',
        summary: '특정 장소 통화 끊김. 재현 정보 수집 후 추가 점검 진행 안내.',
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'QLTY-55290',
          category: '품질',
          summary:
            '특정 장소 통화 끊김. 재현 정보 수집 후 추가 점검 진행 안내.',
          tipsItems: [
            '발생 위치/시간 기록',
            '통화 중 Wi-Fi Calling 여부 확인',
            '재부팅 후 재현 테스트',
          ],
          guideSteps: [
            '문제 발생 장소/시간대를 기록',
            '단말기 재부팅 후 동일 장소에서 재현 테스트',
            '네트워크 설정 초기화(가능 시) 진행',
            '재현 시 콜백/티켓 접수로 정밀 점검',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 환경 요인',
              text: '지하/고층/밀집지역은 품질 영향이 있을 수 있어요.',
            },
            {
              id: 2,
              title: '⚠️ 재현 중요',
              text: '동일 조건에서 재현되면 원인 분석이 빨라져요.',
            },
          ],
          proposals: ['정밀 품질 점검 티켓 접수', 'USIM/단말 점검 병행'],
          coreActions: [
            {
              id: 1,
              icon: '📍',
              title: '재현 정보 수집',
              description: '위치/시간/상황 기록 요청',
            },
            {
              id: 2,
              icon: '🧪',
              title: '기본 점검',
              description: '재부팅/설정 초기화 등 1차 조치 안내',
            },
          ],
          nextActions: ['📩 재현 정보 전달', '📞 재현 지속 시 티켓 접수 요청'],
          currentStatus: [
            { icon: '✨', label: '상태', value: '추가 확인 필요', detail: '' },
            { icon: '✨', label: '조치', value: '기본 점검 안내', detail: '' },
          ],
        }),
      },
    },

    // ===== userId=7 =====
    {
      where: {
        sessionId_audience_version: {
          sessionId: 'session-mock-7-001',
          audience: 'USER',
          version: 1,
        },
      },
      create: {
        id: 'sum-7-001-user-v1',
        sessionId: 'session-mock-7-001',
        audience: 'USER',
        ticketId: 'DEV-22018',
        category: '단말기',
        summary:
          '단말 교체 후 인증 실패. USIM/네트워크 설정 점검 후에도 실패 시 수단 변경.',
        version: 1,
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'DEV-22018',
          category: '단말기',
          summary:
            '단말 교체 후 인증 실패. USIM/네트워크 설정 점검 후에도 실패 시 수단 변경.',
          tipsItems: [
            'USIM 재장착',
            '인증 앱/브라우저 캐시 삭제',
            '네트워크 설정 초기화',
          ],
          guideSteps: [
            'USIM 분리 후 재장착',
            '기기 재부팅',
            '네트워크 설정 초기화',
            '인증 수단(문자/앱) 변경 시도',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 인증 제한',
              text: '단말 변경 직후 보안 정책으로 인증이 제한될 수 있어요.',
            },
          ],
          proposals: ['인증 수단 변경', '추가 본인확인 절차 진행'],
          coreActions: [
            {
              id: 1,
              icon: '📲',
              title: 'USIM/네트워크 점검',
              description: 'USIM 및 네트워크 설정 점검 안내',
            },
            {
              id: 2,
              icon: '🔐',
              title: '인증 수단 변경',
              description: '문자/앱 인증 등 대체 수단 안내',
            },
          ],
          nextActions: [
            '📩 조치 후 재시도 결과 공유',
            '📞 지속 실패 시 추가 본인확인 진행',
          ],
          currentStatus: [
            { icon: '✨', label: '상태', value: '점검 진행', detail: '' },
          ],
        }),
      },
      update: {
        ticketId: 'DEV-22018',
        category: '단말기',
        summary:
          '단말 교체 후 인증 실패. USIM/네트워크 설정 점검 후에도 실패 시 수단 변경.',
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'DEV-22018',
          category: '단말기',
          summary:
            '단말 교체 후 인증 실패. USIM/네트워크 설정 점검 후에도 실패 시 수단 변경.',
          tipsItems: [
            'USIM 재장착',
            '인증 앱/브라우저 캐시 삭제',
            '네트워크 설정 초기화',
          ],
          guideSteps: [
            'USIM 분리 후 재장착',
            '기기 재부팅',
            '네트워크 설정 초기화',
            '인증 수단(문자/앱) 변경 시도',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 인증 제한',
              text: '단말 변경 직후 보안 정책으로 인증이 제한될 수 있어요.',
            },
          ],
          proposals: ['인증 수단 변경', '추가 본인확인 절차 진행'],
          coreActions: [
            {
              id: 1,
              icon: '📲',
              title: 'USIM/네트워크 점검',
              description: 'USIM 및 네트워크 설정 점검 안내',
            },
            {
              id: 2,
              icon: '🔐',
              title: '인증 수단 변경',
              description: '문자/앱 인증 등 대체 수단 안내',
            },
          ],
          nextActions: [
            '📩 조치 후 재시도 결과 공유',
            '📞 지속 실패 시 추가 본인확인 진행',
          ],
          currentStatus: [
            { icon: '✨', label: '상태', value: '점검 진행', detail: '' },
          ],
        }),
      },
    },

    {
      where: {
        sessionId_audience_version: {
          sessionId: 'session-mock-7-002',
          audience: 'USER',
          version: 1,
        },
      },
      create: {
        id: 'sum-7-002-user-v1',
        sessionId: 'session-mock-7-002',
        audience: 'USER',
        ticketId: 'TERM-90412',
        category: '기타',
        summary:
          '약정 잔여기간 기반 위약금(할인반환금) 조회 가능. 해지 전 사전 확인 권장.',
        version: 1,
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'TERM-90412',
          category: '기타',
          summary:
            '약정 잔여기간 기반 위약금(할인반환금) 조회 가능. 해지 전 사전 확인 권장.',
          tipsItems: [
            '해지 전 위약금 조회',
            '할인반환금 기준 확인',
            '대체 요금제 비교',
          ],
          guideSteps: [
            '마이페이지 > 약정/할인 정보 확인',
            '잔여기간 및 할인 적용 내역 확인',
            '해지 시 예상 위약금 조회',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 위약금 변동',
              text: '남은 기간/할인액에 따라 위약금이 달라질 수 있어요.',
            },
          ],
          proposals: ['유지 시 비용/혜택 비교', '해지 후 신규 요금제 비교'],
          coreActions: [
            {
              id: 1,
              icon: '📄',
              title: '위약금 조회',
              description: '약정/할인 기준으로 예상 위약금 확인',
            },
          ],
          nextActions: ['📩 예상 위약금 확인', '📞 해지 진행 전 재문의'],
          currentStatus: [
            { icon: '✨', label: '상태', value: '안내 완료', detail: '' },
          ],
        }),
      },
      update: {
        ticketId: 'TERM-90412',
        category: '기타',
        summary:
          '약정 잔여기간 기반 위약금(할인반환금) 조회 가능. 해지 전 사전 확인 권장.',
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'TERM-90412',
          category: '기타',
          summary:
            '약정 잔여기간 기반 위약금(할인반환금) 조회 가능. 해지 전 사전 확인 권장.',
          tipsItems: [
            '해지 전 위약금 조회',
            '할인반환금 기준 확인',
            '대체 요금제 비교',
          ],
          guideSteps: [
            '마이페이지 > 약정/할인 정보 확인',
            '잔여기간 및 할인 적용 내역 확인',
            '해지 시 예상 위약금 조회',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 위약금 변동',
              text: '남은 기간/할인액에 따라 위약금이 달라질 수 있어요.',
            },
          ],
          proposals: ['유지 시 비용/혜택 비교', '해지 후 신규 요금제 비교'],
          coreActions: [
            {
              id: 1,
              icon: '📄',
              title: '위약금 조회',
              description: '약정/할인 기준으로 예상 위약금 확인',
            },
          ],
          nextActions: ['📩 예상 위약금 확인', '📞 해지 진행 전 재문의'],
          currentStatus: [
            { icon: '✨', label: '상태', value: '안내 완료', detail: '' },
          ],
        }),
      },
    },

    {
      where: {
        sessionId_audience_version: {
          sessionId: 'session-mock-7-003',
          audience: 'USER',
          version: 1,
        },
      },
      create: {
        id: 'sum-7-003-user-v1',
        sessionId: 'session-mock-7-003',
        audience: 'USER',
        ticketId: 'DATA-33019',
        category: '기타',
        summary:
          '백그라운드 동기화 앱 점검 후 제한 설정 안내. 변경 후 하루 추이 확인 권장.',
        version: 1,
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'DATA-33019',
          category: '기타',
          summary:
            '백그라운드 동기화 앱 점검 후 제한 설정 안내. 변경 후 하루 추이 확인 권장.',
          tipsItems: [
            '사용량 큰 앱 확인',
            '백그라운드 데이터 제한',
            '절약모드 적용',
          ],
          guideSteps: [
            '설정 > 셀룰러에서 앱별 데이터 사용량 확인',
            '사용량 큰 앱의 백그라운드 데이터 제한',
            '자동 업데이트/동기화 옵션 점검',
            '24시간 사용량 추이 확인',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 업데이트',
              text: '앱 자동 업데이트가 데이터 소모를 키울 수 있어요.',
            },
          ],
          proposals: ['절약모드 활성화', '백그라운드 제한 설정'],
          coreActions: [
            {
              id: 1,
              icon: '📊',
              title: '사용량 점검',
              description: '앱별 데이터 사용량 확인',
            },
            {
              id: 2,
              icon: '🚫',
              title: '백그라운드 제한',
              description: '상시 동기화 앱 제한 설정',
            },
          ],
          nextActions: ['📩 24시간 후 사용량 재확인', '📞 이상 지속 시 재문의'],
          currentStatus: [
            { icon: '✨', label: '상태', value: '안내 완료', detail: '' },
          ],
        }),
      },
      update: {
        ticketId: 'DATA-33019',
        category: '기타',
        summary:
          '백그라운드 동기화 앱 점검 후 제한 설정 안내. 변경 후 하루 추이 확인 권장.',
        promptKey: 'user_mock_v2',
        payload: userPayload({
          id: 'DATA-33019',
          category: '기타',
          summary:
            '백그라운드 동기화 앱 점검 후 제한 설정 안내. 변경 후 하루 추이 확인 권장.',
          tipsItems: [
            '사용량 큰 앱 확인',
            '백그라운드 데이터 제한',
            '절약모드 적용',
          ],
          guideSteps: [
            '설정 > 셀룰러에서 앱별 데이터 사용량 확인',
            '사용량 큰 앱의 백그라운드 데이터 제한',
            '자동 업데이트/동기화 옵션 점검',
            '24시간 사용량 추이 확인',
          ],
          notices: [
            {
              id: 1,
              title: '⚠️ 업데이트',
              text: '앱 자동 업데이트가 데이터 소모를 키울 수 있어요.',
            },
          ],
          proposals: ['절약모드 활성화', '백그라운드 제한 설정'],
          coreActions: [
            {
              id: 1,
              icon: '📊',
              title: '사용량 점검',
              description: '앱별 데이터 사용량 확인',
            },
            {
              id: 2,
              icon: '🚫',
              title: '백그라운드 제한',
              description: '상시 동기화 앱 제한 설정',
            },
          ],
          nextActions: ['📩 24시간 후 사용량 재확인', '📞 이상 지속 시 재문의'],
          currentStatus: [
            { icon: '✨', label: '상태', value: '안내 완료', detail: '' },
          ],
        }),
      },
    },
  ];

  // 실제 upsert 실행
  for (const s of upsertSummaries) {
    await prisma.consultSummary.upsert(s);
  }

  console.log('✅ ConsultSummary USER payload upsert 완료');
}

main()
  .catch((e) => {
    console.error('❌ Seed 실패:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
