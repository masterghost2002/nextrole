import { PostController, withErrorHandling } from '@/core';
import { NextResponse } from 'next/server';

export const POST = withErrorHandling(async (request: Request) => {
  const postController = new PostController();
  const body = await request.json();
  const response = await postController.createPost(body);
  return NextResponse.json(response);
});
