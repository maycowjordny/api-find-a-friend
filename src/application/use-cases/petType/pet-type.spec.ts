import { describe, it, beforeEach, expect, vi } from "vitest";
import { PetTypeUseCase } from "./pet-type-create";
import { PetTypeInMemory } from "@/infra/database/in-memory-repository/in-memory-pet-type-repository";

let petTypeInMmemoryRepository: PetTypeInMemory;
let petTypeUseCase: PetTypeUseCase;

describe("PetType Use Case", () => {
  const mockRepositoryPetType = {
    create: vi.fn(),
  };

  beforeEach(() => {
    petTypeInMmemoryRepository = new PetTypeInMemory();
    petTypeUseCase = new PetTypeUseCase(petTypeInMmemoryRepository);
  });

  it("should be able to create a pet type", async () => {
    const mockPetType = {
      name: "Dog",
    };

    const { petType } = await petTypeUseCase.execute({
      name: mockPetType.name,
    });

    expect(petType).toMatchObject({
      id: expect.any(String),
      name: "Dog",
      createdAt: expect.any(Date),
    });
  });

  it("should be able throw error when create a pet type fail", async () => {
    mockRepositoryPetType.create.mockRejectedValue(new Error());

    const createPetTypeUseCase = new PetTypeUseCase(mockRepositoryPetType);

    await expect(() =>
      createPetTypeUseCase.execute({
        name: "Dog",
      })
    ).rejects.toThrow(Error);
  });
});
