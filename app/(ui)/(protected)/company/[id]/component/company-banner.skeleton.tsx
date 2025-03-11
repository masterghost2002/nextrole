export const CompanyBannerSkeleton = () => {
  return (
    <div className="h-[150px] w-full animate-pulse border-b border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 flex-shrink-0 rounded-md bg-neutral-300"></div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <div className="h-5 w-32 rounded bg-neutral-300"></div>
              <div className="h-4 w-16 rounded-full bg-neutral-300"></div>
            </div>
            <div className="mt-1 h-4 w-24 rounded bg-neutral-300"></div>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <div className="mb-1 h-3 w-16 rounded bg-neutral-300"></div>
          <div className="h-4 w-24 rounded bg-neutral-300"></div>
        </div>
      </div>

      <div className="mt-3 border-t border-neutral-200 pt-3">
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0">
          <div className="w-full sm:w-1/2 sm:pr-2">
            <div className="mb-1 h-3 w-20 rounded bg-neutral-300"></div>
            <div className="h-4 w-full rounded bg-neutral-300"></div>
          </div>
          <div className="w-full sm:w-1/2 sm:pl-2">
            <div className="mb-1 h-3 w-24 rounded bg-neutral-300"></div>
            <div className="h-4 w-16 rounded bg-neutral-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
