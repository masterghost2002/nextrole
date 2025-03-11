import { Database } from '@/types/supabase';
import DB from '@/core/db';

declare global {
  type DB = DB;
  type DatabaseSchema = Database;
  type TCompany = Database['public']['Tables']['companies']['Row'];
  type TUser = Database['public']['Tables']['users']['Row'];
  type TPost = Database['public']['Tables']['posts']['Row'];
  type TAvatar = Database['public']['Tables']['users']['Row'];
}
