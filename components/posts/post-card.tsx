type TProps = {
  post: TPost;
  company: TCompany;
};
export const PostCard = (props: TProps) => {
  const post = props.post;
  const company = props.company;
  return (
    <div className="w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-retro transition-transform duration-300 hover:translate-y-1">
      {/* Mobile Layout (default) */}
      <div className="block p-4 md:hidden">
        {/* Mobile Header */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-primary-200">
              <img
                src={company.logo_url!}
                alt={`${company.name} logo`}
                className="h-5 w-5"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                {company.name}
              </h3>
              <a href={company.website!} className="text-xs text-primary">
                {company.website}
              </a>
            </div>
          </div>
          <div className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700">
            {post.post_type}
          </div>
        </div>

        {/* Mobile Content */}
        <h2 className="mb-2 text-lg font-bold text-neutral-900">
          {post.title}
        </h2>
        <p className="mb-3 line-clamp-2 text-sm text-neutral-700">
          {post.content}
        </p>

        {/* Mobile Footer */}
        <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
          <span className="text-xs text-neutral-500">
            {/* {formatDate(post.created_at)} */}
          </span>
          <button className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-white shadow-retro-sm">
            Read More
          </button>
        </div>
      </div>

      {/* Desktop/Laptop Layout */}
      <div className="hidden p-5 md:block">
        {/* Desktop Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary-200">
              <img
                src={company.logo_url!}
                alt={`${company.name} logo`}
                className="h-6 w-6"
              />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">{company.name}</h3>
              <a
                href={company.website!}
                className="text-sm text-primary hover:text-primary-800"
              >
                {company.website}
              </a>
            </div>
          </div>
          <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
            {post.post_type}
          </div>
        </div>

        {/* Desktop Content */}
        <h2 className="mb-2 text-xl font-bold text-neutral-900">
          {post.title}
        </h2>
        <p className="mb-4 line-clamp-3 text-neutral-700">{post.content}</p>

        {/* Desktop Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
          <span className="text-sm text-neutral-500">
            {/* {formatDate(post.created_at)} */}
          </span>
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-retro-sm transition-colors duration-200 hover:bg-primary-800">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
