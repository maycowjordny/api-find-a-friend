import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { UserRoleEnum, UserTypesEnum } from "@/application/enum/user-enum";

describe("User test(e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to authenticate", async () => {
    await request(app.server).post("/users").send({
      name: "Jonh Doe",
      email: "jonhdoe4@example.com",
      password: "123456",
      type: UserTypesEnum.ADOPTER,
    });

    const response = await request(app.server).post("/sessions").send({
      email: "jonhdoe4@example.com",
      password: "123456",
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      message: "User successfully authenticated!",
      token: expect.any(String),
    });
  });
});
