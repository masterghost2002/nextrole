import { useQuery } from "@tanstack/react-query";
import { avatarQueries } from "@/lib/api/query/avatar";

export const useAvatarQuery = () => {
  const { data, error } = useQuery({
    queryKey: ["user-avatar"],
    queryFn: avatarQueries.getAvatar,
    refetchOnWindowFocus: false,
  });

  if (error || !data) {
    return [];
  }

  return data;
};
