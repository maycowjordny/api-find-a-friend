import { InMemoryPetRepository } from "@/infra/database/in-memory-repository/in-memory-pet-repository";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { GetPetUseCase } from "./find-many-pet";
import {
  PetEnumEnergyLevels,
  PetEnumEnviroment,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "@/application/enum/pet-enum";

describe("FindMany pet Use Case", async () => {
  let repositoryInMemory: InMemoryPetRepository;
  let findManyPetUseCase: GetPetUseCase;

  beforeEach(() => {
    repositoryInMemory = new InMemoryPetRepository();
    findManyPetUseCase = new GetPetUseCase(repositoryInMemory);
  });

  const petRepositoryMock = {
    findManyNearby: vi.fn(),
    create: vi.fn(),
    findById: vi.fn(),
  };

  it("should findMany filterd age", async () => {
    await createPetRepository(repositoryInMemory);

    const query = {
      age: 6,
      city: "sao carlos",
      uf: "sp",
      take: 20,
      skip: 1,
    };

    const { pet } = await findManyPetUseCase.execute(query);

    const RESPONSE_OBJECT_MESSAGE = [
      {
        id: expect.any(String),
        typeId: "type-1",
        organizationId: "org-1",
        age: 6,
        description: "string",
        energyLevels: PetEnumEnergyLevels.HIGH,
        environment: PetEnumEnviroment.LARGE,
        idependenceLevels: PetEnumIndependenceLevels.HIGH,
        name: "rex",
        size: PetEnumSize.LARGE,
        toAdopt: true,
        createdAt: expect.any(Date),
      },
    ];

    expect(pet.pets).toMatchObject(RESPONSE_OBJECT_MESSAGE);
  });

  it("should findMany filterd size", async () => {
    await createPetRepository(repositoryInMemory);

    const query = {
      size: PetEnumSize.SMALL,
      city: "sao carlos",
      uf: "sp",
      take: 20,
      skip: 1,
    };

    const { pet } = await findManyPetUseCase.execute(query);

    const RESPONSE_OBJECT_MESSAGE = [
      {
        id: expect.any(String),
        typeId: "type-3",
        organizationId: "org-3",
        age: 8,
        description: "string",
        energyLevels: PetEnumEnergyLevels.LOW,
        environment: PetEnumEnviroment.SMALL,
        idependenceLevels: PetEnumIndependenceLevels.LOW,
        name: "rex",
        size: PetEnumSize.SMALL,
        toAdopt: true,
        createdAt: expect.any(Date),
      },
    ];

    expect(pet.pets).toMatchObject(RESPONSE_OBJECT_MESSAGE);
  });

  it("should findMany filterd independenceLevels", async () => {
    await createPetRepository(repositoryInMemory);

    const query = {
      idependenceLevels: PetEnumIndependenceLevels.MEDIUM,
      city: "sao carlos",
      uf: "sp",
      take: 20,
      skip: 1,
    };

    const { pet } = await findManyPetUseCase.execute(query);

    const RESPONSE_OBJECT_MESSAGE = [
      {
        id: expect.any(String),
        typeId: "type-2",
        organizationId: "org-2",
        age: 2,
        description: "string",
        energyLevels: PetEnumEnergyLevels.MEDIUM,
        environment: PetEnumEnviroment.MEDIUM,
        idependenceLevels: PetEnumIndependenceLevels.MEDIUM,
        name: "rex",
        size: PetEnumSize.MEDIUM,
        toAdopt: true,
        createdAt: expect.any(Date),
      },
    ];

    expect(pet.pets).toMatchObject(RESPONSE_OBJECT_MESSAGE);
  });

  it("should findMany filterd energyLevels", async () => {
    await createPetRepository(repositoryInMemory);

    const query = {
      energyLevels: PetEnumEnergyLevels.LOW,
      city: "sao carlos",
      uf: "sp",
      take: 20,
      skip: 1,
    };

    const { pet } = await findManyPetUseCase.execute(query);

    const RESPONSE_OBJECT_MESSAGE = [
      {
        id: expect.any(String),
        typeId: "type-3",
        organizationId: "org-3",
        age: 8,
        description: "string",
        energyLevels: PetEnumEnergyLevels.LOW,
        environment: PetEnumEnviroment.SMALL,
        idependenceLevels: PetEnumIndependenceLevels.LOW,
        name: "rex",
        size: PetEnumSize.SMALL,
        toAdopt: true,
        createdAt: expect.any(Date),
      },
    ];

    expect(pet.pets).toMatchObject(RESPONSE_OBJECT_MESSAGE);
  });

  it("should be able to find for all pets if there is no filter", async () => {
    await createPetRepository(repositoryInMemory);

    const query = {
      city: "sao carlos",
      uf: "sp",
      take: 20,
      skip: 1,
    };

    const { pet } = await findManyPetUseCase.execute(query);

    const RESPONSE_OBJECT_MESSAGE = [
      {
        id: expect.any(String),
        typeId: "type-1",
        organizationId: "org-1",
        age: 6,
        description: "string",
        energyLevels: PetEnumEnergyLevels.HIGH,
        environment: PetEnumEnviroment.LARGE,
        idependenceLevels: PetEnumIndependenceLevels.HIGH,
        name: "rex",
        size: PetEnumSize.LARGE,
        toAdopt: true,
        createdAt: expect.any(Date),
      },
      {
        id: expect.any(String),
        typeId: "type-2",
        organizationId: "org-2",
        age: 2,
        description: "string",
        energyLevels: PetEnumEnergyLevels.MEDIUM,
        environment: PetEnumEnviroment.MEDIUM,
        idependenceLevels: PetEnumIndependenceLevels.MEDIUM,
        name: "rex",
        size: PetEnumSize.MEDIUM,
        toAdopt: true,
        createdAt: expect.any(Date),
      },
      {
        id: expect.any(String),
        typeId: "type-3",
        organizationId: "org-3",
        age: 8,
        description: "string",
        energyLevels: PetEnumEnergyLevels.LOW,
        environment: PetEnumEnviroment.SMALL,
        idependenceLevels: PetEnumIndependenceLevels.LOW,
        name: "rex",
        size: PetEnumSize.SMALL,
        toAdopt: true,
        createdAt: expect.any(Date),
      },
    ];

    expect(pet.pets).toMatchObject(RESPONSE_OBJECT_MESSAGE);
    expect(pet.pets).length(3);
  });

  it("should be able to throw an error if the listing fails", async () => {
    petRepositoryMock.findManyNearby.mockRejectedValue(new Error());
    const findManyPetUseCase = new GetPetUseCase(petRepositoryMock);

    const query = {
      city: "sao carlos",
      uf: "sp",
      take: 20,
      skip: 1,
    };

    await expect(() => findManyPetUseCase.execute(query)).rejects.toThrow(
      Error
    );
  });
});

async function createPetRepository(repositoryInMemory: InMemoryPetRepository) {
  await repositoryInMemory.create({
    typeId: "type-1",
    organizationId: "org-1",
    age: 6,
    description: "string",
    energyLevels: PetEnumEnergyLevels.HIGH,
    environment: PetEnumEnviroment.LARGE,
    idependenceLevels: PetEnumIndependenceLevels.HIGH,
    name: "rex",
    size: PetEnumSize.LARGE,
    toAdopt: true,
    createdAt: new Date(),
  });

  await repositoryInMemory.create({
    typeId: "type-2",
    organizationId: "org-2",
    age: 2,
    description: "string",
    energyLevels: PetEnumEnergyLevels.MEDIUM,
    environment: PetEnumEnviroment.MEDIUM,
    idependenceLevels: PetEnumIndependenceLevels.MEDIUM,
    name: "rex",
    size: PetEnumSize.MEDIUM,
    toAdopt: true,
    createdAt: new Date(),
  });

  await repositoryInMemory.create({
    typeId: "type-3",
    organizationId: "org-3",
    age: 8,
    description: "string",
    energyLevels: PetEnumEnergyLevels.LOW,
    environment: PetEnumEnviroment.SMALL,
    idependenceLevels: PetEnumIndependenceLevels.LOW,
    name: "rex",
    size: PetEnumSize.SMALL,
    toAdopt: true,
    createdAt: new Date(),
  });
}
