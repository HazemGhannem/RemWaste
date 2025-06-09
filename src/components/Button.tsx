import React from "react";
import { CheckIcon } from "../assets/svgs";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
  current?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  disabled = false,
  current,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`
    group relative flex  items-center transition-all overflow-hidden p-4 
    ${disabled ? "opacity-50" : "cursor-pointer"}
    ${className}
  `}
      disabled={disabled}
      {...rest}
    >
      <div
        className={`
      w-10 h-10 flex items-center justify-center rounded-2xl bg-brand-orange
      transition-transform duration-400 ease-in-out
      group-hover:scale-125
      ${current && "scale-125"}
    `}
      >
        {current || disabled ? (
          icon
        ) : (
          <>
            <span className="group-hover:inline hidden">{icon}</span>
            <span className="group-hover:hidden">
              <CheckIcon color="white" />
            </span>
          </>
        )}
      </div>
      <span
        className={`
          ml-4 text-black z-20 whitespace-nowrap
          transition-all duration-300
          ${
            current
              ? "opacity-100 translate-x-0 "
              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          }
          hidden lg:inline
        `}
      >
        {label}
      </span>
    </button>
  );
};
export default Button;
