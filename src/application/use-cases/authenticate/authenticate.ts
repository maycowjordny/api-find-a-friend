import { InvalidCredentialsError } from "@/application/errors/invalid-credentials-error";
import {
  AuthenticateUseCaseRequest,
  AuthenticateUseCaseResponse,
} from "@/application/interfaces/authenticate";
import { UsersRepository } from "@/infra/database/repositories/users-abstract";
import { compare } from "bcryptjs";

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    try {
      const user = await this.usersRepository.findByEmail(email);

      if (!user) throw new InvalidCredentialsError();

      const doesPasswordMacthes = await compare(password, user.password);

      if (!doesPasswordMacthes) throw new InvalidCredentialsError();

      return {
        user,
      };
    } catch (err: any) {
      if (err instanceof InvalidCredentialsError) {
        throw new InvalidCredentialsError();
      }
      throw new Error(`Cannot authenticate user with error: ${err.message}`);
    }
  }
}
