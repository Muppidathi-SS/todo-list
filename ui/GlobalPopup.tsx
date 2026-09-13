type GlobalPopupProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function GlobalPopup({
  title,
  message,
  onConfirm,
  onCancel,
}: GlobalPopupProps) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
          <h2 className="text-lg font-medium mb-3">{title}</h2>
          <p className="text-gray-500 mb-6">{message}</p>
          <div className="flex justify-end gap-3">
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-md border border-gray-300 cursor-pointer"
            >
              No
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-md text-white cursor-pointer"
              style={{ backgroundColor: "var(--theme-color)" }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
