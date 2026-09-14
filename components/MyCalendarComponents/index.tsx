import CalendarHeader from "./CalendarHeader";
import CalendarMonthView from "./CalendarMonthView";

export default function MyCalendar() {
  return (
    <>
      <section className="h-screen w-full flex flex-col overflow-hidden">
        <div className="w-full shrink-0">
          <CalendarHeader />
        </div>

        <div className="w-full flex-1 min-h-0 px-3 py-5">
          <CalendarMonthView />
        </div>
      </section>
    </>
  );
}
