import React from "react";
import { Skip } from "../../types/Type";
import Arrow from "../../assets/svgs/Arrow";
import CheckIcon from "../../assets/svgs/CheckIcon";
import { buttonClass } from "../../styles/Style";
import AnmationAlert from "../AnmationAlert";

type GridCardProps = {
  skip: Skip;
  onSelect: (skip: Skip) => void;
  selected: boolean;
};

const GridCard: React.FC<GridCardProps> = ({
  skip,
  onSelect,
  selected,
}) => {

  const {
    size,
    hire_period_days,
    price_before_vat,
    vat,
    allowed_on_road,
    allows_heavy_waste,
  } = skip;

  const isDisabled = !allows_heavy_waste;
  const handleClick = () => {
    if (isDisabled) return;
    onSelect(skip);
  };

  return (
    <div
      className={`relative rounded-lg border-2 p-4 md:p-6 transition-all  ${
        selected ? "border-brand-green" : "border-brand-orange"
      } ${isDisabled ? "opacity-50" : "cursor-pointer"}`}
      onClick={handleClick}
    >
      <div className="relative">
        <img
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
          src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"
          alt={`${size} Yard Skip`}
          loading="eager"
          fetchPriority="high"
        />
        <div
          className={`absolute top-3 right-2 z-20 ${
            selected ? "bg-brand-green" : "bg-brand-darkGray"
          } text-white px-3 py-1 rounded-full text-sm font-medium shadow-md`}
        >
          {size} Yards
        </div>
        <div className="absolute bottom-3 left-2 z-20 space-y-2">
          {!allowed_on_road && (
            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
              <AnmationAlert warning />
              <span className="text-xs font-medium text-yellow-500">
                Not Allowed On The Road
              </span>
            </div>
          )}
          {!allows_heavy_waste && (
            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
              <AnmationAlert alert />
              <span className="text-xs font-medium text-red-500">
                Not Suitable for Heavy Waste
              </span>
            </div>
          )}
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-2 text-brand-darkGray">
        {size} Yard Skip
      </h3>
      <p className="text-sm text-brand-grayText mb-4 md:mb-6">
        {hire_period_days} day hire period
      </p>
      <div className="flex justify-between items-center mb-4">
        <span
          className={`text-xl md:text-2xl font-bold ${
            selected ? "text-brand-green" : "text-brand-orange"
          } `}
        >
          £{(price_before_vat * (1 + vat / 100)).toFixed(0)}
        </span>
      </div>

      <button
        onClick={handleClick}
        className={buttonClass(selected, !allows_heavy_waste)}
      >
        {selected ? (
          <>
            <span>Selected</span>
            <CheckIcon />
          </>
        ) : (
          <>
            <span>Select This Skip</span>
            <Arrow />
          </>
        )}
      </button>
    </div>
  );
};

export default GridCard;
