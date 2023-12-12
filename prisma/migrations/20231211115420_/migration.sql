/*
  Warnings:

  - You are about to drop the column `IDT_ORGANIZATION` on the `ADRESS` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ADRESS_IDT_ORGANIZATION_key";

-- AlterTable
ALTER TABLE "ADRESS" DROP COLUMN "IDT_ORGANIZATION";
