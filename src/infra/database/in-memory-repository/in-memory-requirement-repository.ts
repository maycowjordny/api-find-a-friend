import { randomUUID } from "crypto";
import { RequirementRepositoryAbstract } from "../repositories/requirement-abstract";
import { Requirement } from "@/application/interfaces/requirement";

export class RequirementInMemory implements RequirementRepositoryAbstract {
  public REQUIREMENT: Requirement[] = [];

  async create(data: Requirement): Promise<any> {
    for (const requirement of data.description) {
      const req = {
        id: randomUUID(),
        petId: data.petId,
        description: requirement,
        createdAt: new Date(),
      };

      this.REQUIREMENT.push(req);
    }
  }
}
