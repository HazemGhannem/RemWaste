import React from "react";

type CheckIconProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const CheckIcon: React.FC<CheckIconProps> = ({
  color = "#0037C1",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-check w-5 h-5 md:w-6 md:h-6"
    {...props}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default CheckIcon;
