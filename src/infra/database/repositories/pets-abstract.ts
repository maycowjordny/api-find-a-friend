import { Pet } from "@/application/interfaces/pet";

export interface PetsRepository {
  create(data: Pet): Promise<Pet>;
}
