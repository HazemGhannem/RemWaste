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
    <div className="fixed bottom-0 left-0 right-0 bg-brand-grayFooter border-t p-5 z-50 shadow-lg animate-slideUpFade">
      <div className="max-w-7xl mx-auto">
        <p className="mb-4 text-xs text-white text-center leading-snug tracking-wide">
          Imagery and information shown throughout this website may not reflect
          the exact shape, size specification, or colors. Options and
          accessories may be featured at additional cost.
        </p>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-lg text-white">
              {size} Yard Skip
            </h3>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-extrabold text-brand-green">
                £{priceWithVat}
              </span>
              <span className="text-sm text-gray-400">
                {hire_period_days} days
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#75777b] hover:bg-[#acabab] text-white font-semibold py-3 rounded-md shadow-inner transition duration-200 ease-in-out">
              Back
            </button>
            <button className="bg-brand-orange hover:bg-brand-green text-white font-semibold py-3 rounded-md shadow-lg transition duration-200 ease-in-out">
              Continue
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-8">
            <p className="text-sm text-white tracking-wide">{size} Yard Skip</p>
            <span className="text-3xl font-extrabold text-brand-green">
              £{priceWithVat}
            </span>
            <span className="text-sm text-white">
              {hire_period_days} day hire
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-[#75777b] hover:bg-[#acabab] text-white font-semibold py-3 px-6 rounded-md shadow-inner flex items-center gap-3 transition duration-200 ease-in-out">
              {/* You can add a left arrow icon here if needed */}
              Back
            </button>
            <button className="bg-brand-orange hover:bg-[#0F4D0F] text-white font-semibold py-3 px-6 rounded-md shadow-lg flex items-center gap-3 transition duration-200 ease-in-out">
              Continue
              <Arrow className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedAlert;
