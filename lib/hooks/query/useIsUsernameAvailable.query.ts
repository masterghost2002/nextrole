import { userQueries } from '@/lib/api/query';
import { useQuery } from '@tanstack/react-query';

export const useIsUserNameAvailable = (username: string) => {
  return useQuery({
    queryKey: ['check-username-availability', username],
    queryFn: () => userQueries.checkUserName(username),
    refetchOnWindowFocus: false,
    enabled: !!username && username.trim()?.length >= 4
  });
};
