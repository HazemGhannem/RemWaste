import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GridCardSkeleton = () => (
  <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all text-white shadow border-brand-orange bg-white">
    <Skeleton height={160} width="100%" className="rounded-md mb-4" />
    <div className="mb-4">
      <Skeleton width="60%" height={20} className="mb-2" />
      <Skeleton width="40%" height={16} />
    </div>
    <div className="mb-4">
      <Skeleton width="50%" height={24} />
    </div>
    <div className="mb-4">
      <Skeleton height={50} width="100%" />
    </div>
  </div>
);

export default GridCardSkeleton;
