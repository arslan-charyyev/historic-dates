// import original module declarations
import "styled-components";

// and extend them
declare module "styled-components" {
  // We could generate the literals using recursive types, but that would be overkill...
  export type FontWeights = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  export interface FontSettings {
    fontSize: string;
    // Other props likes line-height could go here
  }

  // Inspired by https://m3.material.io/styles/color/roles
  export interface AppThemeColors {
    background: string;
    primary: string;
    primaryVariant: string;
    secondary: string;
    surface: string;
  }

  // Inspired by https://m3.material.io/styles/typography/type-scale-tokens
  export interface Typography {
    displayLarge: FontSettings;
    displayMedium: FontSettings;
    displaySmall: FontSettings;

    headlineLarge: FontSettings;
    headlineMedium: FontSettings;
    headlineSmall: FontSettings;

    titleLarge: FontSettings;
    titleMedium: FontSettings;
    titleSmall: FontSettings;

    labelLarge: FontSettings;
    labelMedium: FontSettings;
    labelSmall: FontSettings;

    bodyLarge: FontSettings;
    bodyMedium: FontSettings;
    bodySmall: FontSettings;
  }

  export interface DefaultTheme {
    colors: AppThemeColors;
    typography: Typography;
  }
}

// See: https://styled-components.com/docs/api#usage-with-typescript
import type { CSSProp } from "styled-components";

declare module "react" {
  interface Attributes {
    css?: CSSProp | undefined;
  }
}
