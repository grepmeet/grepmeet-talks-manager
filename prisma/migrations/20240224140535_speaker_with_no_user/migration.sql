-- DropForeignKey
ALTER TABLE "Speaker" DROP CONSTRAINT "Speaker_userId_fkey";

-- AlterTable
ALTER TABLE "Speaker" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Speaker" ADD CONSTRAINT "Speaker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
