import { z } from "zod";

export const authenticateBodySchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});
