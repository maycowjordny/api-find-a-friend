import { FastifyReply, FastifyRequest } from "fastify";
import { PetTypeValidatorRepository } from "../../validator/petType/pet-type-validator";
import { makeCreatePetTypeUseCase } from "@/application/use-cases/factories/pet-type/make-pet-type-use-case";

export async function petTypeCreate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const petTypeValidate = await validate();

    const petTypeUseCase = makeCreatePetTypeUseCase();

    const { petType } = await petTypeUseCase.execute(petTypeValidate);

    return reply
      .status(201)
      .send({ message: "PetType created successfully!", id: petType.id });
  } catch (err: any) {
    return reply.status(500).send({ message: err.message });
  }

  async function validate() {
    const petTypeValidator = new PetTypeValidatorRepository();
    return await petTypeValidator.petTypeValidator(request.body);
  }
}
