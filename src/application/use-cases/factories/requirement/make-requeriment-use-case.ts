import { PrismaRequirementRepository } from "@/infra/database/prisma/repositories/prisma-requirement-repository";
import { RequirementUseCase } from "../../requirement/requirement";

export function makeRequirementUseCase() {
  const requirementRepository = new PrismaRequirementRepository();
  const requirementUseCase = new RequirementUseCase(requirementRepository);

  return requirementUseCase;
}
