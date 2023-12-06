import { Pet, PetType, Prisma } from "@prisma/client";

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
  petType(data: Prisma.PetTypeCreateInput): Promise<PetType>;
}
