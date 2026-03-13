import { createServerClient } from "@supabase/ssr";
import type { NextRequest, NextResponse } from "next/server";

export async function refreshSessionInMiddleware(
  request: NextRequest,
  response: NextResponse
): Promise<{ user: { id: string; email?: string } | null }> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // No Supabase configured — demo mode, treat as authenticated.
    return { user: { id: "demo", email: "demo@vaulted.app" } };
  }

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  // Always use getUser() — validates JWT against Supabase server.
  // getSession() trusts the local cookie without re-validating.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { user };
}
