import { useState } from "react";

/**
 * A hook for working with category sliders like the `CategoryDial` or `NavControls`.
 */
export function useSliderController(data: unknown[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return {
    currentIndex: currentIndex,
    totalCount: data.length,
    hasPrev: currentIndex > 0,
    hasNext: currentIndex < data.length - 1,
    // Math.min/max is used to clamp indices to array bounds
    goPrev: () => setCurrentIndex((index) => Math.max(index - 1, 0)),
    goNext: () => setCurrentIndex((index) => Math.min(index + 1, data.length - 1)),
    goTo: (index: number) => setCurrentIndex(Math.min(Math.max(index, 0), data.length - 1)),
  };
}

export type SliderController = ReturnType<typeof useSliderController>;
