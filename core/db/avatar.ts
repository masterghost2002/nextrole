import { SupabaseClient } from '@supabase/supabase-js';
export class Avatar {
  constructor(private supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  async getAllAvatars() {
    const { data, error } = (await this.supabase
      .from('avatars')
      .select('*')) as {
      data: DatabaseSchema['public']['Tables']['avatars']['Row'][] | null;
      error: any;
    };
    if (error) return [];
    return data ?? [];
  }

  async getAvatarById(id: string) {
    const { data, error } = (await this.supabase
      .from('avatars')
      .select('*')
      .eq('id', id)
      .single()) as {
      data: DatabaseSchema['public']['Tables']['avatars']['Row'] | null;
      error: any;
    };
    if (error) return null;
    return data;
  }
}
