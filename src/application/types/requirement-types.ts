import { Requirement } from "../interfaces/requirement";

export interface RequirementUseCaseRequest {
  petId: string;
  description: string;
}

export interface RequirementUseCaseResponse {
  requirement: Requirement;
}
