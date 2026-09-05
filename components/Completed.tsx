"use client";

import { useState, useEffect } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { LibraryAddCheckOutlined } from "@mui/icons-material";

export default function Completed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeColor = useSelector((state: RootState) => state.theme.themeColor);
  const activeColor = mounted ? themeColor : "#ff6b4a";

  return (
    <div className="flex flex-col justify-start items-center py-10 h-full">
      <h2 className="font-bold text-3xl mb-6" style={{ color: activeColor }}>
        Completed Tasks
      </h2>

      <div className="flex flex-col justify-center items-center gap-3 mt-38">
        <LibraryAddCheckOutlined />
        <h3 className="font-medium text-2xl" style={{ color: activeColor }}>
          No Completed Tasks Yet!
        </h3>
        <p className="text-gray-500 text-sm">
          Tasks you complete will show up here.
        </p>
      </div>
    </div>
  );
}
