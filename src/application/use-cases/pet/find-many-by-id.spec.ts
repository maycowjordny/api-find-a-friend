import { expect, describe, it, beforeEach, vi } from "vitest";
import { randomUUID } from "crypto";
import { InMemoryPetRepository } from "@/infra/database/in-memory-repository/in-memory-pet-repository";
import { FindPetByIdUseCase } from "./find-many-by-id";

let petInMemoryRepository: InMemoryPetRepository;
let findPetByIdUseCase: FindPetByIdUseCase;

describe("Find Many by Id Use Case", () => {
  beforeEach(() => {
    petInMemoryRepository = new InMemoryPetRepository();
    findPetByIdUseCase = new FindPetByIdUseCase(petInMemoryRepository);
  });

  it("should be able to find  pet by id", async () => {});

  it("should be able throw error when create a pet fail", async () => {});
});
