import { Database } from "@/types/supabase";
import DB from "@/core/db";

declare global {
  type DB = DB;
  type DatabaseSchema = Database;
}
