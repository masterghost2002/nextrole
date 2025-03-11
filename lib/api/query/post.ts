import { TGetPostByCompanyIdDto } from '@/core/dto';

export const postQueries = {
  getPostByCompanyId: async (params: TGetPostByCompanyIdDto) => {
    const searchParams = new URLSearchParams();
    for (const key in params) {
      const Tkey = key as keyof typeof params;
      const value = String(params[Tkey]);
      searchParams.set(key, value);
    }
    const response = await fetch(
      `/api/post/company?${searchParams.toString()}`
    );
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json() as Promise<TPost[]>;
  }
};
