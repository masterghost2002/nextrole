"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserOnboardingInput,
  userOnboardingSchema,
} from "@/lib/validations/user-schema";
import Image from "next/image";
import { useUserOnboarding } from "@/lib/hooks/mutations/useUser";

export default function UserOnboardingForm() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<UserOnboardingInput>({
    resolver: zodResolver(userOnboardingSchema),
  });

  const mutation = useUserOnboarding();

  const onSubmit = async (data: UserOnboardingInput) => {
    console.log(data);
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white p-2 md:p-8">
      <div className="max-w-2xl mx-auto bg-white p-4 md:p-8 rounded-lg md:shadow-retro">
        <h1 className="text-2xl md:text-3xl font-black text-[#03051E] mb-8">
          Create Your Profile
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-[#D91656] overflow-hidden mb-4">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Profile preview"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                  <span className="text-neutral-400">No avatar</span>
                </div>
              )}
            </div>
            <label className="cursor-pointer bg-[#D91656] hover:bg-[#D91656]/90 text-white px-4 py-2 rounded shadow-retro-sm font-bold">
              Select Avatar
              <input
                type="file"
                className="hidden"
                accept="image/*"
                {...register("profilePicture")}
                onChange={handleImageChange}
              />
            </label>
            {errors.profilePicture && (
              <p className="text-[#D91656] text-sm mt-1">
                {errors.profilePicture.message as string}
              </p>
            )}
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-bold text-[#03051E]">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-neutral-200 rounded focus:border-[#D91656] focus:outline-none"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-[#D91656] text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

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
              <label className="block font-bold text-[#03051E]">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border-2 border-neutral-200 rounded focus:border-[#D91656] focus:outline-none"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-[#D91656] text-sm">{errors.email.message}</p>
              )}
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
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D91656] hover:bg-[#D91656]/90 text-white py-3 rounded shadow-retro font-bold disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            {isSubmitting ? "Creating Profile..." : "Create Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
