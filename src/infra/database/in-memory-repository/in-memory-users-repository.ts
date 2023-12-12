import { User } from "@/application/interfaces/user";
import { UsersRepository } from "../repositories/users-abstract";
import { randomUUID } from "crypto";

export class InMemoryUserRepository implements UsersRepository {
  public items: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email == email);

    if (!user) return null;

    return user;
  }

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
