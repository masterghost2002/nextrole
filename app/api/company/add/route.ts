import { CompanyController, withErrorHandling } from '@/core';
import { NextResponse } from 'next/server';

export const POST = withErrorHandling(async (request: Request) => {
  const companyController = new CompanyController();
  const body = await request.json();
  const response = await companyController.createCompany(body);
  return NextResponse.json(response);
});
