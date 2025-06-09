import React from "react";
import { Skip } from "../../types/Type";
import Arrow from "../../assets/svgs/Arrow";
import { buttonClass } from "../../styles/Style";
import AnmationAlert from "../AnmationAlert";
import { CheckIcon } from "../../assets/svgs";

type CardProps = {
  skip?: Skip;
  onSelect?: (skip: Skip) => void;
  selected?: boolean;
};

const CardList: React.FC<CardProps> = ({
  skip,
  onSelect,
  selected = false,
}) => {
 

  if (!skip) return null;

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
    onSelect?.(skip);
  };

  return (
    <div
      className={`
    w-full max-w-5xl flex flex-col md:flex-row items-stretch rounded-lg shadow-sm
    border  ${selected ? "border-brand-green" : "border-brand-orange"}
    ${!allows_heavy_waste ? "opacity-50" : "cursor-pointer"}
  `}
      onClick={handleClick}
    >
      <div className="relative w-full md:w-52 lg:w-60 xl:w-72">
        <img
          className="object-cover w-full h-64 md:h-full rounded-t-lg md:rounded-none md:rounded-s-lg"
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
      </div>

      <div className="flex-1 flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-brand-darkGray">
          {size} Yard Skip
        </h5>
        <p className="mb-3 font-normal text-brand-grayText">
          {hire_period_days} day hire period
        </p>
        <div className="flex flex-col space-y-2">
          {!allowed_on_road && (
            <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 w-fit">
              <AnmationAlert warning />
              <span className="text-xs font-medium text-yellow-400">
                Not Allowed On The Road
              </span>
            </div>
          )}
          {!allows_heavy_waste && (
            <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 w-fit">
              <AnmationAlert alert />
              <span className="text-xs font-medium text-red-400">
                Not Suitable for Heavy Waste
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center my-4">
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
    </div>
  );
};

export default CardList;
