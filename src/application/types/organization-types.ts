import { AddressCreateUseCaseRequest } from "./address-types";

export type OrganizationRegisterUseCaseRequest = {
  userId: string;
  name: string;
  phone: string;
  address: AddressCreateUseCaseRequest;
};

export type OrganizationRegisterUseCaseResponse = {
  userId: string;
  name: string;
  phone: string;
};

export type Body = {
  name: string;
  phone: string;
  city: string;
  country: string;
  lat: string;
  lng: string;
  neighbourhood: string;
  postalCode: string;
  province: string;
  uf: string;
};
