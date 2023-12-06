import { prisma } from "@/infra/database/lib/prisma";
import { Prisma } from "@prisma/client";
import { UsersRepository } from "../../repositories/users-abstract";

export class PrismaUsersRepository implements UsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    });
    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
}
