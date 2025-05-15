import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import articlesReducer from './slices/articlesSlice';
import topicsReducer from './slices/topicsSlice';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    topics: topicsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;