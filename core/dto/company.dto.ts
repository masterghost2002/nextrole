import { z } from "zod";

export const CreateCompanySchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description cannot exceed 500 characters"),
  website: z
    .string()
    .url("Invalid website URL")
    .max(200, "Website URL cannot exceed 200 characters"),
  logo_url: z
    .string()
    .url("Invalid logo URL")
    .max(200, "Logo URL cannot exceed 200 characters")
    .optional(), // Optional field
});

export type CreateCompanyDto = z.infer<typeof CreateCompanySchema>;
