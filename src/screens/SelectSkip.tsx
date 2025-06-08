import React, { useState } from "react";
import Card from "../components/Card";
import { Skip } from "../types/Type";
import SelectedAlert from "../components/SelectedAlert";
import NavBar from "../components/NavBar";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

const SelectSkip = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const { skips, loading, error } = useFetch();

  const handleSelect = (skip: Skip) => {
    if (!skip.allows_heavy_waste) return;

    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 pb-32">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Select the skip size that best suits your needs
        </p>
        {loading && <Loader />}
        {error && (
          <p className="text-red-500 text-center mb-8">error fetching data</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skips.map((skip: Skip) => (
            <Card
              key={skip.id}
              skip={skip}
              onSelect={handleSelect}
              selected={skip.id === selectedSkip?.id}
            />
          ))}
        </div>
        {selectedSkip && <SelectedAlert selectedSkip={selectedSkip} />}
      </div>
    </section>
  );
};

export default SelectSkip;
