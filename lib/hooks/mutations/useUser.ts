import { useMutation } from "@tanstack/react-query";
import { userMutations } from "@/lib/api/mutations/user";
import { UserOnboardingInput } from "@/lib/validations/user-schema";

interface OnboardingResponse {
  message: string;
}

export function useUserOnboarding() {
  return useMutation<OnboardingResponse, Error, UserOnboardingInput>({
    mutationKey: ["user-onboarding"],
    mutationFn: userMutations.onboard,
    onSuccess: (data) => {
      // Handle success (e.g., show toast, redirect)
    },
    onError: (error) => {
      // Handle error (e.g., show error toast)
    },
  });
}

export function useUpdateProfile() {
  return useMutation({
    mutationKey: ["user-update-profile"],
    mutationFn: userMutations.updateProfile,
    // ... configuration
  });
}
