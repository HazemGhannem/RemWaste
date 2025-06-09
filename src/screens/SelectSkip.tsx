import React, { useState, Suspense } from "react";
import { Skip } from "../types/Type";
import NavBar from "../components/NavBar";
import { useFetch } from "../hooks/useFetch";
import ListIcon from "../assets/svgs/ListIcon";
import GridIcon from "../assets/svgs/GridIcon";
import Counter from "../components/Counter";
import Loader from "../components/Loader";

// Lazy load Cards and SelectedAlert only
const Cards = React.lazy(() => import("../components/cards/Cards"));
const SelectedAlert = React.lazy(() => import("../components/SelectedAlert"));

const SelectSkip = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const { skips, loading, error } = useFetch();
  const [viewMode, setViewMode] = useState<"list" | "card">("card");

  const handleSelect = (skip: Skip) => {
    if (!skip.allows_heavy_waste) return;

    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  return (
    <section className="max-w-8xl mx-auto px-4 py-8">
      <NavBar />
      <div className="border-t-2 border-b-2 border-brand-grayText py-6 mb-8 w-full bg-[#FFA500] opacity-70">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">
          Choose Your Skip Size
        </h2>
        <p className="text-brand-grayText text-center">
          Select the skip size that best suits your needs
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-32">
        {error && (
          <p className="text-red-500 text-center mb-8">error fetching data</p>
        )}
        <div className="flex flex-col gap-y-2">
          <div className="flex space-x-4 mb-4">
            <div onClick={() => setViewMode("card")} className="cursor-pointer">
              <GridIcon selected={viewMode === "card"} size={20} />
            </div>
            <div onClick={() => setViewMode("list")} className="cursor-pointer">
              <ListIcon selected={viewMode === "list"} size={20} />
            </div>
            <Counter count={skips?.length} duration={500} delay={200} />
          </div>

          <Suspense fallback={<Loader />}>
            <Cards
              viewMode={viewMode}
              skips={skips}
              onSelect={handleSelect}
              loading={loading}
              selectedSkip={selectedSkip}
            />
          </Suspense>
        </div>

        {selectedSkip && (
          <Suspense fallback={<Loader />}>
            <SelectedAlert selectedSkip={selectedSkip} />
          </Suspense>
        )}
      </div>
    </section>
  );
};

export default SelectSkip;
