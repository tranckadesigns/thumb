import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { AppNav } from "@/components/members/app-nav";

export default async function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await getSupabaseServerClient();
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;

  // If Supabase is not configured, run in demo mode (no auth required).
  const demoMode = !process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!user && !demoMode) {
    redirect("/login");
  }

  const email = user?.email ?? "demo@vaulted.app";

  return (
    <div className="min-h-screen bg-base">
      <AppNav email={email} />
      <main className="pt-14">{children}</main>
    </div>
  );
}
