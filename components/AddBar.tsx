"use client";

import NotFoundIcon from "@/public/icons/NotfoundIcon";
import { RootState } from "@/store/store";
import { AddCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";

export default function AddBar() {
  const themeColor = useSelector((state: RootState) => state.theme.themeColor);

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
        <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg w-250 px-3 pl-5 mt-8">
          <input
            className="py-4 focus:outline-none focus:border-none w-full"
            type="text"
            placeholder="Add Task Here...."
          />
          <AddCircle
            style={{
              fontSize: 40,
              color: themeColor,
            }}
          />
        </div>

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
      </div>
    </>
  );
}
