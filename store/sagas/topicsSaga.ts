import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  fetchTopicsRequest, 
  fetchTopicsSuccess, 
  fetchTopicsFailure 
} from '../slices/topicsSlice';
import { topics } from '@/lib/data';
import { Topic } from '@/lib/types';

// In a real app, this would be an API call
function* fetchTopics() {
  try {
    // Simulate API call delay
    yield new Promise(resolve => setTimeout(resolve, 500));
    yield put(fetchTopicsSuccess(topics));
  } catch (error) {
    yield put(fetchTopicsFailure(error instanceof Error ? error.message : 'An unknown error occurred'));
  }
}

export function* watchTopics() {
  yield takeLatest(fetchTopicsRequest.type, fetchTopics);
}