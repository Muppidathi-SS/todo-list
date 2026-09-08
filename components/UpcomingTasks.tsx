"use client";
import { UPCOMING_DUMMY_DATA } from "@/constants/upcoming-dummy-data";
import { RootState } from "@/store/store";
import { AddCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { useSelector } from "react-redux";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function UpcomingTasks() {
  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
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
          {days.map((day) => (
            <div
              key={day}
              className={`px-10 py-1 rounded-lg ${
                day === activeDay ? "" : "text-gray-500"
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
        <div className="mt-2 flex flex-col">
          {UPCOMING_DUMMY_DATA.filter((day) => !day.isCompleted).map((day) => (
            <div key={day.id} className="border-b border-b-gray-500/30 py-3">
              <div>
                <p className="font-medium">{day.dayLabel}</p>
              </div>
              <div>
                {day.upcomingTasks?.map((task, index) => (
                  <div
                    key={index}
                    className="flex gap-3 py-3 cursor-pointer transition-opacity"
                  >
                    <div className="cursor-pointer">
                      {task.isCompleted ? (
                        <CheckCircleIcon sx={{ color: "orange" }} />
                      ) : (
                        <RadioButtonUncheckedIcon sx={{ color: "gray" }} />
                      )}
                    </div>
                    <p className="font-normal text-[18px]">{task.taskName}</p>
                  </div>
                ))}
              </div>
              <div
                className="w-fit px-3 py-1 rounded-md flex gap-3 justify-center items-center mt-3"
                style={{ backgroundColor: `${themeColor}30` }}
              >
                <AddCircle
                  style={{
                    fontSize: 30,
                    color: themeColor,
                  }}
                />{" "}
                Add Task
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
