import { companyQueries } from '@/lib/api/query/company';
import { useQuery } from '@tanstack/react-query';
export const useCompanySearch = (searchTerm: string) => {
  return useQuery({
    queryKey: ['company-search', searchTerm],
    queryFn: () => companyQueries.searchCompany(searchTerm),
    refetchOnWindowFocus: false,
    enabled: !!searchTerm && searchTerm.trim()?.length >= 2
  });
};
