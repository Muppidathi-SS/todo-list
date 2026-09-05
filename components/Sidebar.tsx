"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SideTabs } from "@/constants/navigation";
import ColorPaletteModal from "./ColorPaletteModal";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Sidebar() {
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("Search");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
  const activeColor = mounted ? themeColor : "#ff6b4a";

  return (
    <>
      <div className="w-full h-full flex flex-col gap-2">
        <div className="w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer">
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
          const isSelected = selectedTab === item.label;
          return (
            <div
              key={item.label}
              onClick={() => {
                setSelectedTab(item.label);
                if (item.label === "Appearance") setIsColorPaletteOpen(true);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${
                isSelected ? "bg-transparent" : "text-gray-700"
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
      <ColorPaletteModal
        isOpen={isColorPaletteOpen}
        onClose={() => setIsColorPaletteOpen(false)}
      />
    </>
  );
}
