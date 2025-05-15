import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  fetchArticlesRequest, 
  fetchArticlesSuccess, 
  fetchArticlesFailure 
} from '../slices/articlesSlice';
import { articles } from '@/lib/data';
import { Article } from '@/lib/types';

// In a real app, this would be an API call
function* fetchArticles() {
  try {
    // Simulate API call delay
    yield new Promise(resolve => setTimeout(resolve, 500));
    yield put(fetchArticlesSuccess(articles));
  } catch (error) {
    yield put(fetchArticlesFailure(error instanceof Error ? error.message : 'An unknown error occurred'));
  }
}

export function* watchArticles() {
  yield takeLatest(fetchArticlesRequest.type, fetchArticles);
}