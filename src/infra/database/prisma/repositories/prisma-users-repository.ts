import { prisma } from "@/infra/database/lib/prisma";
import { UsersRepository } from "../../repositories/users-abstract";
import { User } from "@/application/interfaces/user";
import { convertToPrisma, convertToDomain } from "../mapper/user-mapper";

export class PrismaUsersRepository implements UsersRepository {
  async create(data: User): Promise<User> {
    const user = await prisma.user.create({
      data: convertToPrisma(data),
    });

    return convertToDomain(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user && convertToDomain(user);
  }
}
