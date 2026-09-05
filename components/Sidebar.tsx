"use client";

import { useState, useEffect } from "react";
import { SideTabs } from "@/constants/navigation";
import ColorPaletteModal from "./ColorPaletteModal";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Sidebar() {
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("Search");
  const [themeColor, setThemeColor] = useState<string>("#ff6b4a");

  useEffect(() => {
    const saved = localStorage.getItem("themeColor");
    if (!saved) {
      localStorage.setItem("themeColor", "#ff6b4a");
    } else {
      setThemeColor(saved);
    }
  }, [isColorPaletteOpen]);

  return (
    <>
      <div className="w-full h-full flex flex-col gap-2">
        <div className="w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer">
          <AddCircleIcon
            sx={{
              fontSize: 30,
              color: themeColor,
            }}
          />

          <h1 className="text-xl font-medium" style={{ color: themeColor }}>
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
                      backgroundColor: `${themeColor}30`,
                      color: themeColor,
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
