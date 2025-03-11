import { SupabaseClient } from '@supabase/supabase-js';
import { CreateCompanyDto, TCompanyIdDto, TGetCompanyListDto } from '../dto';
import { InternalServerError } from '../errors';
import { Database } from '@/types/supabase';

export class Company {
  constructor(private supabase: SupabaseClient) {
    this.supabase = supabase;
  }
  async createCompany(company: CreateCompanyDto) {
    const { data, error } = await this.supabase
      .from('companies')
      .insert(company)
      .select();
    if (error) {
      throw new InternalServerError('Something went wrong');
    }

    return data;
  }
  async getCompanyList(params: TGetCompanyListDto) {
    const { page = 1, limit = 20 } = params;

    let query = this.supabase
      .from('companies') // Replace 'companies' with your table name
      .select('*') // Select all columns or specify the ones you need
      .order('name', { ascending: true }); // Sort by 'name' in ascending order

    // If page is 0, return all records (still sorted)
    if (page === 0) {
      const { data, error } = await query;
      if (error) throw new Error(error.message);
      return data;
    }

    // Otherwise, apply pagination at the database level
    const offset = (page - 1) * limit; // Calculate the offset
    const { data, error } = await query.range(offset, offset + limit - 1); // Fetch only the required rows

    if (error) throw new Error(error.message);
    return data;
  }
  async companyById(
    id: TCompanyIdDto
  ): Promise<DatabaseSchema['public']['Tables']['companies']['Row']> {
    const { data, error } = await this.supabase
      .from('companies')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new InternalServerError('Something went wrong');
    return data;
  }
}
