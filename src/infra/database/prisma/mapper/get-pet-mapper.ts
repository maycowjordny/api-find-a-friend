import {
  PetEnumEnergyLevels,
  PetEnumEnviroment,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "@/application/enum/pet-enum";
import { Pagination, PetsToAdopt } from "@/application/interfaces/pet";
import { Pet as PetPrisma } from "@prisma/client";

export function findManyconvertToDomain(
  data: PetPrisma[],
  pagination: Pagination
): PetsToAdopt {
  const pet = data.map((pet) => {
    return {
      id: pet.id,
      organizationId: pet.organizationId,
      typeId: pet.typeId,
      name: pet.name,
      description: pet.description,
      age: pet.age,
      toAdopt: pet.toAdopt,
      energyLevels: PetEnumEnergyLevels[pet.energyLevels],
      environment: PetEnumEnviroment[pet.environment],
      idependenceLevels: PetEnumIndependenceLevels[pet.idependenceLevels],
      size: PetEnumSize[pet.size],
      createdAt: pet.createdAt,
    };
  });

  const pag: Pagination = {
    skip: pagination.skip,
    take: pagination.take,
    total: pagination.total,
  };

  const petsToAdopt: PetsToAdopt = {
    pets: pet,
    pagination: pag,
  };

  return petsToAdopt;
}
