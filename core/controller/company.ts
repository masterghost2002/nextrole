import { InjectDB } from "@/core/decorators";
import { CreateCompanyDto, CreateCompanySchema } from "@/core/dto";
import { BadRequestError } from "@/core/errors";

@InjectDB()
export class CompanyController {
  private db!: Promise<DB>;
  constructor() {}
  async createCompany(company: CreateCompanyDto) {
    const validateCompany = CreateCompanySchema.safeParse(company);
    if (validateCompany.error) {
      throw new BadRequestError(validateCompany.error.message);
    }
    const db = await this.db;
    const result = await db.company.createCompany(validateCompany.data);
    return result;
  }
}
