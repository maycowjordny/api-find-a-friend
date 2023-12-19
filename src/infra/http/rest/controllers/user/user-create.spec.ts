import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { UserTypesEnum } from "@/application/enum/user-enum";

describe("User test(e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to create a user", async () => {
    const response = await request(app.server).post("/users").send({
      name: "Jonh Doe",
      email: "jonhdoe@example.com",
      password: "123456",
      type: UserTypesEnum.ADOPTER,
    });

    expect(response.statusCode).toEqual(201);
  });

  it("should not be able to create a user with an email that already exists", async () => {
    await request(app.server).post("/users").send({
      name: "Jonh Doe 2",
      email: "jonhdoe2@example.com",
      password: "123456",
      type: UserTypesEnum.ADOPTER,
    });

    const response = await request(app.server).post("/users").send({
      name: "Jonh Doe 2",
      email: "jonhdoe2@example.com",
      password: "123456",
      type: UserTypesEnum.ADOPTER,
    });

    expect(response.statusCode).toEqual(409);
    expect(response.body).toEqual({ message: "E-email already exists!" });
  });
});
