'use client';

import { PostList } from '@/components/posts/post-list';
import { useGetPosts } from '@/lib/hooks/query';

export const PostTab = () => {
  const {
    data = { pages: [], pageParams: [] },
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetPosts({
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
        isFetchingMore={isFetchingNextPage}
        isLoading={isLoading}
        fetchMore={fetchNextPage}
        hasMoreData={hasNextPage}
      />
    </div>
  );
};
