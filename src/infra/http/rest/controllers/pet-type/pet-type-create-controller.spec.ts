import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "@/app";
import { UserRoleEnum, UserTypesEnum } from "@/application/enum/user-enum";
import { PrismaUsersRepository } from "@/infra/database/prisma/repositories/prisma-users-repository";
import { hash } from "bcryptjs";

describe("pet-type test (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to create a type pet", async () => {
    const usersRepository = new PrismaUsersRepository();

    await usersRepository.create({
      name: "Jonh Doe",
      email: "john@example.com",
      password: await hash("123456", 8),
      type: UserTypesEnum.ADOPTER,
      role: UserRoleEnum.ADMIN,
    });

    const responseWithToken = await request(app.server).post("/sessions").send({
      email: "john@example.com",
      password: "123456",
    });

    const { token } = responseWithToken.body;

    const response = await request(app.server)
      .post("/pet-type")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "dog",
      });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toMatchObject({
      message: "PetType created successfully!",
      id: expect.any(String),
    });
  });
});
