import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui';
import { PostTab } from './post-tab';

type TProps = {
  id: string;
};
export const TabSelector = (props: TProps) => {
  return (
    <Tabs defaultValue="posts" className="mx-auto w-full max-w-3xl">
      <TabsList className="flex items-center justify-between rounded-none bg-neutral-100 p-2">
        <TabsTrigger
          value="posts"
          className="text-sm data-[state=active]:border-primary-300 data-[state=active]:bg-white data-[state=active]:font-medium data-[state=active]:text-primary-900 data-[state=active]:shadow-retro-sm"
        >
          Posts
        </TabsTrigger>
        <TabsTrigger
          value="experience"
          className="text-sm data-[state=active]:border-primary-300 data-[state=active]:bg-white data-[state=active]:font-medium data-[state=active]:text-primary-900 data-[state=active]:shadow-retro-sm"
        >
          Interview Experience
        </TabsTrigger>
        <TabsTrigger
          value="rating"
          className="text-sm data-[state=active]:border-primary-300 data-[state=active]:bg-white data-[state=active]:font-medium data-[state=active]:text-primary-900 data-[state=active]:shadow-retro-sm"
        >
          Rating
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="posts"
        className="rounded-lg border border-neutral-200 bg-white p-4 shadow-retro-sm"
      >
        <PostTab id={props.id} />
      </TabsContent>
      <TabsContent
        value="experience"
        className="rounded-lg border border-neutral-200 bg-white p-4 shadow-retro-sm"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-900">
            Interview Experiences
          </h3>
          <p className="text-sm text-neutral-700">
            Learn from others' interview journeys at top companies.
          </p>
          <div className="space-y-3">
            <div className="rounded border border-neutral-200 bg-background p-3">
              <div className="flex items-start justify-between">
                <h4 className="font-medium text-neutral-800">
                  Google SWE Interview
                </h4>
                <span className="rounded bg-primary-100 px-2 py-1 text-xs text-primary-900">
                  Frontend
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                My experience interviewing for the Frontend role at Google
              </p>
            </div>
            <div className="rounded border border-neutral-200 bg-background p-3">
              <div className="flex items-start justify-between">
                <h4 className="font-medium text-neutral-800">Amazon SDE II</h4>
                <span className="rounded bg-primary-100 px-2 py-1 text-xs text-primary-900">
                  Backend
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                How I prepared and passed Amazon's SDE II interviews
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent
        value="rating"
        className="rounded-lg border border-neutral-200 bg-white p-4 shadow-retro-sm"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-900">
            Company Ratings
          </h3>
          <p className="text-sm text-neutral-700">
            See how companies are rated by our community members.
          </p>
          <div className="space-y-3">
            <div className="rounded border border-neutral-200 bg-background p-3">
              <div className="flex justify-between">
                <h4 className="font-medium text-neutral-800">Microsoft</h4>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#D91656"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D91656"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                Based on 234 reviews
              </p>
            </div>
            <div className="rounded border border-neutral-200 bg-background p-3">
              <div className="flex justify-between">
                <h4 className="font-medium text-neutral-800">Apple</h4>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#D91656"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                Based on 189 reviews
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent
        value="users"
        className="rounded-lg border border-neutral-200 bg-white p-4 shadow-retro-sm"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-900">
            Top Contributors
          </h3>
          <p className="text-sm text-neutral-700">
            Meet our most active community members.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3 rounded border border-neutral-200 bg-background p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 font-medium text-primary-900">
                JD
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">Jane Doe</h4>
                <p className="text-xs text-neutral-600">142 contributions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded border border-neutral-200 bg-background p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 font-medium text-primary-900">
                JS
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">John Smith</h4>
                <p className="text-xs text-neutral-600">98 contributions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded border border-neutral-200 bg-background p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 font-medium text-primary-900">
                AR
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">Alice Robinson</h4>
                <p className="text-xs text-neutral-600">76 contributions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded border border-neutral-200 bg-background p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 font-medium text-primary-900">
                BT
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">Bob Taylor</h4>
                <p className="text-xs text-neutral-600">63 contributions</p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabSelector;
