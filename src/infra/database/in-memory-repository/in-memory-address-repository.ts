import { Address } from "@/application/interfaces/address";
import { AddressRepositoryAbstract } from "../repositories/address-abstract";
import { randomUUID } from "node:crypto";

export class InMemoryAddressRepository implements AddressRepositoryAbstract {
  public items: Address[] = [];
  async create(data: Address): Promise<Address> {
    const address = {
      id: randomUUID(),
      city: data.city,
      country: data.country,
      lat: data.lat,
      lng: data.lng,
      neighbourhood: data.neighbourhood,
      postalCode: data.postalCode,
      province: data.province,
      uf: data.uf,
      createdAt: new Date(),
    };

    this.items.push(address);

    return address;
  }
}
