import { NextResponse } from "next/server";
import { BaseError } from "@/core/errors";

type ApiHandler = (req: Request) => Promise<NextResponse>;

export const withErrorHandling = (handler: ApiHandler): ApiHandler => {
  return async (req: Request) => {
    try {
      return await handler(req);
    } catch (error: any) {
      if (error instanceof BaseError) {
        return NextResponse.json(
          {
            error: error.message,
            code: error.code,
          },
          { status: error.statusCode }
        );
      }

      return NextResponse.json(
        {
          error: "Internal Server Error",
          code: "INTERNAL_SERVER_ERROR",
        },
        { status: 500 }
      );
    }
  };
};
