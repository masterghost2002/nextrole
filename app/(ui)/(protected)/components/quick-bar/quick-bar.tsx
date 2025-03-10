"use client";

import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { userCompanySearch } from "@/lib/hooks/query";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { List } from "@/components/ui";
import { CompanyCompactCardSkeleton } from "@/components/skeletons";
import { useRouter } from "next/navigation";

export const QuickBar = () => {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const { data = [], isLoading } = userCompanySearch(debouncedSearchTerm);

  useEffect(() => {
    if (!isSearchEnabled || !inputRef.current) return;
    inputRef.current.focus();
  }, [isSearchEnabled]);

  return (
    <aside className="max-w-[348px] border-r-[2px] border-neutral-500 flex-1 flex flex-col">
      <div
        className={
          "w-full h-[56px] border-b-[2px] border-neutral-500 px-4 items-center flex justify-between"
        }
      >
        {!isSearchEnabled && (
          <button
            onClick={() => setIsSearchEnabled(true)}
            className="flex text-neutral-900 cursor-text items-center gap-2 p-2 text-sm w-fit rounded-[10px] border-neutral-500 border-[1px]"
          >
            <Search size={16} />
            <span>Search Companies</span>
          </button>
        )}
        {isSearchEnabled && (
          <div className="flex justify-between px-4 w-full text-neutral-900">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Companies"
              className="bg-white"
              ref={inputRef}
            />
            <button
              onClick={() => setIsSearchEnabled(false)}
              className="size-6 p-1 flex items-center rounded-full bg-neutral-700 text-white"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>
      {
        <List
          data={data}
          showList={isSearchEnabled}
          showLoading={isLoading}
          LoadingSkeleton={CompanyCompactCardSkeleton}
          render={(company) => (
            <li
              key={company.id}
              className="flex items-center gap-2 border-b-[1px] px-4 py-2 cursor-pointer"
              onClick={() => router.push(`/company/${company.id}`)}
            >
              <img
                src={company.logo_url}
                alt={company.name}
                className="size-6 rounded border-1"
              />
              <span className="text-lg font-bold  text-neutral-900">
                {company.name}
              </span>
            </li>
          )}
          classNames={{
            list: "flex flex-col gap-2 rounded-lg overflow-auto flex-1 pb-10",
          }}
        />
      }
    </aside>
  );
};
