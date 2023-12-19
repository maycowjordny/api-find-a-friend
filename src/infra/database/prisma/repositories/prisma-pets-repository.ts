import { PetsRepository } from "../../repositories/pets-abstract";
import { prisma } from "../../lib/prisma";
import {
  Pet,
  GetPet,
  Pagination,
  PetsToAdopt,
} from "@/application/interfaces/pet";
import { convertToDomain, convertToPrisma } from "../mapper/pet-mapper";

import { findManyconvertToDomain } from "../mapper/get-pet-mapper";

export class PrismaPetsRepository implements PetsRepository {
  async findById(id: string): Promise<Pet | null> {
    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
    });

    return pet && convertToDomain(pet);
  }

  async findManyNearby(data: GetPet): Promise<PetsToAdopt> {
    const pets = await prisma.pet.findMany({
      where: {
        toAdopt: true,
        energyLevels: data.energyLevels,
        idependenceLevels: data.idependenceLevels,
        size: data.size,
        age: data.age,
        organization: {
          Address: {
            city: data.city,
            uf: data.uf,
          },
        },
      },
      skip: (data.skip - 1) * data.take,
      take: data.take,
    });

    const count = await prisma.pet.count({
      where: {
        toAdopt: true,
        energyLevels: data.energyLevels,
        idependenceLevels: data.idependenceLevels,
        size: data.size,
        age: data.age,
        organization: {
          Address: {
            city: data.city,
            uf: data.uf,
          },
        },
      },
    });

    const page = {
      take: data.take,
      skip: data.skip,
      total: count,
    };

    return findManyconvertToDomain(pets, page);
  }

  async create(data: Pet): Promise<Pet> {
    const pet = await prisma.pet.create({
      data: convertToPrisma(data),
    });
    return convertToDomain(pet);
  }
}
