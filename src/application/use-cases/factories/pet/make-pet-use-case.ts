import { PrismaPetsRepository } from "@/infra/database/prisma/repositories/prisma-pets-repository";
import { PetRegisterUseCase } from "../../pet/pet-create";
import { GetPetUseCase } from "../../pet/find-many-pet";
import { FindPetByIdUseCase } from "../../pet/find-pet-by-id";

export function makeCreatePetUseCase() {
  const petRepository = new PrismaPetsRepository();
  const petUseCase = new PetRegisterUseCase(petRepository);

  return petUseCase;
}

export function makefindManyPetUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository();
  const findManyPetUseCase = new GetPetUseCase(prismaPetsRepository);

  return findManyPetUseCase;
}

export function makeFindPetByIdUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository();
  const findPetById = new FindPetByIdUseCase(prismaPetsRepository);

  return findPetById;
}
