import { Pet, PetsToAdopt } from "@/application/interfaces/pet";
import { GetPet } from "@/application/interfaces/pet";

export interface PetsRepository {
  create(data: Pet): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  findManyNearby(data: GetPet): Promise<PetsToAdopt>;
}
