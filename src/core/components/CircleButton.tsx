import { rgba } from "polished";
import styled, { type DefaultTheme } from "styled-components";

export const CircleButton = styled.button.attrs<{
  $variant?: "outlined" | "raised";
  $hidden?: boolean;
  $color?: keyof DefaultTheme["colors"];
  $size?: "small" | "medium" | "large";
}>((props) => ({
  $variant: props.$variant ?? "outlined",
}))`
  padding: 0;
  border-radius: 50%;
  border: ${(props) =>
    props.$variant === "outlined"
      ? `1px solid ${rgba(props.theme.colors.primaryVariant, 0.5)}`
      : "none"};
  box-shadow: ${(props) =>
    props.$variant === "raised"
      ? `0 0 5px ${rgba(props.theme.colors[props.$color ?? "primaryVariant"], 0.1)}`
      : "none"};

  min-width: ${({ $size }) => ($size === "large" ? 48 : $size === "small" ? 32 : 40)}px;
  aspect-ratio: 1;
  cursor: pointer;

  visibility: ${(props) => (props.$hidden ? "hidden" : undefined)};

  background-color: ${(props) =>
    props.$variant === "raised" ? props.theme.colors.surface : "transparent"};

  // Center child
  display: flex;
  justify-content: center;
  align-items: center;

  // Animate background on hover
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.surface};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  * {
    // Default style for child SVG icons
    position: absolute;
    fill: ${(props) => props.theme.colors[props.$color ?? "primaryVariant"]};
    color: ${(props) => props.theme.colors[props.$color ?? "primaryVariant"]};

    width: 24px;
    height: auto;
  }
`;
