export const avatarQueries = {
  getAvatar: async () => {
    const response = await fetch('/api/avatar');
    if (!response.ok) {
      throw response;
    }
    return response.json() as Promise<
      DatabaseSchema['public']['Tables']['avatars']['Row'][]
    >;
  }
};
