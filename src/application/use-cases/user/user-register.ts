import { hashPassword } from "@/utils/password-hash";
import { UserAlreadyExistsError } from "../../errors/user-already-exists-error";
import { UsersRepository } from "@/infra/database/repositories/users-abstract";
import { UserRoleEnum, UserTypesEnum } from "@/application/enum/user-enum";
import {
  RegisterUseCaseRequest,
  RegisterUseCaseResponse,
} from "@/application/types/user-types";
import { PRISMA_UNIQUE_KEY_EXCEPTION } from "@/infra/database/prisma/constants/prisma-constants";

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    body: RegisterUseCaseRequest
  ): Promise<RegisterUseCaseResponse> {
    try {
      const { name, email, password, type } = body;

      const hashedPassword = await hashPassword(password);

      const userType = this.makeUserType(type);

      const user = await this.usersRepository.create({
        name,
        email,
        password: hashedPassword,
        type: userType,
        role: UserRoleEnum.BASIC,
      });

      return { user };
    } catch (err: any) {
      if (err.code == PRISMA_UNIQUE_KEY_EXCEPTION) {
        throw new UserAlreadyExistsError();
      }
      throw new Error(`Cannot create user with error: ${err.message}`);
    }
  }

  private makeUserType(type: UserTypesEnum) {
    return type == UserTypesEnum.ADOPTER
      ? UserTypesEnum.ADOPTER
      : UserTypesEnum.ORGANIZATION;
  }
}
