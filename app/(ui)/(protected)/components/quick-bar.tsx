"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import { userCompanySearch } from "@/lib/hooks/query";
import { useDebounce } from "@/lib/hooks/useDebounce";

export const QuickBar = () => {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  const { data = [] } = userCompanySearch(debouncedSearchTerm);
  return (
    <aside className="max-w-[348px] border-r-[2px] border-neutral-500 h-full">
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
          <div className="flex justify-between px-4 w-full">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Companies"
            />
            <button className="size-6 p-1 flex items-center rounded-full bg-neutral-500">
              <X size={4} />
            </button>
          </div>
        )}
      </div>
      {
        <ul className="flex flex-col gap-2">
          {data.map((company) => (
            <li
              key={company.id}
              className="flex items-center gap-4 text-neutral-900 px-4"
            >
              {company.name}
            </li>
          ))}
        </ul>
      }
    </aside>
  );
};
