const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const auth_callback_url = `${process.env.NEXT_PUBLIC_DOMAIN}/auth/callback`;

export const config: Record<string, string> = {
  supabaseKey,
  supabaseUrl,
  auth_callback_url
} as const;
