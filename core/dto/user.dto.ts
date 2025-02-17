import { z } from "zod";

// Define the schema
export const CreateUserSchema = z
  .object({
    bio: z
      .string()
      .min(10, "Bio must be at least 10 characters long")
      .max(500, "Bio cannot exceed 500 characters"),
    nickname: z
      .string()
      .min(3, "Nickname must be at least 3 characters long")
      .max(50, "Nickname cannot exceed 50 characters"),
    username: z
      .string()
      .min(5, "Username must be at least 5 characters long")
      .max(30, "Username cannot exceed 30 characters"),
    avatarId: z.number().int().positive("Avatar ID must be a positive integer"),
    dob: z
      .date()
      .refine((date) => date < new Date(), "Date of birth must be in the past"),
    currentCompany: z
      .string()
      .max(100, "Current company cannot exceed 100 characters")
      .optional(),
    yearOfExperience: z
      .number()
      .int()
      .min(0, "Year of experience cannot be negative")
      .optional(),
  })
  .refine((data) => data.currentCompany || data.yearOfExperience, {
    message: "Either currentCompany or yearOfExperience must be provided",
    path: ["currentCompany", "yearOfExperience"],
  });

// Infer the TypeScript type from the schema
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
