import { Address as AddressModel } from "@/application/interfaces/address";
import { Prisma, Address as RawAddress } from "@prisma/client";

export function convertToPrisma(
  data: AddressModel
): Prisma.AddressUncheckedCreateInput {
  const addressPrisma: Prisma.AddressUncheckedCreateInput = {
    id: data.id,
    city: data.city,
    country: data.country,
    lat: data.lat,
    lng: data.lng,
    neighbourhood: data.neighbourhood,
    postalCode: data.postalCode,
    province: data.province,
    uf: data.uf,
  };

  return addressPrisma;
}

export function convertToDomain(data: RawAddress): AddressModel {
  const address: AddressModel = {
    id: data.id,
    city: data.city,
    country: data.country,
    lat: data.lat,
    lng: data.lng,
    neighbourhood: data.neighbourhood,
    postalCode: data.postalCode,
    province: data.province,
    uf: data.uf,
  };

  return address;
}
