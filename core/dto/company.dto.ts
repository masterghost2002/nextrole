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

export const GetCompanyListSchema = z.object({
  page: z
    .number()
    .optional()
    .default(1)
    .refine((value) => value >= 0, {
      message: "Page must be a non-negative number.",
    }),
  limit: z
    .number()
    .optional()
    .default(10) // You can set a default value if needed
    .refine((value) => value > 0 && value <= 20, {
      message: "Limit must be greater than 0 and less than or equal to 20.",
    }),
});

export const CompanyNameDto = z.string().min(2).max(40);

export type TGetCompanyListDto = z.infer<typeof GetCompanyListSchema>;
export type TCompanyName = z.infer<typeof CompanyNameDto>;
export type CreateCompanyDto = z.infer<typeof CreateCompanySchema>;
