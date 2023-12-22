import { describe, it, beforeEach } from "vitest";
import { PetTypeUseCase } from "./pet-type-create";
import { PetTypeInMemory } from "@/infra/database/in-memory-repository/in-memory-pet-type-repository";

let petTypeInMmemoryRepository: PetTypeInMemory;
let petTypeUseCase: PetTypeUseCase;

describe("PetType Use Case", () => {
  beforeEach(() => {
    petTypeInMmemoryRepository = new PetTypeInMemory();
    petTypeUseCase = new PetTypeUseCase(petTypeInMmemoryRepository);
  });

  it("should be able to create a requirement", async () => {});
});
