'use client';

import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider
} from '@tanstack/react-query';
import { useState } from 'react';

const QueryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if ((error as any)?.response?.status === 401) return false;
        return failureCount < 3;
      }
    }
  }
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient(QueryConfig));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
