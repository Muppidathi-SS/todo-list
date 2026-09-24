export default function CalendarDayView() {
  return (
    <>
      <div>
        <div className="grid grid-cols-[60px_1fr]">
          {[
            "1 PM",
            "2 PM",
            "3 PM",
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM",
            "8 PM",
            "9 PM",
            "10 PM",
            "11 PM",
            "12 PM",
          ].map((time) => (
            <>
              <div
                className={`h-20 text-sm ${
                  time === "2 PM" ? "text-black font-medium" : "text-gray-400/70"
                }`}
              >
                {time}
              </div>
              {time === "5 PM" ? (
                <div className="h-20 border-t border-l border-gray-400/30 p-3">
                  <span className="rounded-md text-start bg-[#5244ed] text-white px-4 py-1 text-medium font-medium">
                    Evening Coffee Break Time with Team 5 - 5:30
                  </span>
                  <span className="rounded-md ml-3 text-start bg-[#f69f08] text-white px-4 py-1 text-medium font-medium">
                    Team Meeting 5:45
                  </span>
                </div>
              ) : time === "10 PM" ? (
                <div className="h-20 border-t border-l border-gray-400/30 p-3">
                  <span className="rounded-md text-start bg-[#f2415f] text-white px-4 py-1 text-medium font-medium">
                    Project Stand UP Call with Client, Project Manager 5 - 5:30
                  </span>
                </div>
              ) : time === "2 PM" ? (
                <div className="h-20 border-t border-l border-gray-400/30 p-3">
                  <span className="rounded-md text-start bg-[#22c45e] text-white px-4 py-1 text-medium font-medium">
                    Team Lunch 2 - 3
                  </span>
                </div>
              ) : (
                <div className="h-20 border-t border-l border-gray-400/30"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
