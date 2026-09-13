"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { RootState } from "@/store/store";
import { clearSession } from "@/store/sessionSlice";
import { clearStoredSession } from "@/utils/session";
import { SideTabs, SideTabItem } from "@/constants/navigation";
import LogoutIcon from "@mui/icons-material/Logout";

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps = {}) {
  const [openPopup, setOpenPopup] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
  const session = useSelector((state: RootState) => state.session);

  useEffect(() => {
    setMounted(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserName(user.userName || user.name || "");
      } catch (e) {}
    }
  }, []);

  const handleTabClick = (item: SideTabItem) => {
    if (item.path) {
      router.push(item.path);
      onNavigate?.();
    }
  };

  const handleLogout = () => {
    clearStoredSession();
    dispatch(clearSession());
    onNavigate?.();
    router.push("/login");
  };

  return (
    <>
      <div className="w-full h-full flex justify-between flex-col gap-2">
        <div className="flex flex-col gap-1 w-full">
          {SideTabs.map((item) => {
            const Icon = item.icon;
            const isSelected = item.path ? pathname === item.path : false;

            return (
              <div
                key={item.label}
                onClick={() => handleTabClick(item)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-transparent font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
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
        <div className="w-full flex items-center justify-between pt-4 border-t border-gray-200/60 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 uppercase rounded-full text-[22px] flex justify-center items-center font-medium shadow-sm"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--theme-color) 19%, transparent)",
                color: "var(--theme-color)",
              }}
            >
              {session.name || userName
                ? (session.name || userName).charAt(0)
                : "U"}
            </div>
            <span className="text-[17px] font-medium truncate max-w-[120px]">
              {session.name || userName || "User"}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpenPopup(true)}
            className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:text-red-500 transition"
            title="Logout"
          >
            <LogoutIcon fontSize="small" />
          </button>
        </div>
      </div>
      {openPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <h2 className="text-lg font-medium mb-3">Logout</h2>
            <p className="text-gray-500 mb-6">
              Are you sure you want to Logout
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenPopup(false)}
                className="px-4 py-2 rounded-md border border-gray-300 cursor-pointer"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md text-white cursor-pointer"
                style={{ backgroundColor: "var(--theme-color)" }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
