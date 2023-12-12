import { Address } from "@/application/interfaces/address";
import { prisma } from "../../lib/prisma";
import { AddressRepositoryAbstract } from "../../repositories/address-abstract";
import { convertToDomain, convertToPrisma } from "../mapper/address-mapper";

export class PrismaAddressRepository implements AddressRepositoryAbstract {
  async create(data: Address) {
    const address = await prisma.address.create({
      data: convertToPrisma(data),
    });

    return convertToDomain(address);
  }
}
