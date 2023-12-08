import { expect, describe, it, vi } from "vitest";
import { RegisterUseCase } from "./user-register";
import { compare } from "bcryptjs";
import { UserTypesEnum } from "@/application/enum/user-enum";
import { InMemoryUserRepository } from "@/infra/database/in-memory-repository/in-memory-users-repository";
import { UserAlreadyExistsError } from "@/application/errors/user-already-exists-error";
import { PRISMA_UNIQUE_KEY_EXCEPTION } from "@/infra/database/prisma/constants/prisma-constants";

describe("Register Use Case", () => {
  const userRepositoryMock = {
    create: vi.fn(),
  };

  it("should be able to create user", async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const registerUseCase = new RegisterUseCase(inMemoryUserRepository);
    const mockUser = {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
      type: UserTypesEnum.ADOPTER,
    };

    const { user } = await registerUseCase.execute(mockUser);

    expect(user).toMatchObject({
      id: expect.any(String),
      name: mockUser.name,
      password: expect.any(String),
      email: mockUser.email,
      type: mockUser.type,
    });
  });

  it("should has user password upon registration", async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const registerUseCase = new RegisterUseCase(inMemoryUserRepository);

    const { user } = await registerUseCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
      type: UserTypesEnum.ADOPTER,
    });

    const isPasswordCorrectlyHashed = await compare("123456", user.password);
    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it("should be able to validate a duplicate email", async () => {
    userRepositoryMock.create.mockRejectedValue({
      code: PRISMA_UNIQUE_KEY_EXCEPTION,
    });

    const registerUseCase = new RegisterUseCase(userRepositoryMock);

    const EMAIL_DUPLICATED = "johndoe@example.com";

    await expect(() =>
      registerUseCase.execute({
        name: "John Doe",
        email: EMAIL_DUPLICATED,
        password: "123456",
        type: UserTypesEnum.ADOPTER,
      })
    ).rejects.toThrow(UserAlreadyExistsError);
  });

  it("cannot create user when generic error", async () => {
    userRepositoryMock.create.mockRejectedValue(new Error());

    const registerUseCase = new RegisterUseCase(userRepositoryMock);

    await expect(() =>
      registerUseCase.execute({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "123456",
        type: UserTypesEnum.ADOPTER,
      })
    ).rejects.toThrow(Error);
  });
});
