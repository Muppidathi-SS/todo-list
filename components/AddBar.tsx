"use client";

import { RootState } from "@/store/store";
import { AddCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import ShowTodos from "./ShowTodos";
import NotFound from "./NotFound";
import {
  Todo,
  TODO_EMPTY,
  Todos,
  TODOS_EMPTY,
} from "@/services/todos/todos.type";
import { addTodo, getTodos, updateTodo } from "@/services/todos/todos.service";
import ShowToastify from "@/utils/ShowToastify";

import EditTodo from "./EditTodo";
import Loading from "@/ui/Loading";
import { useTaskFilter } from "@/hooks/useTaskFIlter";

export default function AddBar() {
  const session = useSelector((state: RootState) => state.session);
  const [isLoading, setIsLoading] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [openDialogue, setOpenDialogue] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Todo>(TODO_EMPTY);
  const [todos, setTodos] = useState<Todos>(TODOS_EMPTY);
  const groupedTasks = useTaskFilter(todos);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await getTodos(session.id);
      setTodos(response.todos || []);
    } catch (err) {
      console.error("Failed to fetch todos:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/delete-todo/${session.id}/${selectedTask._id}`,
      {
        method: "DELETE",
      },
    );

    const data = await response.json();
    setSelectedTask(TODO_EMPTY);
    setOpenDialogue(false);
    fetchTodos();
  };

  const handleAddTask = async () => {
    const task = taskName.trim();
    if (!task) return;
    try {
      setIsLoading(true);
      await addTodo(session.id, task, false);
      await fetchTodos();
      setTaskName("");
    } catch (err) {
      ShowToastify({
        message: err instanceof Error ? err.message : "Failed to add task",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectedTask = (task: Todo) => {
    setSelectedTask(task);
    setOpenDialogue(true);
  };

  const handleConfirm = async (updatedTodo: Todo) => {
    try {
      setIsLoading(true);
      await updateTodo(
        session.id,
        selectedTask._id,
        updatedTodo.taskName,
        updatedTodo.isCompleted,
      );
      setOpenDialogue(false);
      setSelectedTask(TODO_EMPTY);
      await fetchTodos();
    } catch (err) {
      ShowToastify({
        message: err instanceof Error ? err.message : "Failed to update task",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getLabel = (id: string) => {
    if (id === "today") return "Today";
    if (id === "yesterday") return "Yesterday";
    const [month, day, year] = id.split("_");
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`;
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
            className="cursor-pointer shrink-0 text-(--theme-color) hover:opacity-80 active:scale-95 transition-transform flex items-center justify-center p-0.5"
          >
            <AddCircle
              sx={{
                fontSize: { xs: 32, sm: 38 },
                color: "var(--theme-color)",
              }}
            />
          </button>
        </div>

        <div className="w-full max-w-2xl py-3">
          {todos.length !== 0 ? (
            <>
              {groupedTasks.map((group) => (
                <div key={group.id}>
                  <h2
                    className="font-medium text-xl sm:text-2xl text-center sm:text-left mt-4"
                    style={{ color: "var(--theme-color)" }}
                  >
                    {getLabel(group.id)}
                  </h2>
                  <ShowTodos
                    data={group.tasks}
                    onSelecteTodo={handleSelectedTask}
                  />
                </div>
              ))}
            </>
          ) : (
            <NotFound />
          )}
        </div>
      </div>

      {openDialogue && (
        <EditTodo
          selectedTask={selectedTask}
          onConfirm={handleConfirm}
          onDelete={handleDelete}
          onCancel={() => setOpenDialogue(false)}
        />
      )}

      {isLoading && <Loading />}
    </>
  );
}
