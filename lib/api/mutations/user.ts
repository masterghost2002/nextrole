import { UserOnboardingInput } from "@/lib/validations/user-schema";

export const userMutations = {
  onboard: async (data: UserOnboardingInput) => {
    const response = await fetch("/api/user/onboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create profile");
    }

    return response.json();
  },

  updateProfile: async (data: UserOnboardingInput) => {
    // Update profile mutation
  },

  // Add more user-related mutations
};
