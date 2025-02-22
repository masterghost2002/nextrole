export const userQueries = {
  checkUserName: async (username: string) => {
    const params = new URLSearchParams();
    params.set("username", username);
    const response = await fetch(
      `/api/user/check-username?${params.toString()}`
    );
    if (!response.ok) throw new Error("Failed to get username");
    return response.json() as Promise<{ isAvailable: boolean }>;
  },
};
