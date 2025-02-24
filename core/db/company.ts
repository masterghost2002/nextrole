import { SupabaseClient } from "@supabase/supabase-js";
import { CreateCompanyDto } from "../dto";
import { InternalServerError } from "../errors";

export class Company {
  constructor(private supabase: SupabaseClient) {
    this.supabase = supabase;
  }
  async createCompany(company: CreateCompanyDto) {
    const { data, error } = await this.supabase
      .from("companies")
      .insert(company)
      .select();
    if (error) {
      throw new InternalServerError("Something went wrong");
    }

    return data;
  }
}
