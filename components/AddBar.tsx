"use client";

import { RootState } from "@/store/store";
import { AddCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import ShowTodos from "./ShowTodos";
import NotFound from "./NotFound";
import { Todos, TODOS_EMPTY } from "@/services/todos/todos.type";
import { addTodo, getTodos } from "@/services/todos/todos.service";

export default function AddBar() {
  const session = useSelector((state: RootState) => state.session);
  const [taskName, setTaskName] = useState("");

  const handleAddTask = async () => {
    if (!taskName.trim()) return;
    const response = await addTodo(session.id, taskName.trim(), false);
    console.log("POST", response);
    setTaskName("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col items-center">
      <h2
        className="font-medium text-2xl sm:text-3xl md:text-4xl text-center tracking-tight"
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

      <div className="w-full max-w-2xl mt-6 sm:mt-8 flex items-center border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xs hover:shadow-sm rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1 transition-all">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTask();
          }}
          className="py-2.5 sm:py-3.5 text-sm sm:text-base text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none w-full bg-transparent pr-2"
          type="text"
          placeholder="Add Task Here...."
        />
        <button
          onClick={handleAddTask}
          aria-label="Add task"
          className="cursor-pointer shrink-0 text-[var(--theme-color)] hover:opacity-80 active:scale-95 transition-transform flex items-center justify-center p-0.5"
        >
          <AddCircle
            sx={{
              fontSize: { xs: 32, sm: 38 },
              color: "var(--theme-color)",
            }}
          />
        </button>
      </div>

      <div className="w-full max-w-2xl mt-4 sm:mt-6">
        <ShowTodos id={session.id} />
      </div>
    </div>
  );
}
