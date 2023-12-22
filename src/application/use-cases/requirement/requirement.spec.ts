import { expect, describe, it, beforeEach, vi } from "vitest";
import { RequirementInMemory } from "@/infra/database/in-memory-repository/in-memory-requirement-repository";
import { RequirementUseCase } from "./requirement";
import { randomUUID } from "node:crypto";

let requirementInMmemoryRepository: RequirementInMemory;
let requirementUseCase: RequirementUseCase;

describe("Find pet by Id Use Case", () => {
  beforeEach(() => {
    requirementInMmemoryRepository = new RequirementInMemory();
    requirementUseCase = new RequirementUseCase(requirementInMmemoryRepository);
  });

  it("should be able to create a requirement", async () => {
    const createSpyResponse = vi.spyOn(
      requirementInMmemoryRepository,
      "create"
    );

    expect(() =>
      requirementUseCase.execute({
        petId: randomUUID(),
        descriptions: ["descriptions", "descriptions", "descriptions"],
      })
    ).not.toThrow();

    expect(createSpyResponse).toHaveBeenCalled();
  });
});
