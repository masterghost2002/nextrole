import { z } from 'zod';

// Define the schema
export const UsernameSchema = z
  .string()
  .min(4, 'Username must be at least 5 characters long')
  .max(16, 'Username cannot exceed 16 characters')
  .refine(
    (value) => /^[a-zA-Z][a-zA-Z0-9_.]*$/.test(value),
    'Username can only contain letters, numbers, underscores (_), and periods (.), and cannot start with a number'
  );
export const CreateUserSchema = z.object({
  bio: z
    .string()
    .min(10, 'Bio must be at least 10 characters long')
    .max(500, 'Bio cannot exceed 500 characters'),
  nickname: z
    .string()
    .min(3, 'Nickname must be at least 3 characters long')
    .max(50, 'Nickname cannot exceed 50 characters'),
  username: UsernameSchema,
  avatarId: z.number().int().positive('Avatar ID must be a positive integer'),
  dob: z
    .date()
    .refine((date) => date < new Date(), 'Date of birth must be in the past'),
  currentCompany: z
    .string()
    .max(100, 'Current company cannot exceed 100 characters')
    .optional(),
  yearOfExperience: z
    .number()
    .int()
    .min(0, 'Year of experience cannot be negative')
    .optional()
});

// Infer the TypeScript type from the schema
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export type UsernameDto = z.infer<typeof UsernameSchema>;
