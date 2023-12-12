import { PrismaPetsRepository } from "@/infra/database/prisma/repositories/prisma-pets-repository";
import { PetRegisterUseCase } from "../pet/pet-create";

export function makeCreatePetUseCase() {
  const petRepository = new PrismaPetsRepository();
  const petUseCase = new PetRegisterUseCase(petRepository);

  return petUseCase;
}
