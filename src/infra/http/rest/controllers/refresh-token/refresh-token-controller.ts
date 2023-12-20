import { FastifyReply, FastifyRequest } from "fastify";

export async function refreshToken(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify({ onlyCookie: true });

    const token = await jwtToken();
    const refreshJwtToken = await refreshToken();

    return reply
      .setCookie("refreshToken", refreshJwtToken, {
        path: "/",
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .status(200)
      .send({ message: "Refresh Token Created Successfully!", token });
  } catch (err: any) {
    return reply.status(400).send({ message: err.message });
  }

  async function jwtToken() {
    return await reply.jwtSign(
      {
        role: request.user.role,
      },
      {
        sign: {
          sub: request.user.sub,
        },
      }
    );
  }
  async function refreshToken() {
    return await reply.jwtSign(
      {
        role: request.user.role,
      },
      {
        sign: {
          sub: request.user.sub,
          expiresIn: "7d",
        },
      }
    );
  }
}
