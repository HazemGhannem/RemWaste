import React from "react";
import { motion} from "framer-motion";
import { Skip } from "../../types/Type";
import CardList from "./CardList";
import GridCard from "./GridCard";
import CardListSkeleton from "../cardsSkeleton/CardListSkeleton";
import GridCardSkeleton from "../cardsSkeleton/GridCardSkeleton";

type CardsProps = {
  viewMode?: "list" | "card";
  loading?: boolean;
  skips: Skip[];
  selectedSkip?: Skip | null;
  onSelect: (skip: Skip) => void;
};

const cardVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -50, scale: 0.95 },
};

const Cards: React.FC<CardsProps> = ({
  viewMode = "card",
  loading = false,
  skips,
  selectedSkip,
  onSelect,
}) => {
  const CardComponent = viewMode === "list" ? CardList : GridCard;
  const SkeletonComponent =
    viewMode === "list" ? CardListSkeleton : GridCardSkeleton;

  return (
    <div
      key={viewMode}
      className={
        viewMode === "list"
          ? "w-full space-y-4"
          : "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full"
      }
    >
      {loading
        ? Array(6)
            .fill(0)
            .map((_, i) => <SkeletonComponent key={i} />)
        : skips.map((skip, index) => (
            <motion.div
              key={skip.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
            >
              <CardComponent
                skip={skip}
                onSelect={onSelect}
                selected={skip.id === selectedSkip?.id}
              />
            </motion.div>
          ))}
    </div>
  );
};

export default Cards;
