import {
  PetEnumEnergyLevels,
  PetEnumEnviroment,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "../enum/pet-enum";

export interface Pet {
  id?: string;
  name: string;
  description: string;
  age: number;
  energyLevels: PetEnumEnergyLevels;
  typeId: string;
  organizationId: string;
  size: PetEnumSize;
  environment: PetEnumEnviroment;
  toAdopt: boolean;
  createdAt?: Date;
  idependenceLevels: PetEnumIndependenceLevels;
}

export interface PetBody {
  organizationId: string;
  name: string;
  age: number;
  description: string;
  energyLevels: PetEnumEnergyLevels;
  environment: PetEnumEnviroment;
  idependenceLevels: PetEnumIndependenceLevels;
  size: PetEnumSize;
  typeId: string;
  toAdopt: boolean;
}
