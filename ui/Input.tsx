import { ReactNode } from "react";

interface InputProps {
  icon?: ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  autoComplete?: string;
}

export default function Input({
  name,
  icon,
  value,
  onChange,
  type,
  placeholder,
  autoComplete = "off",
}: InputProps) {
  return (
    <div className="flex justify-between items-center border-b border-b-gray-300 px-3 w-full gap-3 focus-within:border-b-[var(--theme-color)] focus-within:border-b-1">
      {icon}

      <input
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="py-2.5 sm:py-3 focus:outline-none w-full text-sm sm:text-base"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
