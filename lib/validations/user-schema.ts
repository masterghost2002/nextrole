import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const userOnboardingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Username can only contain letters, numbers, - and _"
    ),
  nickname: z.string().optional(),
  email: z.string().email("Invalid email address"),
  dob: z.date({
    required_error: "Please select a date of birth",
  }),
  company: z.string().optional(),
  profilePicture: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    )
    .optional(),
});

export type UserOnboardingInput = z.infer<typeof userOnboardingSchema>;
