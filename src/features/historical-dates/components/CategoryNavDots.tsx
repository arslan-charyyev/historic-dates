import { ClassProps } from "@/core/types.ts";
import type { DialController } from "@/features/historical-dates/utils/dial-controller.ts";
import { rgba } from "polished";
import React, { useMemo } from "react";
import styled from "styled-components";

export function CategoryNavDots(props: { controller: DialController } & ClassProps) {
  const { controller } = props;

  // [0, 1, 2, ..., controller.totalCount-1]
  const indices = useMemo(
    () => Array.from({ length: controller.totalCount }, (_, i) => i),
    [controller.totalCount],
  );

  return (
    <Root className={props.className}>
      {indices.map((index) => (
        <DotButton
          key={index}
          onClick={() => controller.goTo(index)}
          $selected={controller.currentIndex == index}
        />
      ))}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  gap: 12px;
`;

const DotButton = styled.button<{
  $selected: boolean;
}>`
  padding: 0;

  aspect-ratio: 1;
  width: 8px;

  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    rgba(props.theme.colors.primaryVariant, props.$selected ? 1 : 0.4)};

  transition: background-color 0.3s;
`;
