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

  const handleAvatarSelect = (avatarId: string) => {
    setValue("avatarId", avatarId);
  };

  return (
    <div className="min-h-screen bg-white p-2 md:p-8">
      <div className="max-w-2xl mx-auto bg-white p-4 md:p-8 rounded-lg md:shadow-retro">
        <h1 className="text-2xl md:text-3xl font-black text-[#03051E] mb-8">
          Create Your Profile
        </h1>

        {submitError && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Picture Upload */}
          <AvatarSelector
            selectedAvatarId={watch("avatarId") as string}
            onAvatarSelect={handleAvatarSelect}
            error={errors.avatarId?.message as string}
          />

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-bold text-[#03051E]">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-neutral-200 rounded focus:border-[#D91656] focus:outline-none"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-[#D91656] text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block font-bold text-[#03051E]">
                Nickname (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-neutral-200 rounded focus:border-[#D91656] focus:outline-none"
                {...register("nickname")}
              />
            </div>

            <div className="space-y-2">
              <label className="block font-bold text-[#03051E]">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border-2 border-neutral-200 rounded focus:border-[#D91656] focus:outline-none"
                {...register("dob", { valueAsDate: true })}
              />
              {errors.dob && (
                <p className="text-[#D91656] text-sm">{errors.dob.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block font-bold text-[#03051E]">
                Current Company (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-neutral-200 rounded focus:border-[#D91656] focus:outline-none"
                {...register("company")}
              />
              {errors.company && (
                <p className="text-[#D91656] text-sm">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block font-bold text-[#03051E]">
                Years of Experience
              </label>
              <input
                type="number"
                min="0"
                className="w-full px-4 py-2 border-2 border-neutral-200 rounded focus:border-[#D91656] focus:outline-none"
                {...register("yearsOfExperience", { valueAsNumber: true })}
              />
              {errors.yearsOfExperience && (
                <p className="text-[#D91656] text-sm">
                  {errors.yearsOfExperience.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || mutation.isPending}
            className="w-full bg-[#D91656] hover:bg-[#D91656]/90 text-white py-3 rounded shadow-retro font-bold disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            {isSubmitting || mutation.isPending ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span> Creating Profile...
              </span>
            ) : (
              "Create Profile"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
