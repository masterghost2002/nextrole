'use client';

import { Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useCompanySearch } from '@/lib/hooks/query';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { List } from '@/components/ui';
import { CompanyCompactCardSkeleton } from '@/components/skeletons';
import { useRouter } from 'next/navigation';

export const QuickBar = () => {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const { data = [], isLoading } = useCompanySearch(debouncedSearchTerm);

  useEffect(() => {
    if (!isSearchEnabled || !inputRef.current) return;
    inputRef.current.focus();
  }, [isSearchEnabled]);

  return (
    <aside className="flex max-w-[348px] flex-1 flex-col border-r-[2px] border-neutral-500">
      <div
        className={
          'flex h-[56px] w-full items-center justify-between border-b-[2px] border-neutral-500 px-4'
        }
      >
        {!isSearchEnabled && (
          <button
            onClick={() => setIsSearchEnabled(true)}
            className="flex w-fit cursor-text items-center gap-2 rounded-[10px] border-[1px] border-neutral-500 p-2 text-sm text-neutral-900"
          >
            <Search size={16} />
            <span>Search Companies</span>
          </button>
        )}
        {isSearchEnabled && (
          <div className="flex w-full justify-between px-4 text-neutral-900">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Companies"
              className="bg-white"
              ref={inputRef}
            />
            <button
              onClick={() => setIsSearchEnabled(false)}
              className="flex size-6 items-center rounded-full bg-neutral-700 p-1 text-white"
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
              className="flex cursor-pointer items-center gap-2 border-b-[1px] px-4 py-2"
              onClick={() => router.push(`/company/${company.id}`)}
            >
              <img
                src={company.logo_url}
                alt={company.name}
                className="border-1 size-6 rounded"
              />
              <span className="text-lg font-bold text-neutral-900">
                {company.name}
              </span>
            </li>
          )}
          classNames={{
            list: 'flex flex-col gap-2 rounded-lg overflow-auto flex-1 pb-10'
          }}
        />
      }
    </aside>
  );
};
