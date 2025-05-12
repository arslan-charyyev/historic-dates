import { HistoricalCategory } from "@/core/data";
import type { SliderController } from "@/features/historical-dates/utils/slider-controller";
import { useMemo } from "react";

/**
 * A hook for deriving stateful UI info from source data
 */
export function useCategoryData(data: HistoricalCategory[], slider: SliderController) {
  const activeCategory = useMemo(() => data[slider.currentIndex], [slider.currentIndex]);

  const [yearStart, yearEnd]: [number, number] = useMemo(() => {
    const sortedEvents = activeCategory.events.sort((a, b) => a.year - b.year);
    // The assignment states that there are at least 2 slides
    const first = sortedEvents.at(0);
    const last = sortedEvents.at(-1);

    return [first?.year ?? 0, last?.year ?? 0];
  }, [activeCategory]);

  return {
    yearStart,
    yearEnd,
    activeCategory,
  };
}
