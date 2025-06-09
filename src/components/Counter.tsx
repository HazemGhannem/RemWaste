import React, { useEffect, useState } from "react";

type CounterProps = {
  count: number;
  delay?: number; 
  duration?: number;
};

const Counter: React.FC<CounterProps> = ({
  count,
  delay = 200,
  duration = 500,
}) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      setDisplayCount(0);
      return;
    }
    const startTimeout = setTimeout(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / count));
      const interval = setInterval(() => {
        start += 1;
        setDisplayCount(start);
        if (start >= count) {
          clearInterval(interval);
        }
      }, stepTime);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [count, delay, duration]);

  return (
    <div className="text-brand-grayText text-sm">
      There {count === 1 ? "is" : "are"} {displayCount} product
      {count === 1 ? "" : "s"}
    </div>
  );
};

export default Counter;
