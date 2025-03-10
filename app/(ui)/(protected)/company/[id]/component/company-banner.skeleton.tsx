export const CompanyBannerSkeleton = () => {
  return (
    <div className="w-full h-[150px] bg-white border-b shadow-md overflow-hidden border border-neutral-200 animate-pulse">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-neutral-200 rounded-md"></div>
            <div>
              <div className="flex items-center">
                <div className="h-5 bg-neutral-200 rounded w-28"></div>
                <div className="ml-2 h-4 bg-neutral-200 rounded-full w-14"></div>
              </div>
              <div className="h-3 bg-neutral-200 rounded w-36 mt-1"></div>
            </div>
          </div>
          <div className="text-right">
            <div className="h-3 bg-neutral-200 rounded w-14 ml-auto"></div>
            <div className="h-3 bg-neutral-200 rounded w-20 mt-1 ml-auto"></div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-neutral-200">
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <div className="h-3 bg-neutral-200 rounded w-20"></div>
              <div className="h-3 bg-neutral-200 rounded w-full mt-1"></div>
            </div>
            <div className="w-1/2 pl-2">
              <div className="h-3 bg-neutral-200 rounded w-24"></div>
              <div className="h-3 bg-neutral-200 rounded w-6 mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
