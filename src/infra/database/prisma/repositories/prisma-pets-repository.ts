import { Prisma } from "@prisma/client";
import { PetsRepository } from "../../repositories/pets-abstract";
import { prisma } from "../../lib/prisma";

export class PrismaPetsRepository implements PetsRepository {
  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    });
    return pet;
  }
  async petType(data: Prisma.PetTypeCreateInput) {
    const pet = await prisma.petType.create({
      data,
    });
    return pet;
  }
}
