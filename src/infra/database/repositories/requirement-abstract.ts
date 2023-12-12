import { Requirement } from "@/application/interfaces/requirement";

export interface RequirementRepositoryAbstract {
  create(data: Requirement): Promise<Requirement>;
}
