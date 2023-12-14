import { User } from "@/application/interfaces/user";

export interface UsersRepository {
  create(data: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
