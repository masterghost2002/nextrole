import { PostCardSkeleton } from '../skeletons';
import { PostCard } from './post-card';

type TProps = {
  data: TPost[];
  fetchMore: ({ limit, page }: { limit: number; page: number }) => void;
  isLoading: boolean;
  isFetchingMore: boolean;
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

export const PostList = (props: TProps) => {
  if (props.isLoading)
    return (
      <>
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </>
    );
  return (
    <ul className="flex flex-col gap-2">
      {props.data.map((post) => (
        <PostCard key={post.id} post={post} company={tempCompany} />
      ))}
    </ul>
  );
};
