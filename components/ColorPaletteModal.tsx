"use client";

import { useState, useEffect } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

interface ColorPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectColor?: (color: string) => void;
}

export default function ColorPaletteModal({
  isOpen,
  onClose,
  onSelectColor,
}: ColorPaletteModalProps) {
  const [color, setColor] = useState<string>("#ff6b4a");

  useEffect(() => {
    if (isOpen) {
      const savedColor = localStorage.getItem("themeColor") || "#ff6b4a";
      setColor(savedColor);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOkay = () => {
    localStorage.setItem("themeColor", color);
    console.log("Selected Color:", color);
    if (onSelectColor) {
      onSelectColor(color);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800 w-full max-w-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
            Color Palette
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 cursor-pointer text-xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="p-5 flex flex-col items-center gap-5">
          <div className="w-full flex justify-center [&_.react-colorful]:w-full [&_.react-colorful]:h-48">
            <HexColorPicker color={color} onChange={setColor} />
          </div>
          <div className="w-full flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg border border-gray-300 dark:border-zinc-700 shrink-0"
              style={{ backgroundColor: color }}
            />
            <div className="flex-1 flex items-center gap-2 border border-gray-300 dark:border-zinc-700 rounded-md px-3 py-1.5 bg-gray-50 dark:bg-zinc-800">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                Hex:
              </span>
              <HexColorInput
                color={color}
                onChange={setColor}
                prefixed
                className="w-full bg-transparent font-mono text-sm font-medium text-gray-800 dark:text-gray-200 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="px-5 py-3.5 bg-gray-50 dark:bg-zinc-800/50 border-t border-gray-100 dark:border-zinc-800 flex justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-zinc-700 rounded-md cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleOkay}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md cursor-pointer"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
