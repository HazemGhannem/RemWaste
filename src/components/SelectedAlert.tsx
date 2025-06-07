import React from "react";
import { Skip } from "../types/Type";
import Arrow from "../assets/svgs/Arrow";
type SelectedAlertProp = {
  selectedSkip: Skip;
};
const SelectedAlert: React.FC<SelectedAlertProp> = ({ selectedSkip }) => {
  const { size, price_before_vat, vat, hire_period_days } = selectedSkip;
  const priceWithVat = (price_before_vat * (1 + vat / 100)).toFixed(0);
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-3 text-xs text-gray-400 text-center leading-snug">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </div>
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">{size} Yard Skip</h3>
            <div>
              <span className="text-xl font-bold text-[#0037C1]">
                £ {priceWithVat}
              </span>
              <span className="text-sm text-gray-400 ml-2">
                {hire_period_days}
                days
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-[#2a2a2a] hover:bg-[#373737] text-white font-semibold py-2 px-4 rounded gap-2 w-full">
              Back
            </button>
            <button className="rounded-md bg-[#0037C1] px-4 py-2 text-white transition-colors duration-150 hover:bg-[#002da1] ">
              Continue
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-gray-400">{size} Yard Skip</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#0037C1]">
                £{priceWithVat}
              </span>
              <span className="text-sm text-gray-400 ml-2">
                {hire_period_days} day hire
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#2a2a2a] hover:bg-[#373737] text-white font-semibold py-2 px-4 rounded flex items-center gap-2">
              Back
            </button>
            <button className="rounded-md bg-[#0037C1] px-4 py-2 text-white transition-colors duration-150 hover:bg-[#002da1] flex items-center gap-2">
              Continue
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedAlert;
