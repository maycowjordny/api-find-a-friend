import { PetTypeUseCase } from "@/application/use-cases/petType/pet-type-create";
import { PrismaPetTypeRepository } from "@/infra/database/prisma/repositories/prisma-petType-repository";

export function makeCreatePetTypeUseCase() {
  const petTypeRepository = new PrismaPetTypeRepository();
  const petTypeUseCase = new PetTypeUseCase(petTypeRepository);

  return petTypeUseCase;
}
