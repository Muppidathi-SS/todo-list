"use client";

import AddBar from "@/components/AddBar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen w-full flex bg-zinc-50 dark:bg-black">
      <div className="px-2 py-3 h-full w-1/4 bg-[#fcfaf8] transition-all duration-300 flex flex-col items-start">
        <Sidebar />
      </div>
      <div className="h-full flex-1 bg-white">
        <AddBar />
      </div>
    </div>
  );
}
