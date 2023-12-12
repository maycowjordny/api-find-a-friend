import { PetType } from "../interfaces/pet-type";

export type PetTypeUseCaseRequest = {
  name: string;
};

export type PetTypeUseCaseResponse = {
  petType: PetType;
};
