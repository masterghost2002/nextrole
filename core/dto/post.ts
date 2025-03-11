import { POST_TYPES } from '@/types';
import { z } from 'zod';
export const PostDto = z.object({
  company_id: z.string().uuid(),
  post_type: z.nativeEnum(POST_TYPES),
  title: z.string().min(1).max(200),
  content: z.string().min(10).max(1000),
  user_id: z.string().uuid()
});

export const GetPostsDto = z.object({
  page: z
    .number()
    .optional()
    .default(1)
    .refine((value) => value >= 0, {
      message: 'Page must be a non-negative number.'
    }),
  limit: z
    .number()
    .optional()
    .default(10) // You can set a default value if needed
    .refine((value) => value > 0 && value <= 20, {
      message: 'Limit must be greater than 0 and less than or equal to 20.'
    })
});

export const GetPostByCompanyIdDto = z
  .object({
    company_id: z.string().uuid()
  })
  .merge(GetPostsDto);

export type TGetPostByCompanyIdDto = z.infer<typeof GetPostByCompanyIdDto>;
export type TPostDto = z.infer<typeof PostDto>;
export type TGetPosts = z.infer<typeof GetPostsDto>;
