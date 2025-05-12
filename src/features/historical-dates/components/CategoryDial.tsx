import { CircleButton } from "@/core/components/CircleButton";
import { Text } from "@/core/components/Text";
import type { HistoricalCategory } from "@/core/data";
import type { SliderController } from "@/features/historical-dates/utils/slider-controller";
import { gsap } from "gsap";
import { rgba } from "polished";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export function CategoryDial(props: {
  slides: SliderController;
  items: HistoricalCategory[];
  radius: number;
  selectedAngle: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<HTMLElement[]>([]);

  // Position items evenly around the circumference
  useEffect(() => {
    const xCenter = props.radius;
    const yCenter = props.radius;
    const n = props.items.length;
    const angleStepRad = (2 * Math.PI) / n;
    const startAngleRad = -Math.PI / 2; // start at top

    props.items.forEach((_, i) => {
      const angleRad = startAngleRad + i * angleStepRad;
      // Convert polar to cartesian
      const x = xCenter + props.radius * Math.cos(angleRad);
      const y = yCenter + props.radius * Math.sin(angleRad);
      const buttonContainer = buttonRefs.current[i];
      gsap.set(buttonContainer, {
        x: x - buttonContainer.offsetWidth / 2,
        y: y - buttonContainer.offsetHeight / 2,
        rotation: -props.selectedAngle, // keep text upright
      });
    });

    // Initial dial rotation so item 0 is at targetAngle
    gsap.set(containerRef.current, { rotation: props.selectedAngle });
  }, [props.items, props.radius, props.selectedAngle]);

  // Handle click: rotate container to bring clicked item to targetAngle
  const rotateDialTo = (index: number) => {
    const container = containerRef.current;
    const n = props.items.length;
    const angleStep = 360 / n;
    const currentRotation = (gsap.getProperty(container, "rotation") as number) ?? 0;

    // Compute absolute angle of clicked item
    const itemAngle = index * angleStep;

    // Compute delta to bring itemAngle + newRotation = targetAngle
    let rotationDelta = props.selectedAngle - itemAngle - currentRotation;

    // Normalize to [0, 360]
    rotationDelta = ((rotationDelta % 360) + 360) % 360;

    // Select shortest direction
    // 0   < delta < 180  -->  rotate clockwise
    // 180 < delta < 360  -->  rotate counter-clockwise
    if (rotationDelta > 180) rotationDelta -= 360;

    gsap.to(container, {
      rotation: currentRotation + rotationDelta,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: function () {
        const rotation = gsap.getProperty(container, "rotation");
        buttonRefs.current.forEach((button) => {
          // Counteract rotation of dial itself
          gsap.set(button, { rotation: -rotation });
        });
      },
    });
  };

  useEffect(() => {
    rotateDialTo(props.slides.currentIndex);
  }, [props.slides.currentIndex]);

  return (
    // Root div wrapper absorbs padding set by parent
    <div>
      <CircleContainer
        ref={containerRef}
        style={{ width: props.radius * 2, height: props.radius * 2 }}
      >
        {props.items.map((item, i) => (
          <DialButtonContainer
            key={i}
            $selected={i === props.slides.currentIndex}
            ref={(element) => {
              if (!element) return;
              buttonRefs.current[i] = element;
            }}
          >
            <DialButton onClick={() => props.slides.goTo(i)}>
              <Text $centered $noSelect>
                {i + 1}
              </Text>
              <CategoryTitle>{item.name}</CategoryTitle>
            </DialButton>
          </DialButtonContainer>
        ))}
      </CircleContainer>
    </div>
  );
}

const CircleContainer = styled.div`
  border: 1px solid ${(props) => rgba(props.theme.colors.primaryVariant, 0.2)};
  border-radius: 50%;

  margin: auto;
`;

const DialButton = styled(CircleButton).attrs({
  $variant: "outlined",
  $color: "primaryVariant",
})`
  position: relative;

  // animate scale and color
  transition:
    transform 0.3s,
    background-color 0.3s;
`;

const CategoryTitle = styled(Text).attrs({
  $color: "primaryVariant",
  $weight: 700,
  $noSelect: true,
})`
  position: absolute;
  left: 100%; // Positions the label to the right of the button
  top: 50%;
  transform: translateY(-50%);

  margin-left: 16px; // Gap between button and label

  white-space: nowrap;

  // Center text vertically
  display: flex;
  align-items: center;

  transition: opacity 0.3s;
`;

const DialButtonContainer = styled.div<{ $selected?: boolean }>`
  position: absolute;

  --selected-color: ${(props) => props.theme.colors.background};

  // Defining child's properties here allows us to reuse container's $selected prop

  & ${CategoryTitle} {
    opacity: ${(props) => (props.$selected ? 1 : 0)};
  }

  & ${DialButton} {
    // start small and dark
    transform: scale(${(props) => (props.$selected ? 1 : 0.15)});
    background-color: ${(props) =>
      props.$selected ? "var(--selected-color)" : props.theme.colors.primaryVariant};
  }

  // Attach hover to container to keep hover area from scaling down with the button

  &:hover ${DialButton} {
    transform: scale(1);
    background-color: var(--selected-color);
  }
`;
