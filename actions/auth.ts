"use server";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Provider } from "@supabase/supabase-js";
import { config } from "@/lib/config";
const signInWith = (provider: Provider) => async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: config.auth_callback_url,
    },
  });

  if (error) {
    redirect("/auth-error");
  }

  redirect(data.url);
};

export const signinWithGoogle = signInWith("google");
