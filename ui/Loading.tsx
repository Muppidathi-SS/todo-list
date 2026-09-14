import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-sm flex flex-col items-center justify-center gap-3">
          <HourglassBottomOutlinedIcon
            className="animate-spin"
            style={{ fontSize: 44, color: "var(--theme-color)" }}
          />
          <h2 className="text-lg font-medium text-gray-800">Loading...</h2>
        </div>
      </div>
    </>
  );
}
