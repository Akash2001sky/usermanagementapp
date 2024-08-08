import {configureStore} from '@reduxjs/toolkit';
import userListReducer from './reducers/userListReducer';

export const store = configureStore({
  reducer: {
    userListReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
