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

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    dispatch(setThemeColor(newColor));
  };

  if (!mounted) {
    return (
      <div className="flex flex-col h-full w-full">
        <div className="w-full flex justify-center h-56 rounded-lg bg-gray-100 dark:bg-zinc-800" />
        <div className="flex items-end justify-end gap-2 mt-2 border border-gray-300 dark:border-zinc-600 rounded-md px-3 py-2 bg-gray-50 dark:bg-zinc-700 h-10" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="w-full flex justify-center [&_.react-colorful]:w-full [&_.react-colorful]:h-56">
        <HexColorPicker color={color} onChange={handleColorChange} />
      </div>
      <div className=" flex items-end justify-end gap-2 mt-2 border border-gray-300 dark:border-zinc-600 rounded-md px-3 py-2 bg-gray-50 dark:bg-zinc-700">
        <div
          className="w-6 h-6 rounded-full border border-gray-300 dark:border-zinc-600 shadow-sm"
          style={{ backgroundColor: color }}
        />
        <HexColorInput
          color={color}
          onChange={handleColorChange}
          prefixed
          className="bg-transparent font-mono text-base w-30 font-medium text-gray-800 dark:text-gray-100 outline-none"
        />
      </div>
    </div>
  );
}
