"use client";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import InfoIcon from "@mui/icons-material/Info";
import { FormControl, FormControlLabel } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Todo } from "@/services/todos/todos.type";
import { useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Input from "@/ui/Input";

type EditTodoProps = {
  selectedTask: Todo;
  onDelete: () => void;
  onConfirm: (updatedTodo: Todo) => void;
  onCancel: () => void;
};

export default function EditTodo({
  selectedTask,
  onDelete,
  onConfirm,
  onCancel,
}: EditTodoProps) {
  const [editedTodo, setEditedTodo] = useState(selectedTask);
  const [mode, setMode] = useState<"EDIT" | "DELETE">("EDIT");

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[420px] relative">
          <div
            onClick={() => setMode(mode === "EDIT" ? "DELETE" : "EDIT")}
            className="h-12 w-12 rounded-full flex justify-center items-center absolute -top-2 -right-2 cursor-pointer"
            style={{
              backgroundColor:
                mode === "EDIT" ? "var(--theme-color)" : "var(--theme-color)",
              color: "white",
            }}
          >
            {mode === "EDIT" ? (
              <ModeEditOutlineOutlinedIcon
                sx={{
                  fontSize: { xs: 23, sm: 24 },
                }}
              />
            ) : (
              <DeleteOutlinedIcon
                sx={{
                  fontSize: { xs: 23, sm: 24 },
                }}
              />
            )}
          </div>
          <h2 className="text-lg font-medium mb-4 text-center">
            {mode === "EDIT" ? "Edit Todo" : "Delete Todo"}
          </h2>
          <div className="w-full flex flex-col gap-4">
            {mode === "EDIT" && (
              <Input
                name="task"
                value={editedTodo.taskName}
                onChange={(e) =>
                  setEditedTodo((prev) => ({
                    ...prev,
                    taskName: e.target.value,
                  }))
                }
                type="text"
                placeholder=""
              />
            )}
            <p
              className="flex px-3 py-3 rounded-sm w-full"
              style={{
                backgroundColor:
                  mode === "EDIT"
                    ? "color-mix(in srgb, var(--theme-color) 11%, transparent)"
                    : "rgba(239, 68, 68, 0.1)",
                border:
                  mode === "EDIT"
                    ? "1px solid var(--theme-color)"
                    : "1px solid #ef4444",
              }}
            >
              {selectedTask.taskName}
            </p>
            {mode === "EDIT" && (
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
                          setEditedTodo((pre) => ({
                            ...pre,
                            isCompleted: !pre.isCompleted,
                          }))
                        }
                        className="cursor-pointer"
                      >
                        {editedTodo.isCompleted ? (
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
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 mt-8 sm:mt-10">
            <button
              onClick={() =>
                mode === "EDIT" ? onConfirm(editedTodo) : onDelete()
              }
              className="px-4 py-2.5 sm:py-2 w-full rounded-md text-white cursor-pointer transition-all text-sm sm:text-base"
              style={{
                backgroundColor: mode === "EDIT" ? "var(--theme-color)" : "red",
              }}
            >
              {mode === "EDIT" ? "Save Changes" : "Delete"}
            </button>
            <button
              onClick={onCancel}
              className={`px-4 py-2.5 sm:py-2 w-full text-gray-500 rounded-md border border-gray-300 cursor-pointer transition-all text-sm sm:text-base ${
                mode === "EDIT"
                  ? "hover:bg-[color-mix(in_srgb,var(--theme-color)_11%,transparent)]"
                  : "hover:bg-gray-100"
              }`}
            >
              Cancel
            </button>
          </div>
          <p className="text-[13px] text-gray-500 mt-3 flex justify-center items-center gap-1">
            <InfoIcon sx={{ fontSize: 20 }} />
            {mode === "EDIT"
              ? "Click edit icon to you can change the mode to delete"
              : "Click delete icon to you can change the mode to edit"}
          </p>
        </div>
      </div>
    </>
  );
}
