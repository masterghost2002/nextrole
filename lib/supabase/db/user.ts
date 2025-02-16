import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

// Decorator factory
function getUserBy(key: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    descriptor.value = async function (this: User, value: string) {
      const { data, error } = await this.supabase
        .from("users")
        .select("*")
        .eq(key, value);

      if (error) {
        console.error("Error fetching user", error);
        return null;
      }

      return data?.[0] || null;
    };

    return descriptor;
  };
}

export class User {
  constructor(protected supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  @getUserBy("email")
  async getUserByEmail(
    email: string
  ): Promise<Database["public"]["Tables"]["users"]["Row"] | null> {
    // Method implementation will be replaced by decorator
    return null;
  }
}
