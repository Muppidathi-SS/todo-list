import { primaryRowBorder, secondaryRowBorder } from "@/styles/calendarStyles";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type CalendarMonthViewProps = {
  selectedMonth: string;
  todayDate: number;
};

export default function CalendaCalendarMonthViewrHeader({
  selectedMonth,
  todayDate,
}: CalendarMonthViewProps) {
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
      className="grid grid-cols-7 h-full min-h-0 border border-gray-300 rounded-2xl"
      style={{
        gridTemplateRows: `auto repeat(${weeks}, minmax(0, 1fr))`,
      }}
    >
      {DAYS.map((day, index) => (
        <div
          key={day}
          className={`${
            index === DAYS.length - 1 ? secondaryRowBorder : primaryRowBorder
          } p-2 text-right text-sm border-gray-300 font-medium`}
        >
          {day}
        </div>
      ))}

      {totalDays.map((day, index) => {
        const isLastColumn = (index + 1) % 7 === 0;
        const isLastRow = index >= totalDays.length - 7;
        const isPreviousMonth = index < startingDay;
        const isNextMonth = index >= startingDay + daysInMonth;
        console.log(
          "TOD",
          todayDate,
          "SelecetdM:",
          selectedMonth,
          " ",
          todayMonth,
        );

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
              isPreviousMonth || isNextMonth ? "text-gray-400" : ""
            }`}
          >
            <p
              className={`h-7 text-center flex justify-center items-center w-7 rounded-full ${
                !isPreviousMonth &&
                !isNextMonth &&
                day === todayDate &&
                selectedMonth.split(" ")[0] === todayMonth
                  ? "bg-[var(--theme-color)] text-white"
                  : ""
              }`}
            >
              {day}
            </p>
            {day === 5 && (
              <div className="flex flex-col gap-2 mt-1">
                <span className="rounded-md text-start bg-[#5244ed] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
                <span className="rounded-md text-start bg-[#f2415f] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
              </div>
            )}
            {day === 6 && (
              <div className="flex flex-col gap-2 mt-2">
                <span className="rounded-md text-start bg-[#f69f08] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
                <span className="rounded-md text-start bg-[#22c45e] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
              </div>
            )}
            {day === 16 && (
              <div className="flex flex-col gap-2 mt-2">
                <span className="rounded-md text-start bg-[#f69f08] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
                <span className="rounded-md text-start bg-[#22c45e] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
              </div>
            )}
            {day === 26 && (
              <div className="flex flex-col gap-2 mt-2">
                <span className="rounded-md text-start bg-[#f69f08] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
                <span className="rounded-md text-start bg-[#22c45e] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
              </div>
            )}
            {day === 27 && (
              <div className="flex flex-col gap-2 mt-2">
                <span className="rounded-md text-start bg-[#f69f08] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
                <span className="rounded-md text-start bg-[#22c45e] text-white px-2 py-1 text-xs font-medium">
                  Today
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
