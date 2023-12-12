import {
  RequirementUseCaseRequest,
  RequirementUseCaseResponse,
} from "@/application/types/requirement-types";
import { RequirementRepositoryAbstract } from "@/infra/database/repositories/requirement-abstract";

export class RequirementUseCase {
  constructor(private requirementRepository: RequirementRepositoryAbstract) {}
  async execute(
    body: RequirementUseCaseRequest
  ): Promise<RequirementUseCaseResponse> {
    const { description, petId } = body;
    const requirement = await this.requirementRepository.create({
      description,
      petId,
    });

    return { requirement };
  }
}
