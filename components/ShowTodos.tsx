"use client";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Todos, TODOS_EMPTY } from "@/services/todos/todos.type";
import { useEffect, useState } from "react";
import { getTodos, updateTodo } from "@/services/todos/todos.service";

type ShowTodosProps = {
  id: string;
};

export default function ShowTodos({ id }: ShowTodosProps) {
  const [selecetdId, setSelecetdId] = useState<string>("");
  const [todos, setTodos] = useState<Todos>(TODOS_EMPTY);
  const [openPopup, setOpenPopup] = useState(false);

  const getDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleCheckbox = (id: string) => {
    setSelecetdId(id);
    setOpenPopup(true);
  };

  const handleCheck = async () => {
    console.log("UP", id, selecetdId);
    const response = await updateTodo(id, selecetdId, true);
    setOpenPopup(false);
    fetchTodos();
    console.log(response);
  };

  const fetchTodos = async () => {
    const response = await getTodos(id);
    setTodos(response.todos);
  };

  useEffect(() => {
    if (id) {
      fetchTodos();
    }
  }, [id]);
  return (
    <>
      <div className="w-full flex flex-col gap-3 sm:gap-4 mt-2">
        <h2
          className="font-medium text-xl sm:text-2xl text-center sm:text-left"
          style={{ color: "var(--theme-color)" }}
        >
          Today
        </h2>
        {todos.map((task, index) => {
          return (
            <div
              key={task._id || index}
              className="w-full flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-gray-200 dark:border-zinc-700/60 bg-white dark:bg-zinc-800 shadow-xs hover:shadow-sm cursor-pointer transition-all"
            >
              <div
                className="cursor-pointer shrink-0 flex items-center"
                onClick={() => handleCheckbox(task._id)}
              >
                {task.isCompleted ? (
                  <CheckCircleIcon
                    sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }}
                  />
                ) : (
                  <RadioButtonUncheckedIcon
                    sx={{ color: "gray", fontSize: { xs: 20, sm: 24 } }}
                  />
                )}
              </div>
              <p
                className={`font-normal text-sm sm:text-base flex-1 min-w-0 break-words ${
                  task.isCompleted
                    ? "line-through text-gray-400 dark:text-zinc-500"
                    : "text-gray-800 dark:text-zinc-100"
                }`}
              >
                {task.taskName}
              </p>
              <p className="ml-auto text-xs sm:text-sm text-gray-400 dark:text-zinc-500 shrink-0 whitespace-nowrap pl-2">
                {task.createdAt ? getDate(task.createdAt) : "Just Now"}
              </p>
            </div>
          );
        })}
      </div>
      {openPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <h2 className="text-lg font-medium mb-3">Delete Todo?</h2>

            <p className="text-gray-500 mb-6">
              Are you sure you want to mark this todo as completed?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenPopup(false)}
                className="px-4 py-2 rounded-md border border-gray-300"
              >
                No
              </button>

              <button
                onClick={handleCheck}
                className="px-4 py-2 rounded-md text-white"
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
