import { createClient } from "@/lib/supabase";
import DB from "@/lib/supabase/db";
import { redirect } from "next/navigation";
import UserOnboardingForm from "@/components/UserOnboardingForm";

export default async function OnboardingPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const db = await DB.getInstance();
  const user = await db.user.getUserByEmail(data.user?.email || "");

  if (!data.user || error) {
    return redirect("/");
  }

  if (user) return redirect("/home");
  return <UserOnboardingForm />;
}
