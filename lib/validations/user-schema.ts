import { z } from 'zod';
export const userOnboardingSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'Username can only contain letters, numbers, - and _'
    ),
  nickname: z.string({
    required_error: 'Nickname is required'
  }),
  dob: z.string({
    required_error: 'Please select a date of birth'
  }),
  avatarId: z.number({
    required_error: 'Please select an avatar'
  }),
  // currentCompany: z.string().optional(),
  // yearsOfExperience: z
  //   .number({
  //     required_error: "Years of experience is required",
  //   })
  //   .min(0, "Years of experience must be 0 or greater"),
  currentRole: z.string().optional(),
  bio: z
    .string()
    .min(10, 'Bio must be at least 10 characters long')
    .max(500, 'Bio cannot exceed 500 characters')
});

export type UserOnboardingInput = z.infer<typeof userOnboardingSchema>;
