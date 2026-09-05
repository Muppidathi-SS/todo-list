"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { setThemeColor } from "./slice";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem("themeColor");
    if (saved) {
      store.dispatch(setThemeColor(saved));
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
