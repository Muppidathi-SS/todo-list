interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "primary" | "google";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  icon,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "text-white px-3 py-2.5 sm:py-2.5 w-full rounded-lg sm:rounded-md text-base cursor-pointer hover:bg-black/90 transition mt-4 sm:mt-5 select-none touch-manipulation"
      : "flex justify-center items-center border border-gray-300 shadow rounded-lg px-3 py-2 sm:py-2.5 w-full gap-3 cursor-pointer hover:bg-gray-50 transition select-none touch-manipulation";

  return (
    <button type={type} style={{ backgroundColor: "var(--theme-color)" }} onClick={onClick} className={className}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
