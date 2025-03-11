import { useQuery } from '@tanstack/react-query';
import { type TGetPostByCompanyIdDto } from '@/core/dto';
import { postQueries } from '@/lib/api/query';

export const useGetPostByCompanyId = (params: TGetPostByCompanyIdDto) => {
  return useQuery({
    queryKey: ['company-post', params.company_id, params.page, params.limit],
    queryFn: () => postQueries.getPostByCompanyId(params),
    enabled: !!params.company_id || +params.page <= 0 || +params.limit <= 0
  });
};
