import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { MagneticLiquid } from "@/components/marketing/magnetic-liquid";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await getSupabaseServerClient();
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;
  const demoMode = !process.env.NEXT_PUBLIC_SUPABASE_URL;

  return (
    <>
      <Nav isLoggedIn={!!user || demoMode} />
      <MagneticLiquid targetId="hero-get-access" />
      <main className="pt-14">{children}</main>
      <Footer />
    </>
  );
}
