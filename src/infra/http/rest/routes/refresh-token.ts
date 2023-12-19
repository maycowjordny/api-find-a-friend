import { FastifyInstance } from "fastify";
import { refreshToken } from "@/infra/http/rest/controllers/refresh-token/refresh-token-controller";

export async function refreshTokenJwt(app: FastifyInstance) {
  app.patch("/refresh", refreshToken);
}
