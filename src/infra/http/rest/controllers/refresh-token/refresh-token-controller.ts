import { FastifyReply, FastifyRequest } from "fastify";

export async function refreshToken(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify({ onlyCookie: true });

    const token = jwtToken();
    const refreshJwtToken = await refreshToken();

    setTokenInCookies(refreshJwtToken);

    return reply
      .status(200)
      .send({ message: "Refresh Token Created Successfully!", token });
  } catch (err) {
    console.log(err);
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

  async function setTokenInCookies(refreshtoken: string) {
    return reply.setCookie("refreshToken", refreshtoken, {
      path: "/",
      secure: true,
      sameSite: true,
      httpOnly: true,
    });
  }
}
