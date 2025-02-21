import { SupabaseClient } from "@supabase/supabase-js";
type TUser = DatabaseSchema["public"]["Tables"]["users"]["Row"];
type TCreateUser = Pick<
  TUser,
  | "email"
  | "username"
  | "bio"
  | "dob"
  | "yoe"
  | "current_company_id"
  | "current_position"
>;

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
  constructor(protected supabase: SupabaseClient<DatabaseSchema>) {
    this.supabase = supabase;
  }

  @getUserBy("email")
  async getUserByEmail(
    email: string
  ): Promise<DatabaseSchema["public"]["Tables"]["users"]["Row"] | null> {
    // Method implementation will be replaced by decorator
    return null;
  }
  @getUserBy("username")
  async getUserByUsername(username: string): Promise<TUser | null> {
    return null;
  }

  async createUser(user: TCreateUser) {
    const { data, error } = await this.supabase
      .from("users")
      .insert(user)
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
