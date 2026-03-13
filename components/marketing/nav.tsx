"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/brand/wordmark";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

interface NavProps {
  isLoggedIn?: boolean;
}

export function Nav({ isLoggedIn }: NavProps) {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={cn(
        "text-sm transition-colors",
        pathname === href
          ? "text-content-primary"
          : "text-content-secondary hover:text-content-primary"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-border-subtle bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex-shrink-0">
          <Wordmark />
        </Link>

        <nav className="flex items-center gap-7">
          {navLink("/pricing", "Pricing")}
          {isLoggedIn ? (
            <>
              {navLink("/account", "Account")}
              <Link
                href="/library"
                className={cn(buttonVariants({ size: "sm" }))}
              >
                Library
              </Link>
            </>
          ) : (
            <>
              {navLink("/login", "Sign in")}
              <Link
                href="/signup"
                className={cn(buttonVariants({ size: "sm" }))}
              >
                Get access
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
