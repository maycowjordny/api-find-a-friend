import { z } from "zod";

export const findPetByIdBodySchema = z.object({
  id: z.string().uuid(),
});
