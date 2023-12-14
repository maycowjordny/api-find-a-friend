import { GetPet, Pet, PetsToAdopt } from "@/application/interfaces/pet";
import { PetsRepository } from "../repositories/pets-abstract";
import { randomUUID } from "crypto";

export class InMemoryPetRepository implements PetsRepository {
  findById(id: string): Promise<Pet | null> {
    throw new Error("Method not implemented.");
  }
  findManyNearby(data: GetPet): Promise<PetsToAdopt> {
    throw new Error("Method not implemented.");
  }
  public items: Pet[] = [];
  async create(data: Pet): Promise<Pet> {
    const pet = {
      id: randomUUID(),
      name: data.name,
      description: data.description,
      age: data.age,
      energyLevels: data.energyLevels,
      typeId: data.typeId,
      organizationId: data.organizationId,
      size: data.size,
      environment: data.environment,
      toAdopt: data.toAdopt,
      createdAt: data.createdAt,
      idependenceLevels: data.idependenceLevels,
    };

    this.items.push(pet);

    return pet;
  }
}
