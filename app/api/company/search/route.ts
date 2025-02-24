import { CompanyController, withErrorHandling } from "@/core";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandling(async (request: NextRequest) => {
  const companyController = new CompanyController();
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name") ?? "";
  const result = companyController.searchCompanyListByName(name);
  return NextResponse.json(result);
});
