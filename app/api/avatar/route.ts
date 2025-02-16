import { AvatarController } from "@/core/controller/avatar";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const controller = new AvatarController();
  const data = await controller.getAllAvatars();
  return NextResponse.json(data);
};
