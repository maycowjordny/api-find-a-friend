import { AddressCreateUseCase } from "../../address/create-address";
import { PrismaAddressRepository } from "@/infra/database/prisma/repositories/prisma-address-repository";

export function makeAddressUseCase() {
  const addressRepository = new PrismaAddressRepository();
  const addressUseCase = new AddressCreateUseCase(addressRepository);
  return addressUseCase;
}
