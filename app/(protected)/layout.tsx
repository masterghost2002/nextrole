import { createClient } from "@/lib/supabase";
import DB from "@/core/db";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const db = await DB.getInstance();
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const user = await db.user.getUserByEmail(data.user?.email || "");

  if (!data.user || error) {
    return redirect("/");
  }

  if (!user) return redirect("/onboarding");

  return <>{children}</>;
}
