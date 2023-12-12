import { Requirement as RequirementModel } from "@/application/interfaces/requirement";
import { Prisma, Requirement as RawRequirement } from "@prisma/client";

export function convertToPrisma(
  data: RequirementModel
): Prisma.RequirementUncheckedCreateInput {
  const requirementPrisma: Prisma.RequirementUncheckedCreateInput = {
    description: data.description,
    petId: data.petId,
  };

  return requirementPrisma;
}

export function convertToDomain(data: RawRequirement): RequirementModel {
  const requirement: RequirementModel = {
    id: data.id,
    description: data.description,
    petId: data.petId,
    createdAt: data.createdAt,
  };

  return requirement;
}
