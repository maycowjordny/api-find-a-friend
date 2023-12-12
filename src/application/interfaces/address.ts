export interface Address {
  id?: string;
  city: string;
  country: string;
  lat: string;
  lng: string;
  neighbourhood: string;
  postalCode: string;
  province: string;
  uf: string;
  createdAt?: string | Date | undefined;
}
