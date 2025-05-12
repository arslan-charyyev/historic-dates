import styled, {
  AppThemeColors,
  css,
  FontSettings,
  FontWeights,
  Typography,
} from "styled-components";

export const Text = styled.span.attrs<{
  $color?: keyof AppThemeColors;
  $size?: keyof Typography;
  $weight?: FontWeights;
  $noSelect?: boolean;
  $mono?: boolean;
  $centered?: boolean;
  $fontSettings?: FontSettings;
}>((props) => ({
  $fontSettings: props.theme.typography[props.$size ?? "bodyMedium"],
}))`
  ${(props) => {
    const fontSettings = props.theme.typography[props.$size ?? "bodyMedium"];

    return css`
      color: ${props.$color ? props.theme.colors[props.$color] : undefined};
      font-size: ${fontSettings?.fontSize};
      font-weight: ${props.$weight ?? fontSettings?.fontWeight};
      user-select: ${props.$noSelect ? "none" : undefined};
      font-family: ${props.$mono ? '"Reddit Mono Variable", monospaced' : undefined};

      ${props.$centered &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    `;
  }}
`;
