"use client";

import NotFoundIcon from "@/public/icons/NotfoundIcon";
import { RootState } from "@/store/store";
import { AddCircle } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function AddBar() {
  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
  const [checkedTaskIds, setCheckedTaskIds] = useState<(number | string)[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const toggleTaskCheck = (id: number | string) => {
    setCheckedTaskIds((prev) =>
      prev.includes(id)
        ? prev.filter((taskId) => taskId !== id)
        : [...prev, id],
    );
  };

  const handleAdd = () => {
    if (!taskName.trim()) return;
    setTasks((prev) => [...prev, taskName.trim()]);
    setTaskName("");
  };

  const handleDrop = (targetIndex: number) => {
    if (dragIndex === null || dragIndex === targetIndex) return;
    setTasks((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(dragIndex, 1);
      updated.splice(targetIndex, 0, moved);
      return updated;
    });
    setDragIndex(null);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center py-5 h-full">
        <h2 className="font-medium text-3xl" style={{ color: themeColor }}>
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
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd();
            }}
            className="py-4 focus:outline-none focus:border-none w-full"
            type="text"
            placeholder="Add Task Here...."
          />
          <button onClick={handleAdd} className="cursor-pointer">
            <AddCircle
              style={{
                fontSize: 40,
                color: themeColor,
              }}
            />
          </button>
        </div>

        {tasks.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-2 mt-50">
            <NotFoundIcon color={themeColor} />
            <h2 className="font-medium text-3xl" style={{ color: themeColor }}>
              No Tasks Added Today, Aadhi!
            </h2>
            <p style={{ color: `${themeColor}CC` }}>
              you haven't added any tasks for today. Add a new task to get
              started.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4 gap-5">
            <h2 className="font-medium text-3xl" style={{ color: themeColor }}>
              Today
            </h2>
            {tasks.map((task, index) => {
              const isChecked = checkedTaskIds.includes(index);

              return (
                <div
                  key={index}
                  draggable
                  onDragStart={() => setDragIndex(index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(index)}
                  className={`w-250 flex gap-3 px-5 py-4 rounded-xl border border-gray-300/20 shadow cursor-pointer transition-opacity ${
                    dragIndex === index ? "opacity-40" : ""
                  }`}
                >
                  <div
                    onClick={() => toggleTaskCheck(index)}
                    className="cursor-pointer"
                  >
                    {isChecked ? (
                      <CheckCircleIcon sx={{ color: "green" }} />
                    ) : (
                      <RadioButtonUncheckedIcon sx={{ color: "gray" }} />
                    )}
                  </div>

                  <p
                    className={`font-normal text-[18px] ${
                      isChecked ? "text-gray-400" : ""
                    }`}
                  >
                    {task}
                  </p>

                  <p className="ml-auto text-gray-500">Just Now</p>
                  <DragIndicatorIcon />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
