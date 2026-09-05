import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./slice";

export const store = configureStore({
  reducer: {
    theme: storeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
