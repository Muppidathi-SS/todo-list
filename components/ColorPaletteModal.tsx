"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setThemeColor } from "@/store/slice";
import { HexColorPicker, HexColorInput } from "react-colorful";

export default function ColorPaletteModal() {
  const dispatch = useDispatch();
  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
  const [color, setColor] = useState<string>(themeColor);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setColor(themeColor);
  }, [themeColor]);

  const activeColor = mounted ? themeColor : "#ff6b4a";

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    dispatch(setThemeColor(newColor));
  };

  return (
    <div className="flex flex-col justify-start items-center py-10 h-full w-full">
      <h2 className="font-bold text-3xl mb-8" style={{ color: activeColor }}>
        Appearance Settings
      </h2>
      <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-8 shadow-md flex flex-col items-center gap-6 w-full max-w-md">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Choose Theme Color
        </h3>
        <div className="w-full flex justify-center [&_.react-colorful]:w-full [&_.react-colorful]:h-56">
          <HexColorPicker color={color} onChange={handleColorChange} />
        </div>
        <div className="w-full flex items-center gap-4 pt-2">
          <div
            className="w-12 h-12 rounded-lg border border-gray-300 dark:border-zinc-600 shadow-sm shrink-0"
            style={{ backgroundColor: color }}
          />
          <div className="flex-1 flex items-center gap-2 border border-gray-300 dark:border-zinc-600 rounded-md px-3 py-2 bg-gray-50 dark:bg-zinc-700">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">
              Hex:
            </span>
            <HexColorInput
              color={color}
              onChange={handleColorChange}
              prefixed
              className="w-full bg-transparent font-mono text-base font-medium text-gray-800 dark:text-gray-100 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
