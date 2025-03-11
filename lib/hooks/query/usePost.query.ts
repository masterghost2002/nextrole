import { useInfiniteQuery } from '@tanstack/react-query';
import { type TGetPostByCompanyIdDto } from '@/core/dto';
import { postQueries } from '@/lib/api/query';

export const useGetPostByCompanyId = (params: TGetPostByCompanyIdDto) => {
  return useInfiniteQuery({
    queryKey: ['company-post', params.company_id, params.page, params.limit],
    queryFn: ({ pageParam = 1 }) =>
      postQueries.getPostByCompanyId({ ...params, page: pageParam }),
    enabled: !!params.company_id || +params.page <= 0 || +params.limit <= 0,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === params.limit ? allPages.length + 1 : undefined;
    }
  });
};
