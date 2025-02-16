import { createClient } from "@/lib/supabase";
import type { Database } from "@/types/supabase";
import { SupabaseClient } from "@supabase/supabase-js";
import { User } from "./user"; // Assuming User class is in a user.ts file in the same directory
import { Avatar } from "./avatar";

export default class DB {
  private static instance: DB;
  public user: User;
  public avatar: Avatar;

  private constructor(protected supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
    this.user = new User(this.supabase);
    this.avatar = new Avatar(this.supabase);
  }

  public static async getInstance(): Promise<DB> {
    if (!DB.instance) {
      DB.instance = new DB(await createClient());
    }
    return DB.instance;
  }
}
