import { expect, describe, it, beforeEach, vi } from "vitest";
import { randomUUID } from "crypto";
import { InMemoryPetRepository } from "@/infra/database/in-memory-repository/in-memory-pet-repository";
import { FindPetByIdUseCase } from "./find-pet-by-id";
import {
  PetEnumEnergyLevels,
  PetEnumEnviroment,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "@/application/enum/pet-enum";

let petInMemoryRepository: InMemoryPetRepository;
let findPetByIdUseCase: FindPetByIdUseCase;

describe("Find pet by Id Use Case", () => {
  beforeEach(() => {
    petInMemoryRepository = new InMemoryPetRepository();
    findPetByIdUseCase = new FindPetByIdUseCase(petInMemoryRepository);
  });

  it("should be able to find  pet by id", async () => {
    const { id } = await petInMemoryRepository.create({
      id: "e5f5b1f0-c3cf-44bd-9ab2-585693acaaad",
      typeId: "type-1",
      organizationId: "org-1",
      age: 6,
      description: "string",
      energyLevels: PetEnumEnergyLevels.HIGH,
      environment: PetEnumEnviroment.MEDIUM,
      idependenceLevels: PetEnumIndependenceLevels.LOW,
      name: "john doe",
      size: PetEnumSize.SMALL,
      toAdopt: true,
      createdAt: new Date(),
    });

    await findPetByIdUseCase.execute({ id: id! });
  });
});
