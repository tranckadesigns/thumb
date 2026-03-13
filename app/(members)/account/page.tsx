import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LogOut, User, CreditCard, Calendar } from "lucide-react";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { signOutAction } from "@/app/(auth)/actions";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils/format";

export const metadata: Metadata = {
  title: "Account",
};

export default async function AccountPage() {
  const supabase = await getSupabaseServerClient();
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;
  const demoMode = !process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!user && !demoMode) {
    redirect("/login");
  }

  const memberSince = user?.created_at ? formatDate(user.created_at) : "—";

  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-2xl font-semibold tracking-tight text-content-primary">
          Account
        </h1>

        <div className="space-y-4">
          {/* Profile card */}
          <div className="rounded-xl border border-border bg-base-surface p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-base-overlay">
                <User className="h-4 w-4 text-content-muted" />
              </div>
              <p className="text-sm font-medium text-content-secondary uppercase tracking-wide">
                Profile
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-1 text-xs text-content-muted">Email address</p>
                <p className="text-sm font-medium text-content-primary">
                  {user?.email ?? "demo@vaulted.app"}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs text-content-muted">Member since</p>
                <p className="text-sm font-medium text-content-primary">
                  {memberSince}
                </p>
              </div>
            </div>
          </div>

          {/* Plan card */}
          <div className="rounded-xl border border-border bg-base-surface p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-base-overlay">
                <CreditCard className="h-4 w-4 text-content-muted" />
              </div>
              <p className="text-sm font-medium text-content-secondary uppercase tracking-wide">
                Subscription
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-content-primary">
                  Vaulted Members
                </p>
                <p className="mt-0.5 text-xs text-content-muted">
                  Full library access · All 12 categories
                </p>
              </div>
              <Badge variant="success">Active</Badge>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-base-elevated px-3 py-2.5">
              <Calendar className="h-3.5 w-3.5 flex-shrink-0 text-content-muted" />
              <p className="text-xs text-content-muted">
                Billing management will be available in a future update.
              </p>
            </div>
          </div>

          {/* Sign out */}
          <div className="rounded-xl border border-border bg-base-surface p-6">
            <form action={signOutAction} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-content-primary">Sign out</p>
                <p className="mt-0.5 text-xs text-content-muted">
                  You&apos;ll be redirected to the homepage.
                </p>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg border border-border bg-base-elevated px-4 py-2 text-sm text-content-secondary hover:border-border-strong hover:text-content-primary transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
