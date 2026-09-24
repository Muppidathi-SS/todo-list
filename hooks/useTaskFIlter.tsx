"use client";

import { Todo, Todos } from "@/services/todos/todos.type";
import { useMemo } from "react";

type GroupedTask = {
  id: string;
  tasks: Todo[];
};

export const useTaskFilter = (todos: Todos): GroupedTask[] => {
  return useMemo(() => {
    const groupedTasks: Record<string, Todo[]> = {};

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    todos.forEach((todo) => {
      if (!todo.createdAt) return;

      const taskDate = new Date(todo.createdAt);
      taskDate.setHours(0, 0, 0, 0);

      let groupId: string;

      if (taskDate.getTime() === today.getTime()) {
        groupId = "today";
      } else if (taskDate.getTime() === yesterday.getTime()) {
        groupId = "yesterday";
      } else {
        groupId = taskDate
          .toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })
          .replace(",", "")
          .replace(/ /g, "_")
          .toLowerCase();
      }

      if (!groupedTasks[groupId]) {
        groupedTasks[groupId] = [];
      }

      groupedTasks[groupId].push(todo);
    });
    return Object.entries(groupedTasks)
      .map(([id, tasks]) => ({
        id,
        tasks,
      }))
      .sort((a, b) => {
        const dateA = a.tasks[0]?.createdAt
          ? new Date(a.tasks[0].createdAt).getTime()
          : 0;

        const dateB = b.tasks[0]?.createdAt
          ? new Date(b.tasks[0].createdAt).getTime()
          : 0;

        return dateB - dateA;
      });
  }, [todos]);
};
