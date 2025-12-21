"use client";

import { useState, useEffect } from "react";

import { useCarousel } from "@/components/ui/carousel";

const CarouselIndicators = ({
  variant = "dots-count",
}: {
  variant?: "dots-count" | "dots-slash";
}) => {
  const { api } = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    setSnapCount(api.scrollSnapList().length);
    onSelect();

    api.on("select", onSelect);
    api.on("reInit", () => {
      setSnapCount(api.scrollSnapList().length);
      onSelect();
    });

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!api || snapCount <= 1) return null;

  return (
    <div className="mt-2 flex items-center justify-center gap-1 text-stone-700">
      <div className="flex justify-center items-center gap-2">
        {Array.from({ length: snapCount }).map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={[
              "transition-all opacity-60 bg-stone-500 ",
              i === selectedIndex
                ? "h-3 w-6 rounded-full opacity-100"
                : "h-1.5 w-1.5 rounded-full",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselIndicators;
