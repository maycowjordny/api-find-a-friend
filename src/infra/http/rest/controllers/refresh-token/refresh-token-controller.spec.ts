import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { UserTypesEnum } from "@/application/enum/user-enum";

describe("Refresh token test(e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to refresh a token", async () => {
    await request(app.server).post("/users").send({
      name: "Jonh Doe",
      email: "jonhdoe4@example.com",
      password: "123456",
      type: UserTypesEnum.ADOPTER,
    });

    const authResponse = await request(app.server).post("/sessions").send({
      email: "jonhdoe4@example.com",
      password: "123456",
    });

    const cookies = authResponse.get("Set-Cookie");

    const response = await request(app.server)
      .patch("/token/refresh")
      .set("Cookie", cookies)
      .send();

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      message: "Refresh Token Created Successfully!",
      token: expect.any(String),
    });
  });
});
