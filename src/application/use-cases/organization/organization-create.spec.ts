import { describe, expect, it } from "vitest";
import { OrganizationCreateUseCase } from "./create-organization";
import { InMemoryOrganizationRepository } from "@/infra/database/in-memory-repository/in-memory-organization-repository";

describe("Organization Use Case", () => {
  it("should be able create organization", async () => {
    const inMemoryOrganizationRepository = new InMemoryOrganizationRepository();
    const createOrganization = new OrganizationCreateUseCase(
      inMemoryOrganizationRepository
    );

    const mockOrganization = {
      name: "Test",
      phone: "88 997888028",
      userId: expect.any(String),
      address: expect.any(String),
    };

    const organization = await createOrganization.execute(mockOrganization);
  });
});
