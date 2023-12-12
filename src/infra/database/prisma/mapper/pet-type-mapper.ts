import { PetType as PetTypeModel } from "@/application/interfaces/pet-type";
import { Prisma, PetType as RawPetType } from "@prisma/client";

export function convertToPrisma(
  data: PetTypeModel
): Prisma.PetTypeUncheckedCreateInput {
  const petTypePrisma: Prisma.PetTypeUncheckedCreateInput = {
    id: data.id,
    name: data.name,
  };

  return petTypePrisma;
}

export function convertToDomain(data: RawPetType): PetTypeModel {
  const petType: PetTypeModel = {
    id: data.id,
    name: data.name,
    createdAt: data.createdAt,
  };

  return petType;
}
