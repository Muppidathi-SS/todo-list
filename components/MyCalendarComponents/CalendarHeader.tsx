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
type CalendarHeaderProps = {
  view: string;
  month: string;
  onSelectedNextvMonth: () => void;
  onSelectedPrevMonth: () => void;
  onSelectedHandleViewChange: (event: SelectChangeEvent) => void;
};

export default function CalendarHeader({
  view,
  month,
  onSelectedNextvMonth,
  onSelectedPrevMonth,
  onSelectedHandleViewChange,
}: CalendarHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={onSelectedPrevMonth}
            className="cursor-pointer border border-gray-400 rounded-full h-8 w-8 flex justify-center items-center"
          >
            <ArrowBackIosOutlinedIcon sx={{ color: "gray", fontSize: 14 }} />
          </button>
          <h1 className="font-medium text-[18px] w-[150px] text-center">
            {/* {month} */}
            Sep 23, 2026
          </h1>
          <button
            onClick={onSelectedNextvMonth}
            className="cursor-pointer border border-gray-400 rounded-full h-8 w-8 flex justify-center items-center"
          >
            <ArrowForwardIosOutlinedIcon sx={{ color: "gray", fontSize: 14 }} />
          </button>
          <div className="flex items-center gap-1 rounded-full border border-[var(--theme-color)]/20 bg-[var(--theme-color)]/10 px-2 py-1 text-xs font-medium text-[var(--theme-color)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-color)]" />
            <span>Today</span>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <Select
              value={view}
              onChange={onSelectedHandleViewChange}
              IconComponent={KeyboardArrowDownIcon}
              sx={customDateSelectStyles}
              MenuProps={{
                sx: customMenuStyles,
              }}
            >
              {CALENDAR_VIEWS.map((view, index) => (
                <MenuItem key={index} value={view}>
                  <div className="flex justify-start items-center gap-2 text-[14px]">
                    <CalendarMonth sx={{ fontSize: 18 }} />
                    {view}
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <button className="border border-gray-400 rounded-full h-8 w-8 flex justify-center items-center">
            <FilterAltOutlinedIcon sx={{ color: "gray", fontSize: 14 }} />
          </button>
          <button className="border border-gray-400 rounded-full h-8 w-8 flex justify-center items-center">
            <SearchOutlinedIcon sx={{ color: "gray", fontSize: 14 }} />
          </button>{" "}
        </div>
      </div>
    </>
  );
}
