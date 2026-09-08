"use client";

import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  customMenuStyles,
  customSelectStyles,
  customSwitchStyles,
} from "@/styles/customStyles";

const languages = ["English", "Hindi"];

const themes = ["Light", "Dark"];

const colors = ["#1b443c", "#1c2894", "#047e7e", "#5f0202"];

export default function Appearance() {
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");
  const [color, setColor] = useState("#1b443c");
  const [enabled, setEnabled] = useState(false);

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const handleThemeChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value);
  };

  const handleColorChange = (event: SelectChangeEvent) => {
    setColor(event.target.value);
  };

  return (
    <>
      <section className="px-5 py-3 flex flex-col justify-between h-full">
        <div className="">
          <div className="space-y-1">
            <h1 className="font-medium text-[24px]">Appearance</h1>
            <p className="text-[16px] text-gray-500">
              Set your customise your preference thems
            </p>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="space-y-1">
              <h3 className="font-normal text-[18px]">Language</h3>
              <p className="text-gray-500 font-light text-[15px]">
                Select the language of the platform
              </p>
            </div>
            <div className="">
              <FormControl size="small" sx={{ minWidth: 160 }}>
                <Select
                  value={language}
                  onChange={handleLanguageChange}
                  IconComponent={KeyboardArrowDownIcon}
                  sx={customSelectStyles}
                  MenuProps={{
                    sx: customMenuStyles,
                  }}
                >
                  {languages.map((lang) => (
                    <MenuItem key={lang} value={lang}>
                      {lang}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="space-y-1">
              <h3 className="font-normal text-[18px]">Theme</h3>
              <p className="text-gray-500 font-light text-[15px]">
                Select the theme of the platform
              </p>
            </div>
            <div className="">
              <FormControl size="small" sx={{ minWidth: 160 }}>
                <Select
                  value={theme}
                  onChange={handleThemeChange}
                  IconComponent={KeyboardArrowDownIcon}
                  sx={customSelectStyles}
                  MenuProps={{
                    sx: customMenuStyles,
                  }}
                >
                  {themes.map((themse) => (
                    <MenuItem key={themse} value={themse}>
                      {themse}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="space-y-1">
              <h3 className="font-normal text-[18px]">Color</h3>
              <p className="text-gray-500 font-light text-[15px]">
                Select the color of the platform
              </p>
            </div>
            <div className="">
              <FormControl size="small" sx={{ minWidth: 60 }}>
                <Select
                  value={color}
                  onChange={handleColorChange}
                  IconComponent={KeyboardArrowDownIcon}
                  sx={customSelectStyles}
                  MenuProps={{
                    sx: customMenuStyles,
                  }}
                >
                  {colors.map((color) => (
                    <MenuItem key={color} value={color}>
                      <div
                        className="h-6 w-6 mr-4 rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="space-y-1">
              <h3 className="font-normal text-[18px]">Custom Color</h3>
              <p className="text-gray-500 font-light text-[15px]">
                Select the custom color from the palette
              </p>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={(event) => setEnabled(event.target.checked)}
                sx={customSwitchStyles}
              />
            </div>
            {/* <div className="w-50">
              <ColorPaletteModal />
            </div> */}
          </div>
        </div>
        <div className="space-x-2 flex justify-end mt-6">
          <button className="px-4 py-2 rounded-lg border border-black">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg border border-black bg-black text-white">
            Save Changes
          </button>
        </div>
      </section>
    </>
  );
}
