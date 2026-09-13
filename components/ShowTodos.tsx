"use client";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Todos } from "@/services/todos/todos.type";

type ShowTodosProps = {
  data: Todos;
  onSelect: (selectedId: string, isCompleted: boolean) => void;
};

export default function ShowTodos({ data, onSelect }: ShowTodosProps) {
  const getDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-3 sm:gap-4 mt-2">
        <h2
          className="font-medium text-xl sm:text-2xl text-center sm:text-left"
          style={{ color: "var(--theme-color)" }}
        >
          Today
        </h2>
        {data.map((task, index) => {
          return (
            <div
              key={task._id || index}
              className="w-full flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border hover:bg-blue-100/40 border-gray-200 dark:border-zinc-700/60 bg-white dark:bg-zinc-800 shadow-xs hover:shadow-sm cursor-pointer transition-all"
            >
              <div
                onClick={() => onSelect(task._id, task.isCompleted)}
                className="cursor-pointer shrink-0 flex items-center"
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
    </>
  );
}
