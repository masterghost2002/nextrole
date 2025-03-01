import { AvatarController } from "@/core/controller/avatar";
import { NextResponse } from "next/server";
import { withErrorHandling } from "@/core/errors";

export const runtime = "edge";

export const GET = withErrorHandling(async (req: Request) => {
  const controller = new AvatarController();
  const data = await controller.getAllAvatars();
  // Cache the response for 30 days (2592000 seconds)
  const headers = {
    "Cache-Control": "public, max-age=2592000, immutable",
  };
  return NextResponse.json(data, { headers });
});
