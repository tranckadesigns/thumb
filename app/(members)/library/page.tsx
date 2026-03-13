import type { Metadata } from "next";
import { Suspense } from "react";
import type { AssetCategory } from "@/types/asset";
import { assetService } from "@/lib/services/index";
import { LibraryFilters } from "@/components/members/library-filters";
import { MemberAssetCard } from "@/components/members/member-asset-card";

export const metadata: Metadata = {
  title: "Library",
};

interface LibraryPageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export default async function LibraryPage({ searchParams }: LibraryPageProps) {
  const { category, q } = await searchParams;

  const assets = await assetService.getLibrary({
    category: category as AssetCategory | undefined,
    search: q,
  });

  const allAssets = await assetService.getLibrary();
  const isFiltered = !!(category || q);

  return (
    <div className="mx-auto max-w-6xl px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-content-primary">
          Library
        </h1>
        <p className="mt-1.5 text-sm text-content-muted">
          {isFiltered
            ? `${assets.length} result${assets.length !== 1 ? "s" : ""}${category ? ` in ${category}` : ""}${q ? ` for "${q}"` : ""}`
            : `${allAssets.length} premium PSD assets across 12 categories`}
        </p>
      </div>

      {/* Filters */}
      <div className="mb-10">
        <Suspense>
          <LibraryFilters activeCategory={category} activeSearch={q} />
        </Suspense>
      </div>

      {/* Grid */}
      {assets.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {assets.map((asset) => (
            <MemberAssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-40 text-center">
          <p className="text-base font-medium text-content-primary">No assets found</p>
          <p className="mt-2 text-sm text-content-muted">
            Try clearing your filters or searching for something else.
          </p>
        </div>
      )}
    </div>
  );
}
