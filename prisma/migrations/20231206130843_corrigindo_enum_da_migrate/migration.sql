/*
  Warnings:

  - The values [HIGT] on the enum `PetEnergyLevels` will be removed. If these variants are still used in the database, this will fail.
  - The values [HIGT] on the enum `PetIdenpendenceLevels` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PetEnergyLevels_new" AS ENUM ('LOW', 'MEDIUM', 'HIGH');
ALTER TABLE "PET" ALTER COLUMN "IND_ENERGY_LEVELS" TYPE "PetEnergyLevels_new" USING ("IND_ENERGY_LEVELS"::text::"PetEnergyLevels_new");
ALTER TYPE "PetEnergyLevels" RENAME TO "PetEnergyLevels_old";
ALTER TYPE "PetEnergyLevels_new" RENAME TO "PetEnergyLevels";
DROP TYPE "PetEnergyLevels_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PetIdenpendenceLevels_new" AS ENUM ('LOW', 'MEDIUM', 'HIGH');
ALTER TABLE "PET" ALTER COLUMN "IND_INDEPENDENCE_LEVELS" TYPE "PetIdenpendenceLevels_new" USING ("IND_INDEPENDENCE_LEVELS"::text::"PetIdenpendenceLevels_new");
ALTER TYPE "PetIdenpendenceLevels" RENAME TO "PetIdenpendenceLevels_old";
ALTER TYPE "PetIdenpendenceLevels_new" RENAME TO "PetIdenpendenceLevels";
DROP TYPE "PetIdenpendenceLevels_old";
COMMIT;
