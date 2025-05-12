import { Text } from "@/core/components/Text";
import type { HistoricalEvent } from "@/core/data";
import type { ClassProps } from "@/core/types";
import React from "react";
import styled from "styled-components";

export function EventSlide(props: { event: HistoricalEvent } & ClassProps) {
  // We must not wrap the content with SwiperSlide here, otherwise it will break the swiper
  return (
    <Root className={props.className}>
      <Text $size={"labelLarge"} $color={"primary"} $weight={700} $noSelect>
        {props.event.year}
      </Text>
      <Text $size={"bodyMedium"} $color={"primaryVariant"} $weight={500} $noSelect>
        {props.event.description}
      </Text>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
