import { TODAY_TASKS } from "@/constants/dummy-data";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ShowTodos() {
  return (
    <>
      <div className="flex flex-col items-center mt-4 gap-5">
        <h2
          className="font-medium text-3xl"
          style={{ color: "var(--theme-color)" }}
        >
          Today
        </h2>
        {TODAY_TASKS.map((task, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-[92%] sm:max-w-[85%] md:w-250 flex gap-3 px-5 py-4 rounded-xl border border-gray-300/20 shadow cursor-pointer transition-opacity"
            >
              <div className="cursor-pointer">
                {task.isChecked ? (
                  <CheckCircleIcon sx={{ color: "green" }} />
                ) : (
                  <RadioButtonUncheckedIcon sx={{ color: "gray" }} />
                )}
              </div>

              <p
                className={`font-normal text-[18px] ${
                  task.isChecked ? "text-gray-400" : ""
                }`}
              >
                {task.taskName}
              </p>
              <p className="ml-auto text-gray-500">{task.completedTime}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
