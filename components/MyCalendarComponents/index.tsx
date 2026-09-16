"use client";
import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarMonthView from "./CalendarMonthView";
import { SelectChangeEvent } from "@mui/material";
const CALENDAR_VIEWS = ["Month", "Day"];
export default function MyCalendar() {
  const [view, setView] = useState("Month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const todayDate = currentDate.getDate();
  const [selectedMonth, setSelectedMonth] = useState(
    currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    }),
  );
  console.log(currentDate);

  const handleCalendarViewsChange = (event: SelectChangeEvent) => {
    setView(event.target.value);
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setMonth(nextDate.getMonth() + 1);
      setSelectedMonth(
        nextDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        }),
      );
      return nextDate;
    });
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const previousDate = new Date(prevDate);
      previousDate.setMonth(previousDate.getMonth() - 1);
      setSelectedMonth(
        previousDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        }),
      );
      return previousDate;
    });
  };

  return (
    <section className="h-full w-full flex flex-col gap-2 overflow-hidden">
      <div className="w-full shrink-0">
        <CalendarHeader
          view={view}
          month={selectedMonth}
          onSelectedNextvMonth={handleNextMonth}
          onSelectedPrevMonth={handlePreviousMonth}
          onSelectedHandleViewChange={handleCalendarViewsChange}
        />
      </div>

      <div className="w-full flex-1 min-h-0">
        <CalendarMonthView selectedMonth={selectedMonth} todayDate={todayDate}/>
      </div>
    </section>
  );
}
