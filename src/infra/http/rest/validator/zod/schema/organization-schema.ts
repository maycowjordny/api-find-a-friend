import { z } from "zod";

export const OrganizationRegisterBodySchema = z.object({
  userId: z.string().uuid(),
  name: z.string(),
  phone: z.string(),
});
