import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./slice";
import sessionReducer from "./sessionSlice";

export const store = configureStore({
  reducer: {
    theme: storeReducer,
    session: sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
