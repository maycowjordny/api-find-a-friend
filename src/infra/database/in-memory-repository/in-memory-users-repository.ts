import { User } from "@/application/interfaces/user";
import { UsersRepository } from "../repositories/users-abstract";
import { randomUUID } from "crypto";

export class InMemoryUserRepository implements UsersRepository {
  public items: User[] = [];

  async create(data: User): Promise<User> {
    const user = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      type: data.type,
      created_at: new Date(),
    };

    this.items.push(user);

    return user;
  }
}
