import styled, { AppThemeColors, css, FontWeights, Typography } from "styled-components";

export const Text = styled.span<{
  $color?: keyof AppThemeColors;
  $size?: keyof Typography;
  $weight?: FontWeights;
  $noSelect?: boolean;
  $mono?: boolean;
  $centered?: boolean;
}>`
  ${(props) => css`
    color: ${props.$color ? props.theme.colors[props.$color] : undefined};
    font-size: ${props.theme.typography[props.$size ?? "bodyMedium"]?.fontSize};
    font-weight: ${props.$weight ?? undefined};
    user-select: ${props.$noSelect ? "none" : undefined};
    font-family: ${props.$mono ? '"Reddit Mono Variable", monospaced' : undefined};

    ${props.$centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  `}
`;
