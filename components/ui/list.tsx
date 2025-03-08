import { cn } from "@/lib/utils";
type TList<T> = {
  data: T[];
  render: (item: T) => React.ReactNode;
  showLoading?: boolean;
  LoadingSkeleton?: React.FC;
  loadingSkeletonLength?: number;
  showList?: boolean;
  classNames?: {
    list?: string;
  };
};

type TLoadingComponent = {
  showLoading?: boolean;
  loadingSkeletonLength?: number;
  LoadingSkeleton?: React.FC;
};
const LoadingComponent = (props: TLoadingComponent) => {
  const {
    LoadingSkeleton,
    loadingSkeletonLength = 5,
    showLoading = false,
  } = props;
  if (!showLoading) return null;
  if (!LoadingSkeleton)
    return (
      <>
        {Array.from({ length: loadingSkeletonLength }).map((_, index) => (
          <li
            key={index}
            className="w-full h-4 rounded-md bg-neutral-400 animate-pulse"
          />
        ))}
      </>
    );
  return (
    <>
      {Array.from({ length: loadingSkeletonLength }).map((_, index) => (
        <LoadingSkeleton key={index} />
      ))}
    </>
  );
};
export const List = <T,>(props: TList<T>) => {
  const { showLoading = false, showList = true } = props;

  if (!showList) return null;
  return (
    <ul className={cn("", props.classNames?.list)}>
      <LoadingComponent
        showLoading={showLoading}
        loadingSkeletonLength={props.loadingSkeletonLength}
        LoadingSkeleton={props.LoadingSkeleton}
      />
      {!showLoading ? props.data.map((item) => props.render(item)) : null}
    </ul>
  );
};
