"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserOnboardingInput,
  userOnboardingSchema,
} from "@/lib/validations/user-schema";
import { useUserOnboarding } from "@/lib/hooks/mutations/useUser";
import { AvatarSelector } from "@/components/avatar-selector";
import { Button } from "@/components/ui/button";

export default function UserOnboardingForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<UserOnboardingInput>({
    resolver: zodResolver(userOnboardingSchema),
  });

  const mutation = useUserOnboarding();

  const onSubmit = async (data: UserOnboardingInput) => {
    setSubmitError(null);
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An error occurred while creating your profile"
      );
      console.error("Submission failed:", error);
    }
  };

  const handleAvatarSelect = (avatarId: number) => {
    setValue("avatarId", avatarId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-2 md:p-8">
      <div className="w-full max-w-2xl bg-white p-6 md:p-8 md:rounded-lg md:shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-[#03051E] mb-6 text-center">
          Create Your Profile
        </h1>

        {submitError && (
          <div className="mb-4 p-4 bg-red-100 border border-red-300 text-red-600 rounded">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Avatar Selection */}
          <AvatarSelector
            selectedAvatarId={watch("avatarId")}
            onAvatarSelect={handleAvatarSelect}
            error={errors.avatarId?.message as string}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "Username",
                name: "username",
                type: "text",
                required: true,
              },
              {
                label: "Nickname",
                name: "nickname",
                type: "text",
                required: true,
              },
              {
                label: "Date of Birth",
                name: "dob",
                type: "date",
                required: true,
              },
              // {
              //   label: "Company (Optional)",
              //   name: "currentCompany",
              //   type: "text",
              // },
              // {
              //   label: "Years of Experience",
              //   name: "yearsOfExperience",
              //   type: "number",
              //   required: true,
              //   min: 0,
              // },
              {
                label: "Current Role (Optional)",
                name: "currentRole",
                type: "text",
              },
            ].map(({ label, name, type, required }) => (
              <div key={name} className="space-y-2">
                <label className="block font-bold text-[#03051E]">
                  {label}
                </label>
                <input
                  type={type}
                  className="w-full px-4 py-2 border-2 text-black border-neutral-200 rounded focus:border-[#D91656] focus:outline-none"
                  {...register(
                    name as keyof UserOnboardingInput,
                    type === "number" ? { valueAsNumber: true } : {}
                  )}
                />
                {errors[name as keyof UserOnboardingInput] && (
                  <p className="text-[#D91656] text-sm">
                    {errors[name as keyof UserOnboardingInput]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Bio Field */}
          <div className="space-y-2">
            <label className="block font-bold text-[#03051E]">Bio</label>
            <textarea
              className="w-full px-4 py-2 border-2 text-black border-neutral-200 rounded focus:border-[#D91656] focus:outline-none"
              {...register("bio")}
              rows={4}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting || mutation.isPending}
            className="w-full"
          >
            {isSubmitting || mutation.isPending ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span> Creating Profile...
              </span>
            ) : (
              "Create Profile"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
