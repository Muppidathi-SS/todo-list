"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { StoreProvider } from "@/store/StoreProvider";
import Sidebar from "@/components/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/" || pathname === "/login" || pathname === "/register";

  useEffect(() => {
    if (!isLoggedIn && !isAuthPage) {
      router.push("/login");
    }
  }, [isLoggedIn, isAuthPage, router]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserName(user.userName || "");
        setUserEmail(user.userEmail || "");
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProfileOpen(false);
  }, [pathname]);

  if (!isLoggedIn || isAuthPage) {
    return <StoreProvider>{children}</StoreProvider>;
  }

  const handleLogout = () => {
    setProfileOpen(false);
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleSignUp = () => {
    setProfileOpen(false);
    router.push("/register");
  };

  return (
    <StoreProvider>
      <div className="h-screen w-full flex flex-col md:flex-row bg-zinc-50 dark:bg-black overflow-hidden">
        <header className="flex md:hidden items-center justify-between px-4 py-3 bg-[#fcfaf8] dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 z-30 shrink-0">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="p-1.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition cursor-pointer"
          >
            <MenuIcon style={{ fontSize: 28 }} />
          </button>

          <span
            className="font-semibold text-lg"
            style={{ color: "var(--theme-color)" }}
          >
            Todo App
          </span>

          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen((prev) => !prev)}
              aria-label="Toggle profile menu"
              className="flex items-center gap-2 cursor-pointer focus:outline-none"
            >
              <div
                className="h-9 w-9 uppercase rounded-full text-[16px] flex justify-center items-center font-semibold shadow-sm"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-color) 19%, transparent)",
                  color: "var(--theme-color)",
                }}
              >
                {userName ? userName.charAt(0) : "U"}
              </div>
            </button>

            {profileOpen && (
              <>
                <div
                  onClick={() => setProfileOpen(false)}
                  className="fixed inset-0 z-40"
                />
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl z-50 p-3 flex flex-col gap-2">
                  <div className="flex items-center gap-3 pb-2 border-b border-gray-100 dark:border-zinc-700">
                    <div
                      className="h-9 w-9 uppercase rounded-full text-[16px] flex justify-center items-center font-semibold"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--theme-color) 19%, transparent)",
                        color: "var(--theme-color)",
                      }}
                    >
                      {userName ? userName.charAt(0) : "U"}
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-medium text-sm text-gray-900 dark:text-white truncate">
                        {userName || "User"}
                      </span>
                      <span className="text-xs text-gray-500 truncate">
                        {userEmail || "Account"}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSignUp}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition"
                  >
                    <PersonAddIcon fontSize="small" />
                    <span>Sign Up</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg cursor-pointer transition"
                  >
                    <LogoutIcon fontSize="small" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </header>

        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            />
            <div className="fixed inset-y-0 left-0 w-72 max-w-[82vw] bg-[#fcfaf8] dark:bg-zinc-900 shadow-2xl z-50 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-200 dark:border-zinc-800">
                <span
                  className="font-semibold text-lg"
                  style={{ color: "var(--theme-color)" }}
                >
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800 transition cursor-pointer"
                  aria-label="Close menu"
                >
                  <CloseIcon fontSize="small" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <Sidebar onNavigate={() => setMobileOpen(false)} />
              </div>
            </div>
          </div>
        )}

        <aside className="hidden md:flex px-2 py-3 h-full md:w-64 lg:w-72 bg-[#fcfaf8] transition-all duration-300 flex-col items-start border-r border-gray-200 dark:border-zinc-800 shrink-0">
          <Sidebar />
        </aside>

        <main className="h-full flex-1 bg-white dark:bg-zinc-900 overflow-y-auto">
          {children}
        </main>
      </div>
    </StoreProvider>
  );
}

export { MainLayout as AppLayout };
