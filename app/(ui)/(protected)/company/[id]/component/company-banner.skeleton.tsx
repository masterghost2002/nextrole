export const CompanyBannerSkeleton = () => {
  return (
    <div className="w-full h-[150px] bg-white shadow-sm border-b border-neutral-200 p-4 animate-pulse">
      <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-neutral-300 rounded-md flex-shrink-0"></div>
          <div className="flex-1">
            <div className="flex items-center flex-wrap gap-2">
              <div className="h-5 w-32 bg-neutral-300 rounded"></div>
              <div className="h-4 w-16 bg-neutral-300 rounded-full"></div>
            </div>
            <div className="h-4 w-24 bg-neutral-300 rounded mt-1"></div>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <div className="h-3 w-16 bg-neutral-300 rounded mb-1"></div>
          <div className="h-4 w-24 bg-neutral-300 rounded"></div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-neutral-200">
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0">
          <div className="w-full sm:w-1/2 sm:pr-2">
            <div className="h-3 w-20 bg-neutral-300 rounded mb-1"></div>
            <div className="h-4 w-full bg-neutral-300 rounded"></div>
          </div>
          <div className="w-full sm:w-1/2 sm:pl-2">
            <div className="h-3 w-24 bg-neutral-300 rounded mb-1"></div>
            <div className="h-4 w-16 bg-neutral-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
