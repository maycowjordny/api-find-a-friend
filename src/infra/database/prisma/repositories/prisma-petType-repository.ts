import { PetType } from "@/application/interfaces/pet-type";
import { prisma } from "../../lib/prisma";
import { convertToDomain, convertToPrisma } from "../mapper/pet-type-mapper";
import { PetTypeRepositoryAbstract } from "../../repositories/pet-type-abstract";

export class PrismaPetTypeRepository implements PetTypeRepositoryAbstract {
  async create(data: PetType) {
    const petType = await prisma.petType.create({
      data: convertToPrisma(data),
    });
    return convertToDomain(petType);
  }
}
