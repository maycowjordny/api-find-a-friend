import {
  PetEnumEnergyLevels,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "@/application/enum/pet-enum";
import { z } from "zod";

const petEnumSize = Object.values(PetEnumSize) as [PetEnumSize];
const petEnumEnergyLevels = Object.values(PetEnumEnergyLevels) as [
  PetEnumEnergyLevels
];

const petEnumIndependenceLevels = Object.values(PetEnumIndependenceLevels) as [
  PetEnumIndependenceLevels
];
export const petGetRegisterBodySchema = z.object({
  take: z
    .string()
    .default("1")
    .transform((val) => Number(val)),
  skip: z
    .string()
    .default("100")
    .transform((val) => Number(val)),
  size: z.enum(petEnumSize).optional(),
  city: z.string(),
  uf: z.string(),
  energyLevels: z.enum(petEnumEnergyLevels).optional(),
  idependenceLevels: z.enum(petEnumIndependenceLevels).optional(),
  age: z
    .string()
    .transform((val) => Number(val))
    .optional(),
});
