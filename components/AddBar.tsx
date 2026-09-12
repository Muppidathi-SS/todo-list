"use client";

import NotFoundIcon from "@/public/icons/NotfoundIcon";
import { RootState } from "@/store/store";
import { AddCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { TODAY_TASKS } from "@/constants/dummy-data";
import { useState } from "react";

export default function AddBar() {
  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
  const [showTasks, setShowtasks] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-start items-center py-5 h-full">
        <h2
          className="font-medium text-3xl"
          style={{ color: "var(--theme-color)" }}
        >
          Hi,{" "}
          <TypeAnimation
            sequence={["Aadhi", 1000, "", 500]}
            speed={10}
            repeat={Infinity}
            cursor={true}
          />
        </h2>
        <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg w-200 px-3 pl-5 mt-8">
          <input
            className="py-4 focus:outline-none focus:border-none w-full"
            type="text"
            placeholder="Add Task Here...."
          />
          <button
            onClick={() => setShowtasks((pre) => !pre)}
            className="cursor-pointer"
          >
            <AddCircle
              style={{
                fontSize: 40,
                color: "var(--theme-color)",
              }}
            />
          </button>
        </div>

        {showTasks ? (
          <div className="flex flex-col justify-center items-center gap-2 mt-50">
            <NotFoundIcon color={themeColor} />
            <h2
              className="font-medium text-3xl"
              style={{ color: "var(--theme-color)" }}
            >
              No Tasks Added Today, Aadhi!
            </h2>
            <p
              style={{
                color: "color-mix(in srgb, var(--theme-color) 80%, transparent)",
              }}
            >
              you haven't added any tasks for today. Add a new task to get
              started.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4 gap-5">
            <h2
              className="font-medium text-3xl"
              style={{ color: "var(--theme-color)" }}
            >
              Today
            </h2>
            {TODAY_TASKS.map((task, index) => {
              return (
                <div
                  key={index}
                  className="w-250 flex gap-3 px-5 py-4 rounded-xl border border-gray-300/20 shadow cursor-pointer transition-opacity"
                >
                  <div className="cursor-pointer">
                    {task.isChecked ? (
                      <CheckCircleIcon sx={{ color: "green" }} />
                    ) : (
                      <RadioButtonUncheckedIcon sx={{ color: "gray" }} />
                    )}
                  </div>

                  <p
                    className={`font-normal text-[18px] ${
                      task.isChecked ? "text-gray-400" : ""
                    }`}
                  >
                    {task.taskName}
                  </p>
                  <p className="ml-auto text-gray-500">{task.completedTime}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
