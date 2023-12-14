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
  pictures: string[];
  requirements: string[];
  typeId: string;
  toAdopt: boolean;
}

export interface GetPet {
  skip: number;
  take: number;
  energyLevels?: PetEnumEnergyLevels;
  age?: number;
  size?: PetEnumSize;
  uf: string;
  city: string;
  idependenceLevels?: PetEnumIndependenceLevels;
}
[];

export interface Pagination {
  skip: number;
  total: number;
  take: number;
}

export interface PetsToAdopt {
  pets: Pet[];
  pagination: Pagination;
}

export interface FindPetById {
  id?: string | undefined;
}

export interface FindByidUseCaseRequest {
  id: string;
}
