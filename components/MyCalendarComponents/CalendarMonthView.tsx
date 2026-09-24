import { Todos } from "@/services/todos/todos.type";
import { primaryRowBorder, secondaryRowBorder } from "@/styles/calendarStyles";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type CalendarMonthViewProps = {
  selectedMonth: string;
  todayDate: number;
  todos: Todos;
};

export default function CalendaCalendarMonthViewrHeader({
  selectedMonth,
  todayDate,
  todos,
}: CalendarMonthViewProps) {
  console.log("S", selectedMonth);
  const todayMonth = new Date().toLocaleString("default", {
    month: "long",
  });
  const [monthName, year] = selectedMonth.split(" ");
  const monthNumber = new Date(`${monthName} 1, ${year}`).getMonth();
  const daysInMonth = new Date(Number(year), monthNumber + 1, 0).getDate();
  const startingDay = new Date(Number(year), monthNumber, 1).getDay();
  const weeks = Math.ceil((startingDay + daysInMonth) / 7);
  const currentMonthDays = [];
  const previousMonthDays = [];
  for (let i = startingDay; i > 0; i--) {
    previousMonthDays.push(
      new Date(Number(year), monthNumber, 1 - i).getDate(),
    );
  }
  for (let day = 1; day <= daysInMonth; day++) {
    currentMonthDays.push(day);
  }
  const totalDays = [...previousMonthDays, ...currentMonthDays];
  const remainingDays = weeks * 7 - totalDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    totalDays.push(i);
  }
  return (
    <div
      className="grid grid-cols-7 h-full min-h-0 border border-gray-300 rounded-2xl overflow-hidden"
      style={{
        gridTemplateRows: `auto repeat(${weeks}, minmax(0, 1fr))`,
      }}
    >
      {DAYS.map((day, index) => (
        <div
          key={day}
          className={`${
            index === DAYS.length - 1 ? secondaryRowBorder : primaryRowBorder
          } p-2 text-right text-sm border-gray-300 font-medium bg-[var(--theme-color)]/10`}
        >
          {day}
        </div>
      ))}

      {totalDays.map((day, index) => {
        const isLastColumn = (index + 1) % 7 === 0;
        const isLastRow = index >= totalDays.length - 7;
        const isPreviousMonth = index < startingDay;
        const isNextMonth = index >= startingDay + daysInMonth;
        const [monthName, year] = selectedMonth.split(" ");

        const selectedMonthNumber = new Date(
          `${monthName} 1, ${year}`,
        ).getMonth();

        const dayTodos = todos.filter(
          (todo) =>
            todo.createdAt &&
            new Date(todo.createdAt).getDate() === day &&
            new Date(todo.createdAt).getMonth() === selectedMonthNumber &&
            new Date(todo.createdAt).getFullYear() === Number(year),
        );
        console.log(dayTodos);
        return (
          <div
            key={index}
            className={`${
              isLastRow
                ? isLastColumn
                  ? ""
                  : "border-r"
                : isLastColumn
                  ? "border-b"
                  : "border-r border-b"
            } p-1 text-right text-sm border-gray-300 ${
              isPreviousMonth || isNextMonth
                ? "text-gray-400"
                : "cursor-pointer hover:bg-blue-50"
            }`}
          >
            <p
              className={`h-7 text-center flex justify-center items-center w-7 rounded-full ${
                !isPreviousMonth &&
                !isNextMonth &&
                day === todayDate &&
                selectedMonth.split(" ")[0] === todayMonth
                  ? "bg-(--theme-color) text-white"
                  : ""
              }`}
            >
              {day}
            </p>
            {isPreviousMonth || isNextMonth ? null : (
              <>
                {dayTodos.slice(0, 1).map((todo) => (
                  <div key={todo._id} className="flex flex-col gap-3 mt-2">
                    <p
                      className={`rounded-md truncate text-start text-white px-2 py-1 text-xs font-medium ${
                        todo.isCompleted ? "bg-[#22c45e]" : "bg-[#f2415f]"
                      }`}
                    >
                      {todo.taskName}
                    </p>
                  </div>
                ))}
                {dayTodos.length >= 3 && (
                  <>
                    {/* <div className="flex items-center gap-2 mt-2">
                      <span className="bg-amber-400 rounded-full flex justify-center items-center h-7 w-7 text-white font-semibold text-md">
                        2+
                      </span>
                      <p>More tasks...</p>
                    </div> */}
                    <div className="flex flex-col gap-3 mt-2">
                      <p className="bg-amber-400 rounded-md truncate text-start text-white px-2 py-1 text-xs font-medium">
                        2+ More tasks...
                      </p>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
