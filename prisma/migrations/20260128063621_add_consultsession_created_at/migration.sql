-- AlterTable
ALTER TABLE `ConsultSession` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE INDEX `ConsultSession_createdAt_idx` ON `ConsultSession`(`createdAt`);
