export default function Table() {
  const data = [
    {
      taskName:
        "Working on 360 button in Guardrail module Working on 360 button in Guardrail module",
      status: "Completed",
      priority: "High",
      assignee: "Me",
      createdDate: "29 June 2026",
    },
    {
      taskName: "Implementing Guardrail report generation",
      status: "Ongoing",
      priority: "High",
      assignee: "Me",
      createdDate: "30 June 2026",
    },
    {
      taskName: "Fixing calendar UI responsiveness",
      status: "Completed",
      priority: "Medium",
      assignee: "John",
      createdDate: "01 July 2026",
    },
    {
      taskName: "Adding task filter functionality",
      status: "Ongoing",
      priority: "Medium",
      assignee: "Me",
      createdDate: "02 July 2026",
    },
    {
      taskName: "Testing Guardrail mapping functionality",
      status: "Completed",
      priority: "High",
      assignee: "David",
      createdDate: "03 July 2026",
    },
    {
      taskName: "Update dashboard statistics",
      status: "Pending",
      priority: "Low",
      assignee: "Me",
      createdDate: "04 July 2026",
    },
    {
      taskName: "Fix task popup alignment issue",
      status: "Completed",
      priority: "Medium",
      assignee: "Sarah",
      createdDate: "05 July 2026",
    },
    {
      taskName: "Implement weekly activity chart",
      status: "Ongoing",
      priority: "High",
      assignee: "Me",
      createdDate: "06 July 2026",
    },
    {
      taskName: "Improve mobile dashboard layout",
      status: "Pending",
      priority: "Medium",
      assignee: "John",
      createdDate: "07 July 2026",
    },
    {
      taskName: "Review and test task management APIs",
      status: "Completed",
      priority: "High",
      assignee: "Me",
      createdDate: "08 July 2026",
    },
  ];

  const styles = {
    completedStyles: "bg-green-100 text-green-700",
    ongoingStyles: "bg-[#ffebd4dd] text-[#ff8800dd]",
    pendingStyles: "bg-[#fff0f0dd] text-[#ff0000dd]",
    highStyles: "bg-[#d2bdff] text-[#4c00e4]",
    lowStyles: "bg-[#d6d6d6] text-[#686868]",
    mediumStyles: "bg-[#ffe0ef] text-[#ff18cd]",
  };

  const getStatusColor = (status: string) => {
    return status === "Completed"
      ? styles.completedStyles
      : status === "Pending"
        ? styles.pendingStyles
        : styles.ongoingStyles;
  };

  const getPriorityColor = (priority: string) => {
    return priority === "High"
      ? styles.highStyles
      : priority === "Low"
        ? styles.lowStyles
        : styles.mediumStyles;
  };

  return (
    <>
      <div className="w-full max-h-full overflow-y-auto overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-gray-50">
            <tr>
              <th className="border-b border-gray-200 w-120 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Task Name
              </th>
              <th className="border-b border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="border-b border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Priority
              </th>
              <th className="border-b border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Assignee
              </th>
              <th className="border-b border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Created Date
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b border-gray-100 px-4 py-5 text-sm text-gray-700">
                  {item.taskName}
                </td>

                <td className="border-b border-gray-100 px-4 py-5 text-sm">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium border ${getStatusColor(item.status)}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="border-b border-gray-100 px-4 py-5 text-sm">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium border ${getPriorityColor(item.priority)}`}
                  >
                    {item.priority}
                  </span>
                </td>

                <td className="border-b border-gray-100 px-4 py-5 text-sm text-gray-700">
                  <span className="h-10 w-10 rounded-full flex justify-center items-center bg-red-600 text-white font-medium text-[18px]">M</span>
                </td>

                <td className="border-b border-gray-100 px-4 py-5 text-sm text-gray-700">
                  {item.createdDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
