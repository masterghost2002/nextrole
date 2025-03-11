import { useEffect, useRef } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { PostCard } from './post-card';

type TProps = {
  data: InfiniteData<TPost[]>;
  fetchMore: () => void;
  isLoading: boolean;
  isFetchingMore: boolean;
  hasMoreData: boolean;
};

const tempCompany: TCompany = {
  id: '2ba02b9e-21cc-4fc2-a7e8-6ee995b5dcde',
  name: 'Domino',
  description: 'Domino',
  website: 'https://dominodatalab.com/',
  logo_url:
    'https://www.google.com/s2/favicons?domain=https://dominodatalab.com/',
  num_users_on_app: 0,
  created_at: '2025-02-24T13:05:16.995705+00:00',
  updated_at: '2025-02-24T13:05:16.995705+00:00',
  verification_status: 'VERIFIED'
};

export const PostList = ({
  data,
  fetchMore,
  isLoading,
  isFetchingMore,
  hasMoreData
}: TProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMoreData || isFetchingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMore();
        }
      },
      { rootMargin: '100px' }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMoreData, isFetchingMore, fetchMore]);

  if (isLoading)
    return (
      <div className="flex justify-center py-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
      </div>
    );

  return (
    <>
      {data.pages.map((page) =>
        page.map((post) => (
          <PostCard key={post.id} company={tempCompany} post={post} />
        ))
      )}

      {/* Intersection observer target for infinite scroll */}
      {hasMoreData && <div ref={observerRef} style={{ height: '1px' }} />}

      {/* Tailwind Spinner when fetching more */}
      {isFetchingMore && (
        <div className="flex justify-center py-4">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
        </div>
      )}
    </>
  );
};
