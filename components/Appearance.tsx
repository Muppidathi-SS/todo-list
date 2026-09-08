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
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    borderRadius: "12px",
                    color: "#1f2937",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e5e7eb",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                      borderWidth: "1px",
                    },
                    "& .MuiSelect-icon": {
                      color: "#6b7280",
                      transition: "0.2s",
                    },
                  }}
                  MenuProps={{
                    sx: {
                      "& .MuiPaper-root": {
                        borderRadius: "12px",
                        mt: 1,
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        "& .MuiList-root": {
                          padding: 0,
                        },
                        "& .MuiMenuItem-root": {
                          fontFamily: "var(--font-poppins)",
                        },
                      },
                    },
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
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    borderRadius: "12px",
                    color: "#1f2937",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e5e7eb",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                      borderWidth: "1px",
                    },
                    "& .MuiSelect-icon": {
                      color: "#6b7280",
                      transition: "0.2s",
                    },
                  }}
                  MenuProps={{
                    sx: {
                      "& .MuiPaper-root": {
                        borderRadius: "12px",
                        padding: 0,
                        mt: 1,
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        "& .MuiList-root": {
                          padding: 0,
                        },
                        "& .MuiMenuItem-root": {
                          fontFamily: "var(--font-poppins)",
                        },
                      },
                    },
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
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    borderRadius: "12px",
                    color: "#1f2937",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e5e7eb",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                      borderWidth: "1px",
                    },
                    "& .MuiSelect-icon": {
                      color: "#6b7280",
                      transition: "0.2s",
                    },
                  }}
                  MenuProps={{
                    sx: {
                      "& .MuiPaper-root": {
                        borderRadius: "12px",
                        padding: 0,
                        mt: 1,
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        "& .MuiList-root": {
                          padding: 0,
                        },
                        "& .MuiMenuItem-root": {
                          fontFamily: "var(--font-poppins)",
                        },
                      },
                    },
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
                sx={{
                  width: 46,
                  height: 28,
                  padding: 0,

                  "& .MuiSwitch-switchBase": {
                    padding: 0,
                    margin: "2px",
                    transition: "transform 200ms ease",

                    // OFF state
                    "& + .MuiSwitch-track": {
                      backgroundColor: "#D1D5DB",
                      opacity: 1,
                    },

                    // ON state
                    "&.Mui-checked": {
                      transform: "translateX(16px)",
                      color: "#FFFFFF",

                      "& + .MuiSwitch-track": {
                        backgroundColor: "#8BC34A",
                        opacity: 1,
                      },
                    },

                    // Disabled state
                    "&.Mui-disabled": {
                      color: "#9CA3AF",

                      "& + .MuiSwitch-track": {
                        opacity: 0.4,
                      },
                    },
                  },

                  // Circle
                  "& .MuiSwitch-thumb": {
                    width: 24,
                    height: 24,
                    boxSizing: "border-box",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.25)",
                  },

                  // Background/track
                  "& .MuiSwitch-track": {
                    borderRadius: "14px",
                    backgroundColor: "#39393D",
                    opacity: 1,
                    transition: "background-color 200ms ease",
                  },
                }}
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
