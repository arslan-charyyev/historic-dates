import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";

/**
 * A hook for working with the swiper.js library
 */
export function useSwiperController(data: unknown) {
  const swiperRef = useRef<SwiperType>(undefined);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  function onBeforeInit(swiper: SwiperType) {
    swiperRef.current = swiper;
  }

  function onSlideChange(swiper: SwiperType) {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }

  useEffect(() => {
    // Reset swiper when data source changes
    swiperRef.current?.slideTo(0, 0);
  }, [data]);

  return {
    isBeginning,
    isEnd,
    slidePrev: () => swiperRef.current?.slidePrev(),
    slideNext: () => swiperRef.current?.slideNext(),
    onBeforeInit,
    onSlideChange,
  };
}
