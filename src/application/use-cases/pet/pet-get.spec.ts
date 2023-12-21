import { expect, describe, it, beforeEach, vi } from "vitest";
import { randomUUID } from "crypto";
import { InMemoryPetRepository } from "@/infra/database/in-memory-repository/in-memory-pet-repository";
import { FindPetByIdUseCase } from "./find-many-by-id";

let petInMemoryRepository: InMemoryPetRepository;
let petFindManyUseCase: FindPetByIdUseCase;

describe("Pet Get Use Case", () => {
  const mockRepositoryPet = {
    create: vi.fn(),
    findById: vi.fn(),
    findManyNearby: vi.fn(),
  };

  beforeEach(() => {
    petInMemoryRepository = new InMemoryPetRepository();
    petFindManyUseCase = new FindPetByIdUseCase(petInMemoryRepository);
  });

  it("should be able to find many pets by id", async () => {
    const query = {};

    const pet = await petFindManyUseCase.execute(query);
  });

  it("should be able throw error when create a pet fail", async () => {});
});
