import { FastifyInstance } from "fastify";
import { petRoutes } from "./pets-routes";
import { usersRoutes } from "./users-routes";
import { organizationRoutes } from "./organizations-routes";
import cookies from "@fastify/cookie";
export async function appRoutes(app: FastifyInstance) {
  app.register(cookies);
  app.register(usersRoutes, { prefix: "users" });
  app.register(petRoutes, { prefix: "pets" });
  app.register(organizationRoutes, { prefix: "organizations" });
}
