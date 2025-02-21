import { NextResponse, NextRequest } from "next/server";
import { BaseError } from "@/core/errors";

type ApiHandler<T extends Request | NextRequest> = (
  req: T
) => Promise<NextResponse>;

export const withErrorHandling = <T extends Request | NextRequest>(
  handler: ApiHandler<T>
): ApiHandler<T> => {
  return async (req: T) => {
    try {
      return await handler(req);
    } catch (error: any) {
      if (error instanceof BaseError) {
        return NextResponse.json(
          {
            error: error.message,
            code: error.code,
            data: error.data,
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
