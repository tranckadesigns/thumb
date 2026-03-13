import Link from "next/link";
import type { Asset, AssetCategory } from "@/types/asset";
import { cn } from "@/lib/utils/cn";

interface MemberAssetCardProps {
  asset: Asset;
  className?: string;
}

export function MemberAssetCard({ asset, className }: MemberAssetCardProps) {
  return (
    <Link href={`/asset/${asset.slug}`} className={cn("group block", className)}>
      {/* Placeholder preview */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-base-elevated aspect-video transition-all duration-300 group-hover:border-border-strong group-hover:shadow-elevated">
        {/* Subtle placeholder lines */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8">
          <div className="h-1.5 w-3/5 rounded-full bg-white/[0.06]" />
          <div className="h-1 w-2/5 rounded-full bg-white/[0.04]" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            View asset
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-3">
        <p className="text-sm font-medium text-content-primary truncate group-hover:text-accent transition-colors duration-150">
          {asset.title}
        </p>
        <p className="mt-0.5 text-xs text-content-muted/70 truncate">
          {asset.short_description}
        </p>
      </div>
    </Link>
  );
}
