export const CompanyCompactCardSkeleton = () => {
  return (
    <li className="flex items-center gap-2 border-b-[1px] px-4 py-2">
      <div className="border-1 size-6 animate-pulse rounded bg-gray-300"></div>
      <div className="h-5 w-32 animate-pulse rounded bg-gray-300"></div>
    </li>
  );
};
