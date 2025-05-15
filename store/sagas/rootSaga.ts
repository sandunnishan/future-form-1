import { all, fork } from 'redux-saga/effects';
import { watchArticles } from './articlesSaga';
import { watchTopics } from './topicsSaga';

export default function* rootSaga() {
  yield all([
    fork(watchArticles),
    fork(watchTopics),
  ]);
}