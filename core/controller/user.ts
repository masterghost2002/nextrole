import { CreateUserSchema } from "@/core/dto";
import { BadRequestError } from "@/core/errors";
import { basicAuth, InjectDB } from "../decorators";
import type { CreateUserDto } from "@/core/dto";
@InjectDB()
export class UserController {
  private db!: Promise<DB>;
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
    const db = await this.db;
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
  @basicAuth()
  async isUsernameAvailable(username: string | null) {
    if (!username) {
      throw new BadRequestError("Username is required");
    }
    if (username.trim().length <= 3) {
      throw new BadRequestError("Username must be at least 3 characters long");
    }
    const db = await this.db;
    const user = await db.user.getUserByUsername(username);
    return !user;
  }
}
