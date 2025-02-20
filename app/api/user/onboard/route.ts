import { withErrorHandling } from "@/core";
import { NextResponse } from "next/server";
import { UserController } from "@/core/controller";
export const POST = withErrorHandling(async (request: Request) => {
  const userController = new UserController();
  const body = await request.json();
  const response = await userController.createUser(body);
  return NextResponse.json(response);
});
