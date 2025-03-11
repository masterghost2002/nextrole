import { SupabaseClient } from '@supabase/supabase-js';
import type { TPostDto } from '@/core/dto';
export class Post {
  constructor(protected supabase: SupabaseClient<DatabaseSchema>) {
    this.supabase = supabase;
  }
  async createPost(post: TPostDto) {
    const { data, error } = await this.supabase
      .from('posts')
      .insert(post)
      .select();
    if (error) throw new Error(error.message);
    return data;
  }
}
