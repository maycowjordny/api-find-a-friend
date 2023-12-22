import { RequirementUseCaseRequest } from "@/application/types/requirement-types";
import { RequirementRepositoryAbstract } from "@/infra/database/repositories/requirement-abstract";
import { vi } from "vitest";

export class RequirementUseCase {
  constructor(private requirementRepository: RequirementRepositoryAbstract) {}
  async execute(body: RequirementUseCaseRequest) {
    const { descriptions, petId } = body;
    try {
      for (const description of descriptions) {
        await this.requirementRepository.create({
          petId,
          description: description,
        });
      }
    } catch (err: any) {
      throw new Error(`Cannot create requirement with error: ${err.message}`);
    }
  }
}
