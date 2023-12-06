import { FastifyInstance } from "fastify";
import { petRoutes } from "./pets.routes";
import { usersRoutes } from "./users.routes";

export async function appRoutes(app: FastifyInstance) {
  app.register(usersRoutes, { prefix: "users" });
  app.register(petRoutes, { prefix: "pets" });
}
