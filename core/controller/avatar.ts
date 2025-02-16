import DB from "@/core/db";
import { basicAuth } from "../decorators";
export class AvatarController {
  constructor() {}
  @basicAuth()
  async getAllAvatars() {
    const db = await DB.getInstance();
    const avatars = await db.avatar.getAllAvatars();
    return avatars;
  }
}
