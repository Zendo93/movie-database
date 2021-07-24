import { configureStore } from '@reduxjs/toolkit';
import searchFormReducer from "../reducers/searchFormReducer";

export const store = configureStore({
  reducer: {
    searchForm: searchFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
