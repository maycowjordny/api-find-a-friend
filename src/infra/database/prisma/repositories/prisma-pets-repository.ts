import { PetsRepository } from "../../repositories/pets-abstract";
import { prisma } from "../../lib/prisma";
import { Pet } from "@/application/interfaces/pet";
import { convertToDomain, convertToPrisma } from "../mapper/pet-mapper";

export class PrismaPetsRepository implements PetsRepository {
  async create(data: Pet): Promise<Pet> {
    const pet = await prisma.pet.create({
      data: convertToPrisma(data),
    });
    return convertToDomain(pet);
  }
}
