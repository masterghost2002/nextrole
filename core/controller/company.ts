import { InjectDB } from "@/core/decorators";
import {
  CompanyNameDto,
  CreateCompanyDto,
  CreateCompanySchema,
  GetCompanyListSchema,
  TCompanyName,
  TGetCompanyListDto,
} from "@/core/dto";
import { BadRequestError } from "@/core/errors";
import { ElasticSearch } from "@/core/services/search.elastic";

@InjectDB()
export class CompanyController {
  private db!: Promise<DB>;
  private elasticSearchInstance: ElasticSearch;
  constructor() {
    this.elasticSearchInstance = ElasticSearch.getInstance();
  }
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
}
