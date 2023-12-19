import { FastifyInstance } from "fastify";
import { petRoutes } from "./pets-routes";
import { usersRoutes } from "./users-routes";
import { organizationRoutes } from "./organizations-routes";
import { authenticationRoutes } from "./ authentication-routes";
import { petTypeRoutes } from "./pet-type-routes";
import { refreshTokenJwt } from "./refresh-token";

export async function appRoutes(app: FastifyInstance) {
  app.register(usersRoutes, { prefix: "users" });
  app.register(authenticationRoutes, { prefix: "sessions" });
  app.register(petRoutes, { prefix: "pets" });
  app.register(refreshTokenJwt, { prefix: "token" });
  app.register(organizationRoutes, { prefix: "organizations" });
  app.register(petTypeRoutes, { prefix: "pet-type" });
}
