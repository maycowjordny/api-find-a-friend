import { z } from "zod";

export const petRegisterBodySchema = z.object({
  name: z.string(),
  age: z.number(),
  description: z.string(),
  energyLevels: z.enum(["LOW", "MEDIUM", "HIGH"]),
  enviroment: z.enum(["SMALL", "MEDIUM", "LARGE"]),
  idependenceLevels: z.enum(["LOW", "MEDIUM", "HIGH"]),
  size: z.enum(["SMALL", "MEDIUM", "LARGE"]),
  typeName: z.string(),
  toAdopt: z.boolean(),
});
