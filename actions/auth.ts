"use server";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Provider } from "@supabase/supabase-js";
const signInWith = (provider: Provider) => async () => {
  const supabase = await createClient();

  const auth_callback_url = `${process.env.NEXT_PUBLIC_DOMAIN}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  if (error) {
    redirect("/auth-error");
  }

  redirect(data.url);
};

export const signinWithGoogle = signInWith("google");
