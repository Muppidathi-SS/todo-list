"use client";

import {
  POP_UP_TASKS,
  UPCOMING_DUMMY_DATA,
} from "@/constants/upcoming-dummy-data";
import { RootState } from "@/store/store";
import { AddCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { useSelector } from "react-redux";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function UpcomingTasks() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
  const activeIndex = days.indexOf("Tue");
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const activeDay = "Tue";

  return (
    <>
      <section className="px-5 py-3 flex flex-col h-full">
        <div className="">
          <div className="space-y-1">
            <h1 className="font-medium text-[24px]">Upcoming Tasks</h1>
            <p className="text-[16px] text-gray-500">September 2026</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-b-gray-400 mt-4 py-2">
          {days.map((day, index) => (
            <div
              key={index}
              className={`px-10 py-1 rounded-lg ${
                index < activeIndex ? "text-gray-300" : "text-black"
              }`}
              style={
                day === activeDay
                  ? {
                      backgroundColor: `${themeColor}4D`,
                      color: themeColor,
                      fontWeight: 500,
                    }
                  : undefined
              }
            >
              {day} 1
            </div>
          ))}
        </div>
        <div className="overflow-hidden w-full flex-1 mt-2">
          <div
            className="flex w-[200%] transition-transform duration-300 ease-in-out"
            style={{
              transform:
                selectedDay === null ? "translateX(0)" : "translateX(-50%)",
            }}
          >
            <div className="w-1/2 shrink-0">
              <div className="flex flex-col">
                {UPCOMING_DUMMY_DATA.filter((day) => !day.isCompleted).map(
                  (day) => (
                    <div
                      key={day.id}
                      className="border-b border-b-gray-500/30 py-3"
                    >
                      <div>
                        <p className="font-medium">{day.dayLabel}</p>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        <div
                          className="w-fit px-3 py-1 rounded-md flex gap-3 justify-center items-center"
                          style={{ backgroundColor: `${themeColor}30` }}
                        >
                          <AddCircle
                            style={{
                              fontSize: 30,
                              color: themeColor,
                            }}
                          />
                          Add Task
                        </div>

                        <button
                          className="px-3 py-1 rounded-md cursor-pointer"
                          style={{
                            backgroundColor: themeColor,
                            color: "white",
                          }}
                          onClick={() => setSelectedDay(day.dayLabel)}
                        >
                          View Tasks
                        </button>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="w-1/2 shrink-0">
              <div>
                <div className="border-b border-b-gray-500/30 py-3">
                  <p className="font-medium text-[20px]">{selectedDay}</p>

                  <p className="text-gray-500 mt-2">
                    You clicked {selectedDay} View Tasks
                  </p>

                  <button
                    className="px-3 py-1 rounded-md mt-4 cursor-pointer "
                    style={{
                      backgroundColor: themeColor,
                      color: "white",
                    }}
                    onClick={() => setSelectedDay(null)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
