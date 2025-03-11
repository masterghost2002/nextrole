import { SupabaseClient } from '@supabase/supabase-js';
import type { TGetPostByCompanyIdDto, TPostDto } from '@/core/dto';
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
  async getPostByCompanyId(params: TGetPostByCompanyIdDto) {
    const { page = 1, limit = 20 } = params;
    let query = this.supabase
      .from('posts')
      .select('*')
      .eq('company_id', params.company_id)
      .order('created_at', { ascending: true });
    if (page === 0) {
      throw new Error('Invalid page');
    }
    const offset = (page - 1) * limit;
    const { data, error } = await query.range(offset, offset + limit - 1);
    if (error) throw new Error(error.message);
    return data;
  }
}
