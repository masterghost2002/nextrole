import { CompanyController, withErrorHandling } from '@/core';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export const GET = withErrorHandling(async (request: NextRequest) => {
  const companyController = new CompanyController();
  const params = request.nextUrl.searchParams;
  const page = params.get('page') ?? '0';
  const limit = params.get('limit') ?? '20';
  const result = await companyController.getCompanyList({
    page: +page,
    limit: +limit
  });

  const headers = {
    'Cache-Control': 'public, max-age=86400, immutable'
  };

  return NextResponse.json(result, { headers });
});
