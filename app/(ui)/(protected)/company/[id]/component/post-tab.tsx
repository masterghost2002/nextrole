'use client';

import { PostList } from '@/components/posts/post-list';
import { useGetPostByCompanyId } from '@/lib/hooks/query';

type TProps = {
  id: string;
};
export const PostTab = (props: TProps) => {
  const {
    data = [],
    isLoading,
    isFetching
  } = useGetPostByCompanyId({
    company_id: props.id,
    limit: 10,
    page: 1
  });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-neutral-900">Recent Posts</h3>
      <p className="text-sm text-neutral-700">
        Browse through the latest community posts and discussions.
      </p>
      <PostList
        data={data}
        isFetchingMore={isFetching}
        isLoading={isLoading}
        fetchMore={({ page, limit }) => {}}
      />
    </div>
  );
};
