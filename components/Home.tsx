import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import VerifiedIcon from "@mui/icons-material/Verified";
import SyncIcon from "@mui/icons-material/Sync";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Table from "@/ui/Table";

const weeklyTasks = [
  { day: "M", tasks: 0 },
  { day: "T", tasks: 5 },
  { day: "W", tasks: 0 },
  { day: "T", tasks: 6 },
  { day: "F", tasks: 10 },
  { day: "S", tasks: 0 },
  { day: "S", tasks: 0 },
];

const taskStats = [
  {
    label: "Total Tasks",
    count: 0,
    icon: <AssignmentTurnedInIcon sx={{ color: "#4648D4" }} />,
    iconBg: "#E9EDFF",
  },
  {
    label: "Ongoing Tasks",
    count: 0,
    icon: <VerifiedIcon sx={{ color: "green" }} />,
    iconBg: "#bce8d0",
  },
  {
    label: "Completed Tasks",
    count: 0,
    icon: <SyncIcon sx={{ color: "#fbbf24" }} />,
    iconBg: "#fff0e0",
  },
];

export default function Home() {
  const MAX_HEIGHt = 240;
  const MAX_VALUE = Math.max(...weeklyTasks.map((item) => item.tasks));
  const X = MAX_HEIGHt / MAX_VALUE;

  return (
    <>
      <div className="px-4 py-7">
        <h1 className="font-semibold text-3xl">Welcome to Todo Flow, Aadhi!</h1>
        <p className="text-[#464554] text-sm mt-1">
          Your workspace is ready. Let's make your team and daily workflows
          structured and productive.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-4 px-4">
        {taskStats.map((item) => (
          <div
            key={item.label}
            className="flex border border-[#e3e3e4] rounded-xl px-6 py-2 shadow justify-between items-center"
          >
            <div className="space-y-2">
              <p className="text-black font-medium text-[18px]">{item.label}</p>

              <p className="font-semibold text-[26px] text-black">
                {item.count}
              </p>
            </div>

            <div
              className="p-2 flex justify-center items-center rounded-xl w-10 h-10"
              style={{ backgroundColor: item.iconBg }}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-4 px-4 mt-4">
        <div className="shadow border border-gray-200 rounded-xl px-3 py-2">
          <div className="py-3 flex justify-between items-center">
            <p className="text-black font-medium text-[18px]">
              Weekly Activity
            </p>

            <span className="border border-[#ff821b] bg-[#ffeada] text-[#ff821b] px-4 py-1 rounded-3xl font-medium flex items-center">
              4-Day Streak
              <LocalFireDepartmentIcon />
            </span>
          </div>

          <div className="flex h-80 items-end justify-between">
            {weeklyTasks.map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-col items-center justify-end gap-2"
              >
                <div
                  className={`w-12 rounded-t-md ${
                    item.tasks === 0 ? "bg-red-500" : "bg-[#4648D4]"
                  }`}
                  style={{
                    height: `${item.tasks === 0 ? 0.2 : X * item.tasks}px`,
                  }}
                />

                <span
                  className={`text-xs ${
                    index === 3
                      ? "font-medium text-[#4648D4]"
                      : index === 6
                        ? "font-medium text-green-700"
                        : "text-gray-600"
                  }`}
                >
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2 h-100">
          <Table />
        </div>
      </div>
    </>
  );
}
