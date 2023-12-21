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

describe("Organization Use Case", () => {
  const mockRepositoryPet = {
    create: vi.fn(),
    findById: vi.fn(),
    findManyNearby: vi.fn(),
  };

  vi.mock(
    "@/application/use-cases/factories/picture/make-picture-use-case",
    () => ({
      makePictureUseCase: vi.fn(() => ({
        execute: vi.fn(),
      })),
    })
  );

  vi.mock(
    "@/application/use-cases/factories/requirement/make-requeriment-use-case",
    () => ({
      makeRequirementUseCase: vi.fn(() => ({
        execute: vi.fn(),
      })),
    })
  );

  beforeEach(() => {
    petInMemoryRepository = new InMemoryPetRepository();
    petCreateUseCase = new PetRegisterUseCase(petInMemoryRepository);
  });

  it("should be able to create a pet", async () => {
    const mockPet = {
      name: "animal",
      age: 10,
      description: "description",
      energyLevels: PetEnumEnergyLevels.LOW,
      environment: PetEnumEnviroment.LARGE,
      pictures: ["url", "url"],
      requirements: ["requirements", "requirements"],
      idependenceLevels: PetEnumIndependenceLevels.LOW,
      size: PetEnumSize.LARGE,
      typeId: randomUUID(),
      organizationId: randomUUID(),
      toAdopt: true,
    };

    const response = {
      id: expect.any(String),
      name: "animal",
      age: 10,
      description: "description",
      energyLevels: PetEnumEnergyLevels.LOW,
      environment: PetEnumEnviroment.LARGE,
      idependenceLevels: PetEnumIndependenceLevels.LOW,
      size: PetEnumSize.LARGE,
      typeId: expect.any(String),
      organizationId: expect.any(String),
      toAdopt: true,
      createdAt: expect.any(Date),
    };

    const { pet } = await petCreateUseCase.execute(mockPet);

    expect(pet).toMatchObject(response);
  });

  it("should be able throw error when create a pet fail", async () => {
    mockRepositoryPet.create.mockRejectedValue(new Error());

    const createPetUseCase = new PetRegisterUseCase(mockRepositoryPet);

    await expect(() =>
      createPetUseCase.execute({
        name: "animal",
        age: 10,
        description: "description",
        energyLevels: PetEnumEnergyLevels.LOW,
        environment: PetEnumEnviroment.LARGE,
        pictures: ["url", "url"],
        requirements: ["requirements", "requirements"],
        idependenceLevels: PetEnumIndependenceLevels.LOW,
        size: PetEnumSize.LARGE,
        typeId: randomUUID(),
        organizationId: randomUUID(),
        toAdopt: true,
      })
    ).rejects.toThrow(Error);
  });
});
