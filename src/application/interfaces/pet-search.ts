import { Pet } from "@prisma/client";

export interface SearchPetRequestUseCase {
  data: string;
  page: number;
}
export interface SearchPetResponseUseCase {
  pets: Pet[];
}
