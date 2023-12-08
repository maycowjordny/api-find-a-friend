import { UserTypesEnum } from "@/application/enum/user-enum";
import { z } from "zod";

const userTypeEnumValues = Object.values(UserTypesEnum) as [UserTypesEnum];

export const registerBodySchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  type: z.enum(userTypeEnumValues),
});
