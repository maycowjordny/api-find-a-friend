import { expect, describe, it, beforeEach, vi } from "vitest";
import { RequirementInMemory } from "@/infra/database/in-memory-repository/in-memory-requirement-repository";
import { RequirementUseCase } from "./requirement";

let requirementInMmemoryRepository: RequirementInMemory;
let requirementUseCase: RequirementUseCase;

describe("Find pet by Id Use Case", () => {
  const requirementRepositoryMock = {
    create: vi.fn(),
  };

  beforeEach(() => {
    requirementInMmemoryRepository = new RequirementInMemory();
    requirementUseCase = new RequirementUseCase(requirementInMmemoryRepository);
  });

  it("should be able to create a requirement", async () => {});
});
