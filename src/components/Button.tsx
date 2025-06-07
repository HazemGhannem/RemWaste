import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
  dividerColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  disabled = false,
  dividerColor,
  className = "",
  ...rest
}) => {
  return (
    <>
      <button
        className={`
          flex items-center whitespace-nowrap transition-colors
          ${
            disabled
              ? "text-white/60 cursor-not-allowed opacity-50"
              : "text-[#0037C1] cursor-pointer hover:text-[#0037C1]"
          }
          ${className}
        `}
        disabled={disabled}
        {...rest}
      >
        {icon}
        <span className="ml-2 text-white">{label}</span>
      </button>
      {dividerColor && (
        <div
          className={`w-16 h-px`}
          style={{ backgroundColor: dividerColor }}
        />
      )}
    </>
  );
};
export default Button;