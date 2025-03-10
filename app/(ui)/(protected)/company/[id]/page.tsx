import { Suspense } from "react";
import { CompanyBanner, CompanyBannerSkeleton } from "./component";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="text-neutral-900 w-full">
      <Suspense fallback={<CompanyBannerSkeleton />}>
        <CompanyBanner id={id} />
      </Suspense>
    </div>
  );
}
