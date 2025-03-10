import { CompanyController, withErrorHandling } from "@/core";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandling(async (request: NextRequest) => {
  const companyController = new CompanyController();
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id") ?? "";
  const result = await companyController.companyById(id);
  return NextResponse.json(result);
});
