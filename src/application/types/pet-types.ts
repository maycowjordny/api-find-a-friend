import {
  PetEnumEnergyLevels,
  PetEnumEnviroment,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "@/application/enum/pet-enum";
import { Pet } from "../interfaces/pet";

export type PetRegisterUseCaseRequest = {
  name: string;
  description: string;
  age: number;
  size: PetEnumSize;
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
