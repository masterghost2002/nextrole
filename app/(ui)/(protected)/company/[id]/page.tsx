import { Suspense } from "react";
import { CompanyBanner, CompanyBannerSkeleton, TabSelector } from "./component";
import { HorizontalScrollList } from "@/components/ui";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="text-neutral-900  pb-20">
      <Suspense fallback={<CompanyBannerSkeleton />}>
        <CompanyBanner id={id} />
      </Suspense>
      <TabSelector />
    </div>
  );
}
