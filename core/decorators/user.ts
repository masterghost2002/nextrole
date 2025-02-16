import { UnauthorizedError } from "../errors";

/**
 * Basic authentication decorator
 * Ensures the user has completed initial authentication (e.g., Google OAuth)
 * but may not have completed the full verification process.
 *
 * Use this decorator for:
 * - Viewing basic profile information
 * - Completing onboarding steps
 * - Accessing public features that still require login
 *
 * @throws {UnauthorizedError} If user is not authenticated
 */
export function auth() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const request = args[0];

      if (!request.user) {
        throw new UnauthorizedError("Authentication required");
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

/**
 * Full authentication decorator
 * Ensures the user is both authenticated AND has completed all required
 * verification steps (e.g., onboarding, email verification, etc.)
 *
 * Use this decorator for:
 * - Sensitive operations
 * - Account settings modification
 * - Features requiring a complete user profile
 * - Financial transactions
 *
 * @throws {UnauthorizedError} If user is not authenticated
 * @throws {UnauthorizedError} If user has not completed verification
 */
export function basicAuth() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const request = args[0];

      if (!request.user) {
        throw new UnauthorizedError("Authentication required");
      }

      if (!request.user.isOnboarded) {
        throw new UnauthorizedError("Account verification required");
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
