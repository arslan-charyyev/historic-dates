import { HistoricalCategory } from "@/core/data.ts";
import { CategoryDial } from "@/features/historical-dates/components/CategoryDial";
import { CategoryNavArrows } from "@/features/historical-dates/components/CategoryNavArrows.tsx";
import { DesktopSlideSwiper } from "@/features/historical-dates/components/DesktopSlideSwiper";
import { SelfPlug } from "@/features/historical-dates/components/SelfPlug";
import { Title } from "@/features/historical-dates/components/Title.tsx";
import { YearRange } from "@/features/historical-dates/components/YearRange.tsx";
import { useCategoryData } from "@/features/historical-dates/utils/category-data";
import { horizontalLines, verticalLines } from "@/features/historical-dates/utils/line-styles.ts";
import { useDialController } from "@/features/historical-dates/utils/dial-controller.ts";
import React from "react";
import styled, { css } from "styled-components";

export function HistoricalDatesDesktop(props: { data: HistoricalCategory[] }) {
  const dialController = useDialController(props.data);
  const { activeCategory, yearStart, yearEnd } = useCategoryData(props.data, dialController);

  return (
    <Root>
      <BackgroundContainer>
        <SelfPlug css={styles.selfPlug} />
        <DialContainer>
          <TitleContainer>
            <Title css={styles.title} />
          </TitleContainer>
          <YearRange css={styles.yearRange} start={yearStart} end={yearEnd} />
          <CategoryNavArrows controller={dialController} css={styles.slideControls} />
          <CategoryDial
            controller={dialController}
            items={props.data}
            radius={192}
            selectedAngle={90 / 4}
          />
        </DialContainer>
        <DesktopSlideSwiper events={activeCategory.events} />
      </BackgroundContainer>
    </Root>
  );
}

const Root = styled.div`
  // Extends vertical line to full screen height.
  // Regular 'height' prop causes undesirable vertical scroll.
  min-height: 100%;

  display: flex;
  justify-content: center;
`;

const BackgroundContainer = styled.div`
  width: 1024px;
  max-width: 100%;
  overflow-x: hidden;
  padding-bottom: 40px;

  ${verticalLines}
`;

const DialContainer = styled.div`
  margin: 48px 0;

  position: relative;

  & > * {
    // Apply uniform horizontal padding to all children
    padding: 0 64px;
  }

  ${horizontalLines}
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 0;

  // Is reused to offset text
  --gradient-strip-width: 4px;

  // Gradient strip
  border-left: var(--gradient-strip-width) solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
`;

const styles = {
  selfPlug: css`
    margin: 8px;
  `,
  title: css`
    // A trick that allows us to pad the parent without subtracting the border width
    display: inline-block;
    transform: translateX(calc(var(--gradient-strip-width) * -1));
  `,
  yearRange: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  slideControls: css`
    position: absolute;
    bottom: 0;
  `,
};
