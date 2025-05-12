import { CircleButton } from "@/core/components/CircleButton.tsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@/core/components/Icons.tsx";
import { Text } from "@/core/components/Text.tsx";
import { type AppDevice, useAppDevice } from "@/core/device";
import { ClassProps } from "@/core/types.ts";
import type { SliderController } from "@/features/historical-dates/utils/slider-controller.ts";
import React from "react";
import styled from "styled-components";

export function CategoryNavArrows(props: { controller: SliderController } & ClassProps) {
  const { controller } = props;
  const device = useAppDevice();

  return (
    <div className={props.className}>
      <Text $size="labelMedium" $color="primaryVariant" $noSelect $mono>
        {pad(controller.currentIndex + 1)}/{pad(controller.totalCount)}
      </Text>
      <NavButtonContainer $device={device}>
        <NavButton $device={device} disabled={!controller.hasPrev} onClick={controller.goPrev}>
          <ChevronLeftIcon />
        </NavButton>
        {/* gap */}
        <NavButton $device={device} disabled={!controller.hasNext} onClick={controller.goNext}>
          <ChevronRightIcon />
        </NavButton>
      </NavButtonContainer>
    </div>
  );
}

type DeviceProps = { $device: AppDevice };

const NavButton = styled(CircleButton).attrs<DeviceProps>((props) => ({
  $variant: "outlined",
  $size: props.$device === "mobile" ? "small" : "medium",
}))<DeviceProps>``;

const NavButtonContainer = styled.div<DeviceProps>`
  --spacing: ${(props) => (props.$device === "mobile" ? 8 : 16)}px;

  margin-top: var(--spacing);

  display: flex;
  align-items: flex-start;
  gap: var(--spacing);
`;

function pad(n: number) {
  return n.toString().padStart(2, "0");
}
