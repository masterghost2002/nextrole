import { useQuery } from "@tanstack/react-query";
import { avatarQueries } from "@/lib/api/query/avatar";

export const useAvatarQuery = () => {
  return useQuery({
    queryKey: ["user-avatar"],
    queryFn: avatarQueries.getAvatar,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      if ((error as any)?.response?.status === 401) return false;
      return failureCount < 3;
    },
  });
};
