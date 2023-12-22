import { InMemoryOrganizationRepository } from "@/infra/database/in-memory-repository/in-memory-organization-repository";
import { randomUUID } from "crypto";
import { describe, expect, it, vi } from "vitest";
import { OrganizationCreateUseCase } from "./create-organization";

describe("Create Organization Use Case ", async () => {
  const organizationRepositoryMock = {
    create: vi.fn(),
  };

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

  it("should be able to create an organization", async () => {
    vi.mock(
      "@/application/use-cases/factories/address/make-create-address",
      () => ({
        makeAddressUseCase: vi.fn(() => ({
          execute: vi.fn(() => ({
            address: { id: "86f52ca2-a660-4793-9e07-38048904ee2b" },
          })),
        })),
      })
    );

    const createOrganizationInMemory = new InMemoryOrganizationRepository();
    const createOrganizationUseCase = new OrganizationCreateUseCase(
      createOrganizationInMemory
    );

    const { organization } = await createOrganizationUseCase.execute({
      userId: randomUUID(),
      name: "FindAFriend",
      phone: "99 999999999",
      address: address,
    });
    console.log(organization);

    const RESPONSE_OBJECT_MESSAGE = {
      id: expect.any(String),
      userId: expect.any(String),
      addressId: "86f52ca2-a660-4793-9e07-38048904ee2b",
      name: "FindAFriend",
      phone: "99 999999999",
      createdAt: expect.any(Date),
    };

    expect(organization).toMatchObject(RESPONSE_OBJECT_MESSAGE);
  });

  it("should be able to throw an error if creating an organization fails", async () => {
    organizationRepositoryMock.create.mockRejectedValue(new Error());
    const createOrganizationUseCase = new OrganizationCreateUseCase(
      organizationRepositoryMock
    );

    await expect(() =>
      createOrganizationUseCase.execute({
        userId: randomUUID(),
        address: address,
        name: "TypeScript",
        phone: "(99) 9.9999-9999",
      })
    ).rejects.toThrow(Error);
  });
});
