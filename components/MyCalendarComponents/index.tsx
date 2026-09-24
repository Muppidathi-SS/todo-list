"use client";
import { useEffect, useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarMonthView from "./CalendarMonthView";
import { SelectChangeEvent } from "@mui/material";
import CalendarDayView from "./CalendarDayView";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getTodos } from "@/services/todos/todos.service";
import { Todos, TODOS_EMPTY } from "@/services/todos/todos.type";
const CALENDAR_VIEWS = ["Month", "Day"];

export default function MyCalendar() {
  const session = useSelector((state: RootState) => state.session);
  const [view, setView] = useState("Month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [todos, setTodos] = useState<Todos>(TODOS_EMPTY);
  const todayDate = currentDate.getDate();
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(
    currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    }),
  );

  const handleCalendarViewsChange = (event: SelectChangeEvent) => {
    setView(event.target.value);
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setMonth(nextDate.getMonth() + 1);
      setSelectedMonth(
        nextDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        }),
      );
      return nextDate;
    });
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const previousDate = new Date(prevDate);
      previousDate.setMonth(previousDate.getMonth() - 1);
      setSelectedMonth(
        previousDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        }),
      );
      return previousDate;
    });
  };

  const handleNextDay = () => {
    setSelectedDay((date) => {
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);
      return nextDate;
    });
  };

  const handlePrevDay = () => {
    setSelectedDay((date) => {
      const prevDate = new Date(date);
      prevDate.setDate(prevDate.getDate() - 1);
      return prevDate;
    });
  };

  const fetchTodos = async () => {
    try {
      const response = await getTodos(session.id);
      console.table(response.todos);
      setTodos(response.todos);
    } catch (err) {
      console.error("Failed to fetch todos:", err);
    }
  };

  const filtersTodo = () => {
    const filteredTodos = todos.filter((todo) => {
      if (!todo.createdAt) return false;
      const selectedDate = new Date(`1 ${selectedMonth}`);
      const todoDate = new Date(todo.createdAt);
      return (
        todoDate.getMonth() === selectedDate.getMonth() &&
        todoDate.getFullYear() === selectedDate.getFullYear()
      );
    });
    console.log("TABLE", filteredTodos);
  };

  useEffect(() => {
    fetchTodos();
    filtersTodo();
  }, []);

  useEffect(() => {
    filtersTodo();
  }, [selectedMonth]);

  return (
    <section className="h-full w-full flex flex-col gap-2 overflow-hidden">
      <div className="w-full shrink-0">
        <CalendarHeader
          view={view}
          day={selectedDay}
          month={selectedMonth}
          onSelectedNextvMonth={handleNextMonth}
          onSelectedPrevMonth={handlePreviousMonth}
          onSelectedNextDay={handleNextDay}
          onSelectedPrevDay={handlePrevDay}
          onSelectedHandleViewChange={handleCalendarViewsChange}
        />
      </div>

      <div className="w-full mt-2 flex-1 min-h-0">
        {view === "Month" ? (
          <CalendarMonthView
            selectedMonth={selectedMonth}
            todayDate={todayDate}
            todos={todos}
          />
        ) : (
          <CalendarDayView />
        )}
      </div>
    </section>
  );
}
