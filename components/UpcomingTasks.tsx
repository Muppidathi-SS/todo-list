const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export default function UpcomingTasks() {
  return (
    <>
      <section className="px-5 py-3 flex flex-col h-full">
        <div className="">
          <div className="space-y-1">
            <h1 className="font-medium text-[24px]">Upcoming Tasks</h1>
            <p className="text-[16px] text-gray-500">September 2026</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-b-gray-400 mt-4 py-2">
          {days.map((day) => (
            <div className="bg-gray-400 px-10 py-1 rounded-lg" key={day}>{day} 1</div>
          ))}
        </div>
      </section>
    </>
  );
}
