"use client";

import { useState, useEffect } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TODAY_COMPLETED_TASKS } from "@/constants/dummy-data";

export default function Completed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
  const activeColor = mounted ? themeColor : "#ff6b4a";

  return (
    <div className="flex flex-col justify-start items-center py-10 px-5 h-full w-full">
      <div className="w-full">
        <div className="flex justify-between border-b border-b-gray-500/20 py-2">
          <p className="font-medium text-xl">Today</p>
          <p className="bg-black text-white font-medium flex justify-center items-center rounded-full h-7 w-7">
            3
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {TODAY_COMPLETED_TASKS.map((item) => {
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 mt-3 pb-5 ${
                  item.id !== TODAY_COMPLETED_TASKS.length
                    ? "border-b border-b-gray-500/20"
                    : ""
                }`}
              >
                <div className="relative h-10 w-10">
                  <div className="h-10 w-10 rounded-full bg-red-500 text-white text-[20px] flex justify-center items-center">
                    M
                  </div>

                  <CheckCircleIcon
                    className="absolute -bottom-1 -right-1"
                    sx={{
                      color: "green",
                      fontSize: 18,
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <p>{item.taskName}</p>

                <p className="ml-auto text-gray-500">{item.completedTime}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between border-b border-b-gray-500/20 py-2">
          <p className="font-medium text-xl">Yesterday</p>
          <p className="bg-black text-white font-medium flex justify-center items-center rounded-full h-7 w-7">
            6
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {TODAY_COMPLETED_TASKS.map((item) => {
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 mt-3 pb-5 ${
                  item.id !== TODAY_COMPLETED_TASKS.length
                    ? "border-b border-b-gray-500/20"
                    : ""
                }`}
              >
                <div className="relative h-10 w-10">
                  <div className="h-10 w-10 rounded-full bg-red-500 text-white text-[20px] flex justify-center items-center">
                    M
                  </div>

                  <CheckCircleIcon
                    className="absolute -bottom-1 -right-1"
                    sx={{
                      color: "green",
                      fontSize: 18,
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <p>{item.taskName}</p>

                <p className="ml-auto text-gray-500">{item.completedTime}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between border-b border-b-gray-500/20 py-2">
          <p className="font-medium text-xl">Sep 3, Saturday</p>
          <p className="bg-black text-white font-medium flex justify-center items-center rounded-full h-7 w-7">
            4
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {TODAY_COMPLETED_TASKS.map((item) => {
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 mt-3 pb-5 ${
                  item.id !== TODAY_COMPLETED_TASKS.length
                    ? "border-b border-b-gray-500/20"
                    : ""
                }`}
              >
                <div className="relative h-10 w-10">
                  <div className="h-10 w-10 rounded-full bg-red-500 text-white text-[20px] flex justify-center items-center">
                    M
                  </div>

                  <CheckCircleIcon
                    className="absolute -bottom-1 -right-1"
                    sx={{
                      color: "green",
                      fontSize: 18,
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <p>{item.taskName}</p>

                <p className="ml-auto text-gray-500">{item.completedTime}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
