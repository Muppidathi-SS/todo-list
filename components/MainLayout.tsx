"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { StoreProvider } from "@/store/StoreProvider";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Temporary authentication flag (defaulting to true as requested; future auth functionality can be connected here)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    // If not logged in and navigating to non-auth pages, redirect to /login
    if (!isLoggedIn && !isAuthPage) {
      router.push("/login");
    }
  }, [isLoggedIn, isAuthPage, router]);

  // If user is not logged in or is on an auth page (login/register), render without the sidebar
  if (!isLoggedIn || isAuthPage) {
    return <StoreProvider>{children}</StoreProvider>;
  }

  // When isLoggedIn is true, show the full application layout with Sidebar
  return (
    <StoreProvider>
      <div className="h-screen w-full flex bg-zinc-50 dark:bg-black">
        <div className="px-2 py-3 h-full w-1/4 bg-[#fcfaf8] transition-all duration-300 flex flex-col items-start border-r border-gray-200 dark:border-zinc-800">
          <Sidebar />
        </div>
        <div className="h-full flex-1 bg-white dark:bg-zinc-900 overflow-y-auto">
          {children}
        </div>
      </div>
    </StoreProvider>
  );
}

export { MainLayout as AppLayout };
