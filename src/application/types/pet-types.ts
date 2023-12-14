import {
  PetEnumEnergyLevels,
  PetEnumEnviroment,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "@/application/enum/pet-enum";
import { Pagination, Pet, PetsToAdopt } from "../interfaces/pet";

export type PetRegisterUseCaseRequest = {
  name: string;
  description: string;
  age: number;
  size: PetEnumSize;
  pictures: string[];
  requirements: string[];
  energyLevels: PetEnumEnergyLevels;
  idependenceLevels: PetEnumIndependenceLevels;
  environment: PetEnumEnviroment;
  toAdopt: boolean;
  organizationId: string;
  typeId: string;
};

export type PetRegisterUseCaseResponse = {
  pet: Pet;
};

export type GetPetUseCaseRequest = {
  take: number;
  skip: number;
  energyLevels?: PetEnumEnergyLevels;
  age?: number;
  size?: PetEnumSize;
  uf: string;
  city: string;
  idependenceLevels?: PetEnumIndependenceLevels;
};

export type GetPetUseCaseResponse = {
  pet: PetsToAdopt;
};
