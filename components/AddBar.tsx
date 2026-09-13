"use client";

import { RootState } from "@/store/store";
import { AddCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import ShowTodos from "./ShowTodos";
import NotFound from "./NotFound";
import { Todos, TODOS_EMPTY } from "@/services/todos/todos.type";
import { addTodo, getTodos, updateTodo } from "@/services/todos/todos.service";
import { idID } from "@mui/material/locale";

export default function AddBar() {
  const session = useSelector((state: RootState) => state.session);
  const [openPopup, setOpenPopup] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [todos, setTodos] = useState<Todos>(TODOS_EMPTY);

  const handleAddTask = async () => {
    const task = taskName.trim();
    if (!task) return;
    const response = await addTodo(session.id, task, false);
    fetchTodos();
    setTaskName("");
  };

  const fetchTodos = async () => {
    const response = await getTodos(session.id);
    setTodos(response.todos);
  };

  const handleComplete = async (id: string, value: boolean) => {
    setSelectedId(id);
    setIsCompleted(!value);
    setOpenPopup(true);
  };

  const handleIsCompleted = async () => {
    const response = await updateTodo(session.id, selectedId, isCompleted);
    setSelectedId("");
    setIsCompleted(false);
    setOpenPopup(false);
    fetchTodos();
  };

  useEffect(() => {
    if (session.id) {
      fetchTodos();
    }
  }, [session.id]);

  return (
    <>
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
          {todos.length !== 0 ? (
            <ShowTodos data={todos} onSelect={handleComplete} />
          ) : (
            <NotFound />
          )}
        </div>
      </div>

      {openPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <h2 className="text-lg font-medium mb-3">Edit Todo?</h2>
            <p className="text-gray-500 mb-6">
              {`Are you sure you want to mark this todo as ${isCompleted ? "completed" : "incomplete"}?`}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenPopup(false)}
                className="px-4 py-2 rounded-md border border-gray-300 cursor-pointer"
              >
                No
              </button>
              <button
                onClick={handleIsCompleted}
                className="px-4 py-2 rounded-md text-white cursor-pointer"
                style={{ backgroundColor: "var(--theme-color)" }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
