import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardListSkeleton = () => (
  <div className="w-full max-w-2xl flex border-2 border-brand-orange bg-white rounded-lg p-4 shadow flex-col md:flex-row gap-4">
    <Skeleton
      height={192}
      width={240}
      className="rounded-lg"
      baseColor="#ccc"
      highlightColor="#ddd"
    />
    <div className="flex-1 space-y-3">
      <Skeleton height={24} width="60%" />
      <Skeleton height={16} width="80%" className="mt-4" />
      <Skeleton height={42} width="30%" className="mt-4" />
      <Skeleton height={42} width="80%" className="mt-4" />
    </div>
  </div>
);

export default CardListSkeleton;

