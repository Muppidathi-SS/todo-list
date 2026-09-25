import { getPriorityColor, getStatusColor } from "@/styles/calendarStyles";
import { COLUMNS } from "@/constants/constant";
import { HOME_PAGE_TABLEDATA } from "@/constants/dummy-data";

export default function Table() {
  return (
    <>
      <div className="w-full max-h-full overflow-y-auto overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-gray-50">
            <tr>
              {COLUMNS.map((column, index) => (
                <th
                  key={column}
                  className={`border-b border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700 ${
                    index === 0 ? "w-120" : ""
                  }`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {HOME_PAGE_TABLEDATA.map((item, index) => (
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
                  <span className="h-10 w-10 rounded-full flex justify-center items-center bg-red-600 text-white font-medium text-[18px]">
                    M
                  </span>
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
