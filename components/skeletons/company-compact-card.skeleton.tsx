export const CompanyCompactCardSkeleton = () => {
  return (
    <li className="flex items-center gap-2 border-b-[1px] px-4 py-2">
      <div className="size-6 rounded border-1 bg-gray-300 animate-pulse"></div>
      <div className="h-5 w-32 bg-gray-300 rounded animate-pulse"></div>
    </li>
  );
};
