import {
  PetEnumEnergyLevels,
  PetEnumEnviroment,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "@/application/enum/pet-enum";
import { Pet as PetModel } from "@/application/interfaces/pet";
import {
  Prisma,
  Pet as RawPet,
  PetEnergyLevels,
  PetEnvironment,
  PetSize,
} from "@prisma/client";

export function convertToPrisma(
  data: PetModel
): Prisma.PetUncheckedCreateInput {
  const userPrisma: Prisma.PetUncheckedCreateInput = {
    name: data.name,
    age: data.age,
    description: data.description,
    toAdopt: data.toAdopt,
    typeId: data.typeId,
    organizationId: data.organizationId,
    energyLevels: PetEnumEnergyLevels[data.energyLevels] as PetEnergyLevels,
    environment: PetEnumEnviroment[data.environment] as PetEnvironment,
    idependenceLevels: PetEnumIndependenceLevels[
      data.idependenceLevels
    ] as PetEnergyLevels,
    size: PetEnumSize[data.size] as PetSize,
  };

  return userPrisma;
}

export function convertToDomain(data: RawPet): PetModel {
  const user: PetModel = {
    id: data.id,
    name: data.name,
    age: data.age,
    description: data.description,
    toAdopt: data.toAdopt,
    typeId: data.typeId,
    organizationId: data.organizationId,
    energyLevels: PetEnumEnergyLevels[data.energyLevels],
    environment: PetEnumEnviroment[data.environment],
    idependenceLevels: PetEnumIndependenceLevels[data.idependenceLevels],
    size: PetEnumSize[data.size],
    createdAt: data.createdAt,
  };

  return user;
}
