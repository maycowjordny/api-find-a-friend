import { z } from "zod";

export const petTypeRegisterBodySchema = z.object({
  name: z.string(),
});
