import { randomUUID } from "crypto";
import { PetTypeRepositoryAbstract } from "../repositories/pet-type-abstract";
import { PetType } from "@/application/interfaces/pet-type";

export class PetTypeInMemory implements PetTypeRepositoryAbstract {
  public petType: PetType[] = [];

  async create(data: PetType): Promise<PetType> {
    const petType = {
      id: randomUUID(),
      name: data.name,
      createdAt: new Date(),
    };

    this.petType.push(petType);

    return petType;
  }
}
