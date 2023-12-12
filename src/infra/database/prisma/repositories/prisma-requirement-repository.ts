import { Requirement } from "@/application/interfaces/requirement";
import { RequirementRepositoryAbstract } from "../../repositories/requirement-abstract";
import { prisma } from "../../lib/prisma";
import { convertToDomain, convertToPrisma } from "../mapper/requirement-mapper";

export class PrismaRequirementRepository
  implements RequirementRepositoryAbstract
{
  async create(data: Requirement): Promise<Requirement> {
    const requirement = await prisma.requirement.create({
      data: convertToPrisma(data),
    });
    return convertToDomain(requirement);
  }
}
