import { GetPet, Pet, PetsToAdopt } from "@/application/interfaces/pet";
import { PetsRepository } from "../repositories/pets-abstract";
import { randomUUID } from "crypto";

export class InMemoryPetRepository implements PetsRepository {
  public items: Pet[] = [];

  async findById(id: string): Promise<Pet | null> {
    const pet = this.items.find((pets) => pets.id == id);
    if (!pet) return null;
    return pet;
  }

  async findManyNearby(data: GetPet): Promise<PetsToAdopt> {
    const filteredPets = this.items.filter((pet) => {
      return pet.toAdopt === true && data.age
        ? pet.age === data.age
        : true && data.energyLevels
        ? pet.energyLevels === data.energyLevels
        : true && data.idependenceLevels
        ? pet.idependenceLevels === data.idependenceLevels
        : true && data.size
        ? pet.size === data.size
        : true;
    });

    const total = filteredPets.length;
    const skip = (data.skip - 1) * data.take;
    const take = data.take;
    const paginationPets = filteredPets.slice(skip, skip + take);
    const pagination = {
      take,
      skip,
      total,
    };

    return { pets: paginationPets, pagination };
  }

  async create(data: Pet): Promise<Pet> {
    const pet = {
      id: randomUUID(),
      name: data.name,
      description: data.description,
      age: data.age,
      energyLevels: data.energyLevels,
      typeId: randomUUID(),
      organizationId: randomUUID(),
      size: data.size,
      environment: data.environment,
      toAdopt: data.toAdopt,
      createdAt: new Date(),
      idependenceLevels: data.idependenceLevels,
    };

    this.items.push(pet);

    return pet;
  }
}
