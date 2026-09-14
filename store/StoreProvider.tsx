"use client";

import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "./store";
import { setThemeColor } from "./slice";
import { setSession, clearSession } from "./sessionSlice";
import { getStoredSession, clearStoredSession } from "@/utils/session";

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

    const session = getStoredSession();
    if (session) {
      store.dispatch(
        setSession({
          id: session.id,
          name: session.name,
          email: session.email,
          token: session.token,
        }),
      );

      const remainingTime = session.expiresAt - Date.now();
      if (remainingTime > 0) {
        const timer = setTimeout(() => {
          clearStoredSession();
          store.dispatch(clearSession());
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        }, remainingTime);

        return () => clearTimeout(timer);
      } else {
        clearStoredSession();
        store.dispatch(clearSession());
      }
    } else {
      clearStoredSession();
      store.dispatch(clearSession());
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeSetter />
      {children}
    </Provider>
  );
}
