import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "@/app";
import { UserRoleEnum, UserTypesEnum } from "@/application/enum/user-enum";
import { PrismaUsersRepository } from "@/infra/database/prisma/repositories/prisma-users-repository";
import { hash } from "bcryptjs";

describe("organization test (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to create a organization", async () => {
    await request(app.server).post("/users").send({
      name: "Jonh Doe",
      email: "jonhdoe@example.com",
      password: "123456",
      type: UserTypesEnum.ADOPTER,
    });

    const responseWithToken = await request(app.server).post("/sessions").send({
      email: "jonhdoe@example.com",
      password: "123456",
    });

    const organization = await request(app.server)
      .post("/organizations")
      .set("Authorization", `Bearer ${responseWithToken.body.token}`)
      .send({
        name: "John Doe",
        phone: "99 99999999",
        city: "Fortaleza",
        country: "Brasil",
        lat: "-3.7931392",
        lng: "-38.6020164",
        nameAddress: "Fortaleza",
        neighbourhood: "Fortaleza",
        postalCode: "63010010",
        province: "Ceara",
        uf: "CE",
      });

    expect(organization.statusCode).toEqual(201);
    expect(organization.body).toEqual({
      message: "Organization created successfully!",
    });
  });
});
