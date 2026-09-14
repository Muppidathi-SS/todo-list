"use client";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import {
  customMenuStyles,
  customDateSelectStyles,
} from "@/styles/customStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import {
  CalendarMonth,
  CalendarViewMonth,
  CalendarViewWeek,
} from "@mui/icons-material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
const CALENDAR_VIEWS = ["Month", "Day"];

export default function CalendarHeader() {
  const [view, setView] = useState("Month");
  const handleCalendarViewsChange = (event: SelectChangeEvent) => {
    setView(event.target.value);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="border border-gray-400 rounded-full h-10 w-10 flex justify-center items-center">
            <ArrowBackIosOutlinedIcon sx={{ color: "gray" }} />
          </button>
          <h1 className="font-medium text-[24px]"> September 2026</h1>
          <button className="border border-gray-400 rounded-full h-10 w-10 flex justify-center items-center">
            <ArrowForwardIosOutlinedIcon sx={{ color: "gray" }} />
          </button>
          <div className="flex items-center gap-1 rounded-full border border-[var(--theme-color)]/20 bg-[var(--theme-color)]/10 px-2 py-1 text-xs font-medium text-[var(--theme-color)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-color)]" />
            <span>Today</span>
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <Select
              value={view}
              onChange={handleCalendarViewsChange}
              IconComponent={KeyboardArrowDownIcon}
              sx={customDateSelectStyles}
              MenuProps={{
                sx: customMenuStyles,
              }}
            >
              {CALENDAR_VIEWS.map((view, index) => (
                <MenuItem key={index} value={view}>
                  <div className="flex justify-start items-center gap-2">
                    <CalendarMonth sx={{ fontSize: 20 }} />
                    {view}
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <button className="border border-gray-400 rounded-full h-10 w-10 flex justify-center items-center">
            <FilterAltOutlinedIcon sx={{ color: "gray" }} />
          </button>
          <button className="border border-gray-400 rounded-full h-10 w-10 flex justify-center items-center">
            <SearchOutlinedIcon sx={{ color: "gray" }} />
          </button>{" "}
        </div>
      </div>
    </>
  );
}
