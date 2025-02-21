import { UserController } from "@/core/controller";
import { NextRequest, NextResponse } from "next/server";
import { BadRequestError, withErrorHandling } from "@/core/errors";
export const GET = withErrorHandling(async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username");
  const userController = new UserController();
  const isAvailable = await userController.isUsernameAvailable(username);
  return NextResponse.json({ isAvailable });
});
