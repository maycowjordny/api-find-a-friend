import { expect, describe, it, beforeEach, vi } from "vitest";
import { randomUUID } from "crypto";
import { InMemoryPetRepository } from "@/infra/database/in-memory-repository/in-memory-pet-repository";
import { PetRegisterUseCase } from "./pet-create";
import {
  PetEnumEnergyLevels,
  PetEnumEnviroment,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "@/application/enum/pet-enum";

let petInMemoryRepository: InMemoryPetRepository;
let petCreateUseCase: PetRegisterUseCase;

describe("PetGet Use Case", () => {
  beforeEach(() => {
    petInMemoryRepository = new InMemoryPetRepository();
    petCreateUseCase = new PetRegisterUseCase(petInMemoryRepository);
  });

  it("should be able to find many pets", async () => {});
});
