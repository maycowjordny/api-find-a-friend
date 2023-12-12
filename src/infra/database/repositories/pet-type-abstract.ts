import { PetType } from "@/application/interfaces/pet-type";

export interface PetTypeRepositoryAbstract {
  create(data: PetType): Promise<PetType>;
}
