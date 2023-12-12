import { z } from "zod";

export const addressBodySchema = z.object({
  city: z.string(),
  country: z.string(),
  lat: z.string(),
  lng: z.string(),
  neighbourhood: z.string(),
  postalCode: z.string(),
  province: z.string(),
  uf: z.string(),
});
