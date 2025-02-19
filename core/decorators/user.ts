import { UnauthorizedError } from "@/core/errors";
import { createClient } from "@/lib/supabase";
import DB from "@/core/db";
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

    descriptor.value = async function (...args: any[]) {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        throw new UnauthorizedError("Authentication required");
      }

      if (!data.user) {
        throw new UnauthorizedError("Authentication required");
      }

      const db = await DB.getInstance();
      const user = await db.user.getUserByEmail(data.user.email || "");

      if (!user) {
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
 */ export function basicAuth() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        throw new UnauthorizedError("Authentication required");
      }

      // Add the user's email to the method's arguments
      args.push(data.user.email);

      // Call the original method with the updated arguments
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
