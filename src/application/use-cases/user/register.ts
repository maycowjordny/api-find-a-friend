import { UserAlreadyExistsError } from "../../errors/user-already-exists-error";
import { hash } from "bcryptjs";
import { UsersRepository } from "@/infra/database/repositories/users-abstract";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

const PRISMA_UNIQUE_KEY_EXCEPTION = "P2002";

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(body: RegisterUseCaseRequest) {
    try {
      const { name, email, password } = body;

      const passwordHash = await hash(password, 6);

      await this.usersRepository.create({
        name,
        email,
        password: passwordHash,
        type: "ADOPTER",
        role: "BASIC",
      });
    } catch (err: any) {
      if (err.code == PRISMA_UNIQUE_KEY_EXCEPTION) {
        throw new UserAlreadyExistsError();
      }
      throw new Error(`Cannot create user with error: ${err.message}`);
    }
  }
}
