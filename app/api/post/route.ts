import { PostController, withErrorHandling } from '@/core';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export const GET = withErrorHandling(async (request: NextRequest) => {
  const postController = new PostController();
  const params = request.nextUrl.searchParams;
  const page = params.get('page') ?? '0';
  const limit = params.get('limit') ?? '20';
  const company_id = params.get('company_id');

  const result = !company_id
    ? await postController.getPosts({ page: +page, limit: +limit })
    : await postController.getPostsByCompanyId({
        limit: +limit,
        page: +page,
        company_id
      });

  const headers = {
    'Cache-Control': 'public, max-age=120000, immutable'
  };

  return NextResponse.json(result, { headers });
});
