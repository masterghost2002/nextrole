import { InjectDB } from "@/core/decorators";
import {
  CreateCompanyDto,
  CreateCompanySchema,
  GetCompanyListSchema,
  TGetCompanyListDto,
} from "@/core/dto";
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
  async getCompanyList(params: TGetCompanyListDto) {
    const validateParams = GetCompanyListSchema.safeParse(params);
    if (validateParams.error) {
      throw new BadRequestError(validateParams.error.message);
    }
    const db = await this.db;
    const result = await db.company.getCompanyList(validateParams.data);
    return result;
  }
}
