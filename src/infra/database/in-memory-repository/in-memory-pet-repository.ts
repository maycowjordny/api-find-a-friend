import { Pet } from "@/application/interfaces/pet";
import { PetsRepository } from "../repositories/pets-abstract";
import { randomUUID } from "crypto";

export class InMemoryPetRepository implements PetsRepository {
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
