"use client";

import { RootState } from "@/store/store";
import { AddCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import ShowTodos from "./ShowTodos";
import NotFound from "./NotFound";

export default function AddBar() {
  const session = useSelector((state: RootState) => state.session);
  const [showTasks, setShowtasks] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    let task = { id: session.id, taskName: taskName };
    console.log("TASk: ", task);
    setTaskName("");
  };

  const fetchTodos = async () => {
    console.log("ID", session.id);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/todos/${session.id}`,
    );

    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    if (session.id) {
      fetchTodos();
    }
  }, [session.id]);

  return (
    <>
      <div className="flex flex-col justify-start items-center py-5 h-full">
        <h2
          className="font-medium text-3xl"
          style={{ color: "var(--theme-color)" }}
        >
          Hi,{" "}
          <TypeAnimation
            sequence={[session.name || "Aadhi", 1000, "", 500]}
            speed={10}
            repeat={Infinity}
            cursor={true}
          />
        </h2>
        <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg w-[92%] sm:w-[85%] md:w-200 max-w-full px-3 pl-5 mt-8">
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="py-4 focus:outline-none focus:border-none w-full"
            type="text"
            placeholder="Add Task Here...."
          />
          <button onClick={handleAddTask} className="cursor-pointer">
            <AddCircle
              style={{
                fontSize: 40,
                color: "var(--theme-color)",
              }}
            />
          </button>
        </div>

        {showTasks ? <NotFound /> : <ShowTodos />}
      </div>
    </>
  );
}
