// Base custom error class
export * from "./handler";
export class BaseError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public code: string
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// 400 Bad Request
export class BadRequestError extends BaseError {
  constructor(message = "Bad request") {
    super(message, 400, "BAD_REQUEST");
  }
}

// 401 Unauthorized
export class UnauthorizedError extends BaseError {
  constructor(message = "Authentication required") {
    super(message, 401, "UNAUTHORIZED");
  }
}

// 403 Forbidden
export class ForbiddenError extends BaseError {
  constructor(message = "Permission denied") {
    super(message, 403, "FORBIDDEN");
  }
}

// 404 Not Found
export class NotFoundError extends BaseError {
  constructor(message = "Resource not found") {
    super(message, 404, "NOT_FOUND");
  }
}

// 409 Conflict
export class ConflictError extends BaseError {
  constructor(message = "Resource conflict") {
    super(message, 409, "CONFLICT");
  }
}

// 422 Unprocessable Entity
export class ValidationError extends BaseError {
  constructor(message = "Validation failed") {
    super(message, 422, "VALIDATION_ERROR");
  }
}

// 429 Too Many Requests
export class RateLimitError extends BaseError {
  constructor(message = "Too many requests") {
    super(message, 429, "RATE_LIMIT");
  }
}

// 500 Internal Server Error
export class InternalServerError extends BaseError {
  constructor(message = "Internal server error") {
    super(message, 500, "INTERNAL_SERVER_ERROR");
  }
}

// 503 Service Unavailable
export class ServiceUnavailableError extends BaseError {
  constructor(message = "Service temporarily unavailable") {
    super(message, 503, "SERVICE_UNAVAILABLE");
  }
}

// Database related error
export class DatabaseError extends BaseError {
  constructor(message = "Database operation failed") {
    super(message, 500, "DATABASE_ERROR");
  }
}
