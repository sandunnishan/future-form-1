import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Topic } from '@/lib/types';
import { topics } from '@/lib/data';

interface TopicsState {
  topics: Topic[];
  loading: boolean;
  error: string | null;
}

const initialState: TopicsState = {
  topics: [],
  loading: false,
  error: null,
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    fetchTopicsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTopicsSuccess: (state, action: PayloadAction<Topic[]>) => {
      state.topics = action.payload;
      state.loading = false;
    },
    fetchTopicsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  fetchTopicsRequest, 
  fetchTopicsSuccess, 
  fetchTopicsFailure 
} = topicsSlice.actions;

export default topicsSlice.reducer;