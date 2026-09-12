import { ReactNode } from "react";

interface InputProps {
  icon: ReactNode;
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
    <div className="flex justify-between items-center border border-gray-300 shadow rounded-lg px-3 w-[88%] sm:w-[82%] lg:w-[80%] gap-3 focus-within:border-black focus-within:border-1">
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
