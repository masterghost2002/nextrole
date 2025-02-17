import { CreateUserSchema, CreateUserDto } from "@/core/dto";
import { BadRequestError } from "@/core/errors";
export class UserController {
  constructor() {}
  async createUser(user: CreateUserDto) {
    const validatedUser = CreateUserSchema.safeParse(user);
    if (validatedUser.error) {
      throw new BadRequestError(validatedUser.error.message, {
        data: validatedUser.error,
      });
    }
    return validatedUser.data;
  }
}
