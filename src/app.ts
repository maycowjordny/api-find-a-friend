import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./config/env";
import fastifyCookie from "@fastify/cookie";
import { appRoutes } from "./infra/http/rest/routes/index-routes";
import { fastifyJwt } from "@fastify/jwt";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: "10m" },
  cookie: { cookieName: "refreshToken", signed: false },
});

app.register(fastifyCookie);
app.register(appRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  return reply.status(500).send({ message: "Internal server error." });
});
