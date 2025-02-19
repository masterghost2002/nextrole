import { InjectDB, basicAuth } from "@/core/decorators";
@InjectDB()
export class AvatarController {
  private db!: Promise<DB>;
  constructor() {}
  @basicAuth()
  async getAllAvatars() {
    const db = await this.db;
    const avatars = await db.avatar.getAllAvatars();
    return avatars;
  }
}
