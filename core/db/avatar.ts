import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
export class Avatar {
  constructor(private supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  async getAllAvatars() {
    const { data, error } = (await this.supabase
      .from("avatars")
      .select("*")) as {
      data: Database["public"]["Tables"]["avatars"]["Row"][] | null;
      error: any;
    };
    if (error) return [];
    return data ?? [];
  }

  async getAvatarById(id: string) {
    const { data, error } = (await this.supabase
      .from("avatars")
      .select("*")
      .eq("id", id)
      .single()) as {
      data: Database["public"]["Tables"]["avatars"]["Row"] | null;
      error: any;
    };
    if (error) return null;
    return data;
  }
}
