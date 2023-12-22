import { expect, describe, it, beforeEach, vi } from "vitest";
import { AddressCreateUseCase } from "./create-address";
import { InMemoryAddressRepository } from "@/infra/database/in-memory-repository/in-memory-address-repository";

let addressRepository: InMemoryAddressRepository;
let addressUseCase: AddressCreateUseCase;

describe("Address Use Case", () => {
  const addressRepositoryMock = {
    create: vi.fn(),
  };

  beforeEach(() => {
    addressRepository = new InMemoryAddressRepository();
    addressUseCase = new AddressCreateUseCase(addressRepository);
  });

  it("should be able to create a address", async () => {
    const { address } = await addressUseCase.execute({
      city: "Fortaleza",
      country: "Brasil",
      lat: "-3.7931392",
      lng: "-38.6020164",
      neighbourhood: "Fortaleza",
      postalCode: "63010010",
      province: "Ceara",
      uf: "CE",
    });

    const addressResponse = {
      id: expect.any(String),
      city: "Fortaleza",
      country: "Brasil",
      lat: "-3.7931392",
      lng: "-38.6020164",
      neighbourhood: "Fortaleza",
      postalCode: "63010010",
      province: "Ceara",
      uf: "CE",
      createdAt: expect.any(Date),
    };

    expect(address).toMatchObject(addressResponse);
  });

  it("should be able throw error when create address fail", async () => {
    addressRepositoryMock.create.mockRejectedValue(new Error());

    const createAdressUseCase = new AddressCreateUseCase(addressRepositoryMock);

    await expect(() =>
      createAdressUseCase.execute({
        city: "Fortaleza",
        country: "Brasil",
        lat: "-3.7931392",
        lng: "-38.6020164",
        neighbourhood: "Fortaleza",
        postalCode: "63010010",
        province: "Ceara",
        uf: "CE",
      })
    ).rejects.toThrow(Error);
  });
});
