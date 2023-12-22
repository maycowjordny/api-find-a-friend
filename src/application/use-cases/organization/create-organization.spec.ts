import { expect, describe, it, beforeEach, vi } from "vitest";
import { OrganizationCreateUseCase } from "./create-organization";
import { InMemoryOrganizationRepository } from "@/infra/database/in-memory-repository/in-memory-organization-repository";
import { randomUUID } from "crypto";

let organizationRepository: InMemoryOrganizationRepository;
let organizationUseCase: OrganizationCreateUseCase;

describe("Organization Use Case", () => {
  const mockRepositoryOrganization = {
    create: vi.fn(),
  };

  beforeEach(() => {
    organizationRepository = new InMemoryOrganizationRepository();
    organizationUseCase = new OrganizationCreateUseCase(organizationRepository);
  });

  const address = {
    postalCode: "99999999",
    uf: "uf",
    country: "country",
    city: "city",
    province: "province",
    neighbourhood: "neighbourhood",
    lat: "99999999",
    lng: "-1111111",
  };

  vi.mock(
    "@/application/use-cases/factories/organization/make-organization-use-case",
    () => ({
      makeCreateAddressUseCase: vi.fn(() => ({
        execute: vi.fn(),
      })),
    })
  );

  it.skip("should be able to create a organization", async () => {
    const mockOrganization = {
      userId: randomUUID(),
      name: "John Doe",
      phone: "99 99999999",
      address: address,
    };

    const { organization } = await organizationUseCase.execute(
      mockOrganization
    );

    expect(organization).toMatchObject({
      userId: expect.any(String),
      name: mockOrganization.name,
      phone: mockOrganization.phone,
      createdAt: expect.any(Date),
    });
  });

  it.skip("should be able throw error when create a organization fail", async () => {
    mockRepositoryOrganization.create.mockRejectedValue(new Error());

    const createOrganizationUseCase = new OrganizationCreateUseCase(
      mockRepositoryOrganization
    );

    await expect(() =>
      createOrganizationUseCase.execute({
        name: "John Doe",
        address: address,
        phone: "99 99999999",
        userId: expect.any(String),
      })
    ).rejects.toThrow(Error);
  });
});
