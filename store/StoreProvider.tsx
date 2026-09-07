"use client";

import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "./store";
import { setThemeColor } from "./slice";

function ThemeSetter() {
  const themeColor = useSelector((state: RootState) => state.theme.themeColor);

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", themeColor);
  }, [themeColor]);

  return null;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem("themeColor");
    if (saved) {
      store.dispatch(setThemeColor(saved));
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeSetter />
      {children}
    </Provider>
  );
}
