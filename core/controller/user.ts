import { CreateUserSchema } from "@/core/dto";
import { BadRequestError } from "@/core/errors";
import { basicAuth } from "../decorators";
import type { CreateUserDto } from "@/core/dto";
import DB from "../db";
export class UserController {
  constructor() {}
  @basicAuth()
  async createUser(user: CreateUserDto, email?: string) {
    const validatedUser = CreateUserSchema.safeParse({
      ...user,
      dob: new Date(user.dob),
    });
    if (!email) {
      throw new BadRequestError("Email is required");
    }
    if (validatedUser.error) {
      throw new BadRequestError(validatedUser.error.message, {
        data: validatedUser.error,
      });
    }
    const db = await DB.getInstance();
    const parsedUser = validatedUser.data;
    const userData = {
      email: email,
      username: parsedUser.username,
      bio: parsedUser.bio,
      dob: parsedUser.dob.toISOString(),
      yoe: parsedUser.yearOfExperience || null,
      current_company_id: null,
      current_position: null,
    };
    const response = await db.user.createUser(userData);
    return response;
  }
}
