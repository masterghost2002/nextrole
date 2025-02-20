import { NextRequest, NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions
import { createClient } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";
  console.log("next", next);
  console.log("origin", origin);
  console.log("code", code);

  if (!code) {
    return NextResponse.redirect(`${origin}/404`);
  }

  const supabase = await createClient();
  const { error, data } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(`${origin}/404`);
  }

  const userFromDatabase = await supabase
    .from("users")
    .select("*")
    .eq("email", data.user.email)
    .single();
  if (!userFromDatabase.data)
    return NextResponse.redirect(`${origin}/onboarding`);

  // const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
  // const isLocalEnv = process.env.NODE_ENV === "development";
  // if (isLocalEnv) {
  //   // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
  //   return NextResponse.redirect(`${origin}${next}`);
  // } else if (forwardedHost) {
  //   return NextResponse.redirect(`https://${forwardedHost}${next}`);
  // }
  return NextResponse.redirect(`${origin}${next}`);
}
