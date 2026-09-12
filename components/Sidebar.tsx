"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { RootState } from "@/store/store";
import { SideTabs, SideTabItem } from "@/constants/navigation";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const themeColor = useSelector((state: RootState) => state.theme.themeColor);

  useEffect(() => {
    setMounted(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.userName || "");
    }
  }, []);

  const handleTabClick = (item: SideTabItem) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <div className="w-full h-full flex justify-between flex-col gap-2">
      <div>
        {SideTabs.map((item) => {
          const Icon = item.icon;
          const isSelected = item.path
            ? pathname === item.path ||
              (pathname === "/" && item.path === "/today")
            : false;

          return (
            <div
              key={item.label}
              onClick={() => handleTabClick(item)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${
                isSelected
                  ? "bg-transparent"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              style={
                isSelected
                  ? {
                      backgroundColor:
                        "color-mix(in srgb, var(--theme-color) 19%, transparent)",
                      color: "var(--theme-color)",
                    }
                  : undefined
              }
            >
              <Icon fontSize="small" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex justify-center items-center gap-3">
          <div className="h-10 w-10 uppercase rounded-full bg-red-500 text-white text-[21px] flex justify-center items-center">
            {userName.charAt(0)}
          </div>
          <span className="text-[18px]">{userName}</span>
        </div>
        <button
          onClick={() => router.push("/login")}
          className="cursor-pointer hover:opacity-75 transition-opacity"
          title="Logout"
        >
          <LogoutIcon />{" "}
        </button>
      </div>
    </div>
  );
}
