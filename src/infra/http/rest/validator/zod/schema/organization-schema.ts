import { z } from "zod";
import { addressBodySchema } from "./adress-schema";
export const OrganizationCreateBodySchema = z.object({
  userId: z.string().uuid(),
  name: z.string(),
  phone: z.string(),
  address: addressBodySchema,
});
