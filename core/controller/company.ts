import { auth, InjectDB } from "@/core/decorators";
import {
  CompanyIdDto,
  CompanyNameDto,
  CreateCompanySchema,
  GetCompanyListSchema,
} from "@/core/dto";
import { BadRequestError } from "@/core/errors";
import { ElasticSearch } from "@/core/services/search.elastic";
import type {
  TCompanyName,
  TGetCompanyListDto,
  CreateCompanyDto,
  TCompanyIdDto,
} from "@/core/dto";
import { threadId } from "worker_threads";

@InjectDB()
export class CompanyController {
  private db!: Promise<DB>;
  private elasticSearchInstance: ElasticSearch;
  constructor() {
    this.elasticSearchInstance = ElasticSearch.getInstance();
  }

  @auth()
  async createCompany(company: CreateCompanyDto) {
    const validateCompany = CreateCompanySchema.safeParse(company);
    if (validateCompany.error) {
      throw new BadRequestError(validateCompany.error.message);
    }
    const db = await this.db;
    const result = await db.company.createCompany(validateCompany.data);
    return result;
  }

  @auth()
  async getCompanyList(params: TGetCompanyListDto) {
    const validateParams = GetCompanyListSchema.safeParse(params);
    if (validateParams.error) {
      throw new BadRequestError(validateParams.error.message);
    }
    const db = await this.db;
    const result = await db.company.getCompanyList(validateParams.data);
    return result;
  }

  searchCompanyListByName(name: TCompanyName) {
    const validedName = CompanyNameDto.safeParse(name);
    if (validedName.error) {
      throw new BadRequestError(validedName.error.message);
    }
    const result = this.elasticSearchInstance.getMatchingCompaniesByName(
      validedName.data
    );
    return result;
  }

  async companyById(id: TCompanyIdDto) {
    const validatedId = CompanyIdDto.safeParse(id);
    if (validatedId.error)
      throw new BadRequestError(validatedId.error?.message);
    const db = await this.db;
    const company = await db.company.companyById(id);
    return company;
  }
}
