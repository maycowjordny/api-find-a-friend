import { FastifyReply, FastifyRequest } from "fastify";
import { FindPetByIdValidatorRepository } from "../../validator/pet/find-pet-by-id-validator";
import { makeFindPetByIdUseCase } from "@/application/use-cases/factories/pet/make-pet-use-case";

export async function findPetById(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const findPetByIdValidator = await validator();

    const findPetByIdUseCase = makeFindPetByIdUseCase();

    const pets = await findPetByIdUseCase.execute(findPetByIdValidator);

    return reply.status(200).send(pets);
  } catch (err: any) {
    return reply.status(500).send({ message: err.message });
  }

  async function validator() {
    const findPetByIdValidator = new FindPetByIdValidatorRepository();

    return await findPetByIdValidator.findPetByIdValidator(request.params);
  }
}
