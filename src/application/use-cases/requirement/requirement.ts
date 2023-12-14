import { RequirementUseCaseRequest } from "@/application/types/requirement-types";
import { RequirementRepositoryAbstract } from "@/infra/database/repositories/requirement-abstract";

export class RequirementUseCase {
  constructor(private requirementRepository: RequirementRepositoryAbstract) {}
  async execute(body: RequirementUseCaseRequest) {
    const { descriptions, petId } = body;

    for (const description of descriptions) {
      await this.requirementRepository.create({
        petId,
        description: description,
      });
    }
  }
}
