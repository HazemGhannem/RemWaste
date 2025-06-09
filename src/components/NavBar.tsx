import React, { useState } from "react";
import {
  MapPinIcon,
  TrashIcon,
  TruckIcon,
  ShieldIcon,
  CalendarIcon,
  CreditCardIcon,
  Arrow,
} from "../assets/svgs"; 
import Button from "./Button"; 
const allButtons = [
  { icon: <MapPinIcon className="w-6 h-6 text-white" />, label: "Postcode" },
  { icon: <TrashIcon className="w-6 h-6 text-white" />, label: "Waste Type" },
  {
    icon: <TruckIcon className="w-6 h-6 text-white" />,
    label: "Select Skip",
    current: true,
  },
  {
    icon: <ShieldIcon className="w-6 h-6 text-white" />,
    label: "Permit Check",
    disabled: true,
  },
  {
    icon: <CalendarIcon className="w-6 h-6 text-white" />,
    label: "Choose Date",
    disabled: true,
  },
  {
    icon: <CreditCardIcon className="w-6 h-6 text-white" />,
    label: "Payment",
    disabled: true,
  },
];

export default function ResponsiveButtons() {
  const currentIndex = allButtons.findIndex((btn) => btn.current);
  const [startIndex, setStartIndex] = useState(Math.max(0, currentIndex - 1));
  const getVisibleButtons = () => {
    const start = Math.max(0, Math.min(startIndex, allButtons.length - 3));
    return allButtons.slice(start, start + 3);
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(allButtons.length - 3, prev + 1));
  };

  return (
    <>
      <div className="hidden xl:flex justify-center mb-8 overflow-x-auto space-x-4 items-center">
        {allButtons.map((btn, i) => (
          <Button key={i} {...btn} />
        ))}
      </div>

      <div className="flex xl:hidden justify-center mb-8 items-center">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2 bg-[#dad2d2] rounded-full disabled:opacity-30 lg:mr-16"
          aria-label="Previous buttons"
        >
          <Arrow style={{ transform: "rotate(180deg)" }} />
        </button>
        <div className="flex space-x-4 mx-2">
          {getVisibleButtons().map((btn, i) => (
            <Button key={i} {...btn} />
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={startIndex >= allButtons.length - 3}
          className="p-2 bg-[#dad2d2] rounded-full disabled:opacity-30"
          aria-label="Next buttons"
        >
          <Arrow />
        </button>
      </div>
    </>
  );
}
