import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";

export const TabSelector = () => {
  return (
    <Tabs defaultValue="posts" className="w-full max-w-3xl mx-auto">
      <TabsList className="flex items-center p-2 bg-neutral-100  justify-between rounded-none">
        <TabsTrigger
          value="posts"
          className="text-sm data-[state=active]:bg-white data-[state=active]:text-primary-900 data-[state=active]:shadow-retro-sm data-[state=active]:border-primary-300 data-[state=active]:font-medium"
        >
          Posts
        </TabsTrigger>
        <TabsTrigger
          value="experience"
          className="text-sm data-[state=active]:bg-white data-[state=active]:text-primary-900 data-[state=active]:shadow-retro-sm data-[state=active]:border-primary-300 data-[state=active]:font-medium"
        >
          Interview Experience
        </TabsTrigger>
        <TabsTrigger
          value="rating"
          className="text-sm data-[state=active]:bg-white data-[state=active]:text-primary-900 data-[state=active]:shadow-retro-sm data-[state=active]:border-primary-300 data-[state=active]:font-medium"
        >
          Rating
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="posts"
        className="p-4 bg-white rounded-lg shadow-retro-sm border border-neutral-200"
      >
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-neutral-900">
            Recent Posts
          </h3>
          <p className="text-sm text-neutral-700">
            Browse through the latest community posts and discussions.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-3 bg-background rounded border border-neutral-200 hover:border-primary-300 transition-all">
              <h4 className="font-medium text-neutral-800">
                Getting started with React
              </h4>
              <p className="text-sm text-neutral-600 mt-1">
                A beginner's guide to React development
              </p>
            </div>
            <div className="p-3 bg-background rounded border border-neutral-200 hover:border-primary-300 transition-all">
              <h4 className="font-medium text-neutral-800">
                Advanced TypeScript Tips
              </h4>
              <p className="text-sm text-neutral-600 mt-1">
                Improve your TypeScript skills with these pro tips
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent
        value="experience"
        className="p-4 bg-white rounded-lg shadow-retro-sm border border-neutral-200"
      >
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-neutral-900">
            Interview Experiences
          </h3>
          <p className="text-sm text-neutral-700">
            Learn from others' interview journeys at top companies.
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-background rounded border border-neutral-200">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-neutral-800">
                  Google SWE Interview
                </h4>
                <span className="bg-primary-100 text-primary-900 text-xs px-2 py-1 rounded">
                  Frontend
                </span>
              </div>
              <p className="text-sm text-neutral-600 mt-1">
                My experience interviewing for the Frontend role at Google
              </p>
            </div>
            <div className="p-3 bg-background rounded border border-neutral-200">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-neutral-800">Amazon SDE II</h4>
                <span className="bg-primary-100 text-primary-900 text-xs px-2 py-1 rounded">
                  Backend
                </span>
              </div>
              <p className="text-sm text-neutral-600 mt-1">
                How I prepared and passed Amazon's SDE II interviews
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent
        value="rating"
        className="p-4 bg-white rounded-lg shadow-retro-sm border border-neutral-200"
      >
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-neutral-900">
            Company Ratings
          </h3>
          <p className="text-sm text-neutral-700">
            See how companies are rated by our community members.
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-background rounded border border-neutral-200">
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
              <p className="text-sm text-neutral-600 mt-1">
                Based on 234 reviews
              </p>
            </div>
            <div className="p-3 bg-background rounded border border-neutral-200">
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
              <p className="text-sm text-neutral-600 mt-1">
                Based on 189 reviews
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent
        value="users"
        className="p-4 bg-white rounded-lg shadow-retro-sm border border-neutral-200"
      >
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-neutral-900">
            Top Contributors
          </h3>
          <p className="text-sm text-neutral-700">
            Meet our most active community members.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-3 bg-background rounded border border-neutral-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-900 font-medium">
                JD
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">Jane Doe</h4>
                <p className="text-xs text-neutral-600">142 contributions</p>
              </div>
            </div>
            <div className="p-3 bg-background rounded border border-neutral-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-900 font-medium">
                JS
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">John Smith</h4>
                <p className="text-xs text-neutral-600">98 contributions</p>
              </div>
            </div>
            <div className="p-3 bg-background rounded border border-neutral-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-900 font-medium">
                AR
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">Alice Robinson</h4>
                <p className="text-xs text-neutral-600">76 contributions</p>
              </div>
            </div>
            <div className="p-3 bg-background rounded border border-neutral-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-900 font-medium">
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
