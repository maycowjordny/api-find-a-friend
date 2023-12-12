/*
  Warnings:

  - A unique constraint covering the columns `[IDT_ADDRESS]` on the table `ORGANIZATION` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `IDT_ADDRESS` to the `ORGANIZATION` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ADRESS" DROP CONSTRAINT "ADRESS_IDT_ORGANIZATION_fkey";

-- AlterTable
ALTER TABLE "ORGANIZATION" ADD COLUMN     "IDT_ADDRESS" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ORGANIZATION_IDT_ADDRESS_key" ON "ORGANIZATION"("IDT_ADDRESS");

-- AddForeignKey
ALTER TABLE "ORGANIZATION" ADD CONSTRAINT "ORGANIZATION_IDT_ADDRESS_fkey" FOREIGN KEY ("IDT_ADDRESS") REFERENCES "ADRESS"("IDT_ADRESS") ON DELETE RESTRICT ON UPDATE CASCADE;
