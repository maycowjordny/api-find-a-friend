import { UserRoleEnum, UserTypesEnum } from "@/application/enum/user-enum";
import { User as UserModel } from "@/application/interfaces/user";
import { Prisma, User as RawUser, UserRole, UserType } from "@prisma/client";

export function convertToPrisma(data: UserModel): Prisma.UserCreateInput {
  const userPrisma: Prisma.UserCreateInput = {
    name: data.name,
    email: data.email,
    password: data.password,
    type: UserTypesEnum[data.type] as UserType,
    role: UserRoleEnum[data.role] as UserRole,
  };

  return userPrisma;
}

export function convertToDomain(data: RawUser): UserModel {
  const user: UserModel = {
    id: data.id,
    name: data.name,
    email: data.email,
    password: data.password,
    type: UserTypesEnum[data.type],
    role: UserRoleEnum[data.role],
    createdAt: data.createdAt,
  };

  return user;
}
