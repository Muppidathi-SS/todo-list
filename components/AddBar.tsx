"use client";

import { RootState } from "@/store/store";
import { AddCircle, Email } from "@mui/icons-material";
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

import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import GlobalPopup from "@/ui/GlobalPopup";
import Input from "@/ui/Input";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import InfoIcon from "@mui/icons-material/Info";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function AddBar() {
  const session = useSelector((state: RootState) => state.session);
  const [isLoading, setIsLoading] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [openDialogue, setOpenDialogue] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Todo>(TODO_EMPTY);
  const [todos, setTodos] = useState<Todos>(TODOS_EMPTY);

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

  const handlesChnageTask = async () => {
    try {
      setIsLoading(true);
      await updateTodo(session.id, selectedTask._id, selectedTask.isCompleted);
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
            <ShowTodos data={todos} onSelecteTodo={handleSelectedTask} />
          ) : (
            <NotFound />
          )}
        </div>
      </div>

      {openDialogue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[420px] relative">
            <div
              className="h-12 w-12 rounded-full flex justify-center items-center absolute -top-2 -right-2 cursor-pointer"
              style={{
                backgroundColor: "var(--theme-color)",
                color: "white",
              }}
            >
              <ModeEditOutlineOutlinedIcon
                sx={{
                  fontSize: { xs: 23, sm: 24 },
                }}
              />
            </div>
            <h2 className="text-lg font-medium mb-4 text-center">Edit Todo</h2>
            <div className="w-full flex flex-col gap-4">
              {/* <Input
                name="task"
                value={selectedTask.taskName}
                onChange={(e) =>
                  setSelectedTask((prev) => ({
                    ...prev,
                    taskName: e.target.value,
                  }))
                }
                type="text"
                placeholder=""
              /> */}
              <p className="flex px-2 py-1 rounded-sm w-full bg-[color-mix(in_srgb,var(--theme-color)_11%,transparent)] border border-[var(--theme-color)]">
                {selectedTask.taskName}
              </p>
              <div className="flex ml-1">
                <FormControl>
                  <FormControlLabel
                    label="Mark as completed"
                    labelPlacement="start"
                    sx={{
                      margin: 0,
                      gap: 1.5,
                      "& .MuiFormControlLabel-label": {
                        fontFamily: "var(--font-poppins)",
                      },
                    }}
                    control={
                      <span
                        onClick={() =>
                          setSelectedTask((pre) => ({
                            ...pre,
                            isCompleted: !pre.isCompleted,
                          }))
                        }
                        className="cursor-pointer"
                      >
                        {selectedTask.isCompleted ? (
                          <CheckCircleIcon
                            sx={{
                              color: "green",
                              fontSize: { xs: 20, sm: 24 },
                            }}
                          />
                        ) : (
                          <RadioButtonUncheckedIcon
                            sx={{ color: "gray", fontSize: { xs: 20, sm: 24 } }}
                          />
                        )}
                      </span>
                    }
                  />
                </FormControl>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 mt-8 sm:mt-10">
              <button
                onClick={handlesChnageTask}
                className="px-4 py-2.5 sm:py-2 w-full rounded-md text-white cursor-pointer transition-all font-medium text-sm sm:text-base"
                style={{ backgroundColor: "var(--theme-color)" }}
              >
                Save Changes
              </button>
              <button
                onClick={() => setOpenDialogue(false)}
                className="px-4 py-2.5 sm:py-2 w-full text-gray-500 hover:text-[var(--theme-color)] rounded-md border border-gray-300 cursor-pointer hover:bg-[color-mix(in_srgb,var(--theme-color)_11%,transparent)] transition-all font-medium text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
            {/* <p className="text-[13px] text-gray-500 mt-3 flex justify-center items-center gap-1">
              <InfoIcon sx={{ fontSize: 20 }} />
              Click edit icon to you can change the mode to delete
            </p> */}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-sm flex flex-col items-center justify-center gap-3">
            <HourglassBottomOutlinedIcon
              className="animate-spin"
              style={{ fontSize: 44, color: "var(--theme-color)" }}
            />
            <h2 className="text-lg font-medium text-gray-800">Loading...</h2>
          </div>
        </div>
      )}
    </>
  );
}
