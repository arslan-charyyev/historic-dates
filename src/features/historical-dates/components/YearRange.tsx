import { Text } from "@/core/components/Text.tsx";
import type { ClassProps } from "@/core/types";
import gsap from "gsap";
import React, { type ComponentProps, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

export function YearRange(
  props: ClassProps & {
    start: number;
    end: number;
    textProps?: ComponentProps<typeof Year>;
  },
) {
  const displayStart = useAnimatedNumber(props.start);
  const displayEnd = useAnimatedNumber(props.end);

  return (
    <div css={styles.root} className={props.className}>
      <Year $color="primary">{displayStart}</Year>
      <Year $color="secondary">{displayEnd}</Year>
    </div>
  );
}

function useAnimatedNumber(number: number) {
  const [displayNumber, setDisplayNumber] = useState(number);
  const numberRef = useRef({ value: number });

  useEffect(() => {
    const tween = gsap.to(numberRef.current, {
      value: number,
      duration: 1,
      ease: "power1.out",
      onUpdate: () => {
        setDisplayNumber(Math.round(numberRef.current.value));
      },
    });

    return () => {
      tween.kill();
    };
  }, [number]);

  return displayNumber;
}

const Year = styled(Text).attrs({
  $size: "displayLarge",
  $weight: 900,
  $noSelect: true,
  $mono: true,
})``;

const styles = {
  root: css`
    display: flex;
    justify-content: center;
    gap: 32px;
  `,
};
