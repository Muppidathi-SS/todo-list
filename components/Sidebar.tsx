"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { RootState } from "@/store/store";
import { SideTabs, SideTabItem } from "@/constants/navigation";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
  const activeColor = mounted ? themeColor : "#ff6b4a";

  const handleTabClick = (item: SideTabItem) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div
        onClick={() => router.push("/today")}
        className="w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer"
      >
        <AddCircleIcon
          style={{
            fontSize: 30,
            color: activeColor,
          }}
        />

        <h1 className="text-xl font-medium" style={{ color: activeColor }}>
          Add Task
        </h1>
      </div>
      {SideTabs.map((item) => {
        const Icon = item.icon;
        const isSelected = item.path
          ? pathname === item.path || (pathname === "/" && item.path === "/today")
          : false;

        return (
          <div
            key={item.label}
            onClick={() => handleTabClick(item)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${
              isSelected ? "bg-transparent" : "text-gray-700 dark:text-gray-300"
            }`}
            style={
              isSelected
                ? {
                    backgroundColor: `${activeColor}30`,
                    color: activeColor,
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
  );
}
