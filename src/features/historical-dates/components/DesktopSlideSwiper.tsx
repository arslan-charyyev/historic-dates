import { CircleButton } from "@/core/components/CircleButton";
import { ChevronLeftIcon, ChevronRightIcon } from "@/core/components/Icons";
import type { HistoricalEvent } from "@/core/data";
import { EventSlide } from "@/features/historical-dates/components/EventSlide";
import { useFadeOnDataChange } from "@/features/historical-dates/utils/fade-on-data-change";
import { useSwiperController } from "@/features/historical-dates/utils/swiper-controller";
import React from "react";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export function DesktopSlideSwiper(props: { events: HistoricalEvent[] }) {
  const { fadeRef, displayData } = useFadeOnDataChange(props.events);
  const swiperController = useSwiperController(displayData);

  return (
    <div css={styles.root} ref={fadeRef}>
      <NavButton onClick={swiperController.slidePrev} $hidden={swiperController.isBeginning}>
        <ChevronLeftIcon />
      </NavButton>
      <Swiper
        grabCursor
        onBeforeInit={swiperController.onBeforeInit}
        onSlideChange={swiperController.onSlideChange}
        onFromEdge={swiperController.onSlideChange}
        onToEdge={swiperController.onSlideChange}
        spaceBetween="64px"
        slidesPerView="auto"
      >
        {displayData.map((event, index) => (
          <SwiperSlide css={styles.slide} key={index}>
            <EventSlide event={event}></EventSlide>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavButton onClick={swiperController.slideNext} $hidden={swiperController.isEnd}>
        <ChevronRightIcon />
      </NavButton>
    </div>
  );
}

const styles = {
  root: css`
    display: flex;
    align-items: center;
  `,
  slide: css`
    width: 256px;
    min-height: 100px;
  `,
};

const NavButton = styled(CircleButton).attrs({
  $size: "small",
  $variant: "raised",
  $color: "primary",
})`
  margin: 16px;
`;
