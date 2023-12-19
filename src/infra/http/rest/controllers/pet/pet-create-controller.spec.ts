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

  it("should be able to create a pet", async () => {
    const userPrismaRepository = new PrismaUsersRepository();

    await userPrismaRepository.create({
      name: "Jonh Doe",
      email: "johndoe@example.com",
      password: await hash("123456", 8),
      type: UserTypesEnum.ADOPTER,
      role: UserRoleEnum.ADMIN,
    });

    const responseWithToken = await request(app.server).post("/sessions").send({
      email: "johndoe@example.com",
      password: "123456",
    });

    const { token } = responseWithToken.body;

    const petTypeId = await request(app.server)
      .post("/pet-type")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "dog",
      });

    await request(app.server).post("/users").send({
      name: "Jonh Doe 2",
      email: "jonhdoe2@example.com",
      password: "123456",
      type: UserTypesEnum.ADOPTER,
    });

    const responseWithToken2 = await request(app.server)
      .post("/sessions")
      .send({
        email: "jonhdoe2@example.com",
        password: "123456",
      });

    const organization = await request(app.server)
      .post("/organizations")
      .set("Authorization", `Bearer ${responseWithToken2.body.token}`)
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

    const [cookie] = organization.get("Set-Cookie");

    const response = await request(app.server)
      .post("/pets")
      .set("Authorization", `Bearer ${responseWithToken2.body.token}`)
      .set("Cookie", cookie)
      .send({
        name: "animal",
        age: 10,
        description: "bla",
        energyLevels: "LOW",
        environment: "MEDIUM",
        pictures: ["url", "url"],
        requirements: ["espaço grande", "bla"],
        idependenceLevels: "LOW",
        size: "LARGE",
        typeId: petTypeId.body.id,
        toAdopt: true,
      });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toMatchObject({
      message: "Pet created successfully!",
    });
  });
});
