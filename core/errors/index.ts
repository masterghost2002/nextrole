// Base custom error class
export * from './handler';
export class BaseError extends Error {
  constructor(
    public message: string,
    public data: any,
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
  constructor(message = 'Bad request', data: any = undefined) {
    super(message, data, 400, 'BAD_REQUEST');
  }
}

// 401 Unauthorized
export class UnauthorizedError extends BaseError {
  constructor(message = 'Authentication required', data: any = undefined) {
    super(message, data, 401, 'UNAUTHORIZED');
  }
}

// 403 Forbidden
export class ForbiddenError extends BaseError {
  constructor(message = 'Permission denied', data: any = undefined) {
    super(message, data, 403, 'FORBIDDEN');
  }
}

// 404 Not Found
export class NotFoundError extends BaseError {
  constructor(message = 'Resource not found', data: any = undefined) {
    super(message, data, 404, 'NOT_FOUND');
  }
}

// 409 Conflict
export class ConflictError extends BaseError {
  constructor(message = 'Resource conflict', data: any = undefined) {
    super(message, data, 409, 'CONFLICT');
  }
}

// 422 Unprocessable Entity
export class ValidationError extends BaseError {
  constructor(message = 'Validation failed', data: any = undefined) {
    super(message, data, 422, 'VALIDATION_ERROR');
  }
}

// 429 Too Many Requests
export class RateLimitError extends BaseError {
  constructor(message = 'Too many requests', data: any = undefined) {
    super(message, data, 429, 'RATE_LIMIT');
  }
}

// 500 Internal Server Error
export class InternalServerError extends BaseError {
  constructor(message = 'Internal server error', data: any = undefined) {
    super(message, data, 500, 'INTERNAL_SERVER_ERROR');
  }
}

// 503 Service Unavailable
export class ServiceUnavailableError extends BaseError {
  constructor(
    message = 'Service temporarily unavailable',
    data: any = undefined
  ) {
    super(message, data, 503, 'SERVICE_UNAVAILABLE');
  }
}

// Database related error
export class DatabaseError extends BaseError {
  constructor(message = 'Database operation failed', data: any = undefined) {
    super(message, data, 500, 'DATABASE_ERROR');
  }
}
