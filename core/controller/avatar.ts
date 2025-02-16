import DB from "@/core/db";
export class AvatarController {
  constructor() {}

  async getAllAvatars() {
    const db = await DB.getInstance();
    const avatars = await db.avatar.getAllAvatars();
    return avatars;
    // return [];
  }
}
