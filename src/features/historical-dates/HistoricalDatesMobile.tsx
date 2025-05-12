import { Text } from "@/core/components/Text";
import { HistoricalCategory } from "@/core/data";
import { CategoryNavArrows } from "@/features/historical-dates/components/CategoryNavArrows";
import { CategoryNavDots } from "@/features/historical-dates/components/CategoryNavDots";
import { EventSlide } from "@/features/historical-dates/components/EventSlide";
import { SelfPlug } from "@/features/historical-dates/components/SelfPlug";
import { Title } from "@/features/historical-dates/components/Title";
import { YearRange } from "@/features/historical-dates/components/YearRange";
import { useCategoryData } from "@/features/historical-dates/utils/category-data";
import { useFadeOnDataChange } from "@/features/historical-dates/utils/fade-on-data-change";
import { useSliderController } from "@/features/historical-dates/utils/slider-controller";
import { useSwiperController } from "@/features/historical-dates/utils/swiper-controller";
import { rgba } from "polished";
import React from "react";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export function HistoricalDatesMobile(props: { data: HistoricalCategory[] }) {
  const categorySlider = useSliderController(props.data);
  const { activeCategory, yearStart, yearEnd } = useCategoryData(props.data, categorySlider);
  const { fadeRef, displayData: displayCategory } = useFadeOnDataChange(activeCategory);
  const swiper = useSwiperController(displayCategory);

  return (
    <div css={styles.root}>
      <SelfPlug css={styles.selfPlug} />
      <div css={styles.titleContainer}>
        {/* A div wrapper is used here to avoid this issue:
         https://css-tricks.com/multi-line-padded-text/ */}
        <Title />
      </div>
      <YearRange css={styles.yearRange} start={yearStart} end={yearEnd} />
      <div css={styles.fadeContainer} ref={fadeRef}>
        <Text $weight={700} $color={"primaryVariant"} $noSelect>
          {displayCategory.name}
        </Text>
        <div>
          {/*Div wrapper here absorbs padding*/}
          <Divider />
        </div>
        <Swiper
          grabCursor
          onBeforeInit={swiper.onBeforeInit}
          spaceBetween="32px"
          slidesPerView={"auto"}
        >
          {displayCategory.events.map((event, index) => (
            <SwiperSlide css={styles.eventSlide} key={index}>
              <EventSlide event={event}></EventSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div css={styles.categoryNavControls}>
        <CategoryNavArrows css={styles.categoryNavArrows} controller={categorySlider} />
        <CategoryNavDots css={styles.categoryNavDots} controller={categorySlider} />
      </div>
    </div>
  );
}

const Divider = styled.div`
  // Layout
  width: 100%;
  margin: 16px 0;

  // Looks
  height: 1px;
  background-color: ${(props) => rgba(props.theme.colors.primaryVariant, 0.2)};
`;

const styles = {
  root: css`
    //padding-top: 48px;
    padding-bottom: 8px;

    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;

    --horizontal-padding: 24px;

    & > * {
      padding: 0 var(--horizontal-padding);
    }
  `,
  selfPlug: css`
    margin: 8px 0;
  `,
  titleContainer: css`
    margin-top: 8px;
  `,
  fadeContainer: css`
    flex-grow: 1;
    // It's not clear from mock design how the layout should look like when
    // the event description exceeds available height. For now we just let it scroll internally.
    overflow-y: auto;

    // We need to cancel this container's padding and propagate padding to children
    // so that swiper's slides can scroll from edge to edge
    padding: 0;

    & > * {
      padding: 0 var(--horizontal-padding);
    }
  `,
  yearRange: css`
    gap: 16px;

    margin: 48px 0;
  `,
  eventSlide: css`
    width: 192px;
  `,
  categoryNavControls: css`
    margin-top: 16px;

    display: flex;
    align-items: center;
  `,
  categoryNavArrows: css`
    justify-self: flex-start;
    //position: absolute;
  `,
  categoryNavDots: css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,
};
