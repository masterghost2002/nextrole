import { AvatarController } from "@/core/controller/avatar";
import { NextResponse } from "next/server";
import { withErrorHandling } from "@/core/errors";

export const GET = withErrorHandling(async (req: Request) => {
  const controller = new AvatarController();
  const data = await controller.getAllAvatars();
  return NextResponse.json(data);
});
