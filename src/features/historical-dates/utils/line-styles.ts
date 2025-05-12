import { css } from "styled-components";
import { rgba } from "polished";

// Somebody seems to be a big fan of them lines...

const sharedLineStyle = css`
  --line-thickness: 1px;
  --line-color: ${(props) => rgba(props.theme.colors.primaryVariant, 0.1)};

  &::before {
    content: "";
    position: absolute;
    background-color: var(--line-color);
  }
`;

export const verticalLines = css`
  ${sharedLineStyle};

  position: relative; // Extends center line to full height

  // Left and right border lines
  border-style: none solid;
  border-width: 0 var(--line-thickness);
  border-color: transparent var(--line-color);

  // Center line

  &::before {
    top: 0;
    left: 50%;
    width: var(--line-thickness);
    height: 100%;
    transform: translateX(-50%);
  }
`;

export const horizontalLines = css`
  ${sharedLineStyle};

  // Center line

  &::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: var(--line-thickness);
    transform: translateY(-50%);
  }
`;
