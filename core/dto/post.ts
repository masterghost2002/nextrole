import { POST_TYPES } from '@/types';
import { z } from 'zod';
export const PostDto = z.object({
  company_id: z.string().uuid(),
  post_type: z.nativeEnum(POST_TYPES),
  title: z.string().min(1).max(200),
  content: z.string().min(10).max(1000),
  user_id: z.string().uuid()
});

export type TPostDto = z.infer<typeof PostDto>;
