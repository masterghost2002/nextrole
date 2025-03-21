import { Suspense } from 'react';
import { CompanyBanner, CompanyBannerSkeleton, TabSelector } from './component';
import { generateCompanyMetadata } from '@/lib/metadata/generate-company-metadata';
import { Metadata } from 'next';
export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return await generateCompanyMetadata(id);
}
export default async function Page({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="pb-20 text-neutral-900">
      <Suspense fallback={<CompanyBannerSkeleton />}>
        <CompanyBanner id={id} />
      </Suspense>
      <TabSelector id={id} />
    </div>
  );
}
