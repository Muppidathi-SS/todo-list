"use client";

import { useState } from "react";
import { SideTabs } from "@/constants/navigation";
import ColorPaletteModal from "./ColorPaletteModal";

export default function Sidebar() {
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("Search");

  return (
    <>
      <div className="w-full h-full flex flex-col gap-2">
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
                isSelected
                  ? "bg-red-200/30 text-red-600"
                  : "bg-transparent text-gray-700"
              }`}
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
