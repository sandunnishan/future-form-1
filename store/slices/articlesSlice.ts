import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '@/lib/types';
import { articles } from '@/lib/data';

interface ArticlesState {
  articles: Article[];
  featuredArticle: Article | null;
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  featuredArticle: null,
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    fetchArticlesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchArticlesSuccess: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
      state.featuredArticle = action.payload.find(article => article.isFeatured) || null;
      state.loading = false;
    },
    fetchArticlesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  fetchArticlesRequest, 
  fetchArticlesSuccess, 
  fetchArticlesFailure 
} = articlesSlice.actions;

export default articlesSlice.reducer;