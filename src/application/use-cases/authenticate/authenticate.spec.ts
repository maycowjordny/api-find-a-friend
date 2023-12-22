import { expect, describe, it, beforeEach } from "vitest";
import { hash } from "bcryptjs";
import { UserRoleEnum, UserTypesEnum } from "@/application/enum/user-enum";
import { InMemoryUserRepository } from "@/infra/database/in-memory-repository/in-memory-users-repository";

import { AuthenticateUseCase } from "./authenticate";
import { InvalidCredentialsError } from "@/application/errors/invalid-credentials-error";

let usersRepository: InMemoryUserRepository;
let sut: AuthenticateUseCase;

describe("Authenticate Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUserRepository();
    sut = new AuthenticateUseCase(usersRepository);
  });

  it("should be able to authenticate", async () => {
    const mockUser = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: await hash("123456", 6),
      role: UserRoleEnum.BASIC,
      type: UserTypesEnum.ADOPTER,
    };

    await usersRepository.create(mockUser);

    const { user } = await sut.execute({
      email: "johndoe@example.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should be able to authenticate with wrong email", async () => {
    await expect(() =>
      sut.execute({
        email: "johndoedoe@example.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("should be able to authenticate with wrong password", async () => {
    const mockUser = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: await hash("123456", 6),
      role: UserRoleEnum.BASIC,
      type: UserTypesEnum.ADOPTER,
    };

    await usersRepository.create(mockUser);

    await expect(() =>
      sut.execute({
        email: "johndoedoe@example.com",
        password: "123123",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
});
