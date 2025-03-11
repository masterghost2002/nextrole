import { auth, InjectDB } from '@/core/decorators';
import { PostDto, type TPostDto } from '@/core/dto';
import { BadRequestError, UnauthorizedError } from '../errors';
@InjectDB()
export class PostController {
  private db!: Promise<DB>;
  constructor() {}
  @auth()
  async createPost(post: TPostDto, user: TUser | undefined) {
    if (!user) throw new UnauthorizedError('Invalid user');
    const parsedPost = PostDto.safeParse({ ...post, user_id: user.user_id });
    if (parsedPost.error) throw new BadRequestError(parsedPost.error.message);
    const db = await this.db;
    const result = await db.post.createPost(parsedPost.data);
    return result;
  }
}
