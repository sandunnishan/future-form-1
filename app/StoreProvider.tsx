'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { ReactNode, useEffect } from 'react';
import { fetchArticlesRequest } from '@/store/slices/articlesSlice';
import { fetchTopicsRequest } from '@/store/slices/topicsSlice';

export function StoreProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    store.dispatch(fetchArticlesRequest());
    store.dispatch(fetchTopicsRequest());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}