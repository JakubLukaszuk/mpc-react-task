import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import taskSlice from '../slices/taskSlice';
import { useDispatch } from 'react-redux'
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const middlewares = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware);
}

export const store = configureStore({
  reducer: {
    task: taskSlice,
  },
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
