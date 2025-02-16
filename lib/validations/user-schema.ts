import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const userOnboardingSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Username can only contain letters, numbers, - and _"
    ),
  nickname: z.string({
    required_error: "Nickname is required",
  }),
  dob: z.date({
    required_error: "Please select a date of birth",
  }),
  company: z.string({
    required_error: "Company is required",
  }),
  avatarId: z.string({
    required_error: "Please select an avatar",
  }),
  yearsOfExperience: z
    .number({
      required_error: "Years of experience is required",
    })
    .min(0, "Years of experience must be 0 or greater"),
});

export type UserOnboardingInput = z.infer<typeof userOnboardingSchema>;
