export const PostCardSkeleton = () => {
  return (
    <div className="w-full animate-pulse overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-retro">
      <div className="p-5">
        {/* Header skeleton */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 h-10 w-10 rounded-md bg-neutral-200"></div>
            <div>
              <div className="mb-2 h-4 w-24 rounded bg-neutral-200"></div>
              <div className="h-3 w-32 rounded bg-neutral-200"></div>
            </div>
          </div>
          <div className="h-6 w-16 rounded-full bg-neutral-200"></div>
        </div>

        {/* Title skeleton */}
        <div className="mb-3 h-6 w-3/4 rounded bg-neutral-200"></div>

        {/* Content skeleton */}
        <div className="mb-4 space-y-2">
          <div className="h-4 w-full rounded bg-neutral-200"></div>
          <div className="h-4 w-full rounded bg-neutral-200"></div>
          <div className="h-4 w-2/3 rounded bg-neutral-200"></div>
        </div>

        {/* Footer skeleton */}
        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
          <div className="h-4 w-20 rounded bg-neutral-200"></div>
          <div className="h-8 w-24 rounded-md bg-neutral-200"></div>
        </div>
      </div>
    </div>
  );
};
