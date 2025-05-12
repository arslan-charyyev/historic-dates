import { type AppDevice, useAppDevice } from "@/core/device";
import { AppThemeColors, DefaultTheme, Typography } from "styled-components";

type ThemeMode = "light" | "dark";

const colors: Record<ThemeMode, AppThemeColors> = {
  light: {
    background: "#F4F5F9",
    primary: "#3877EE",
    primaryVariant: "#42567A",
    secondary: "#EF5DA8",
    surface: "#FFFFFF",
  },
  dark: {
    background: "#222222",
    primary: "#3877EE",
    primaryVariant: "#42567A",
    secondary: "#EF5DA8",
    surface: "#000000",
  },
};

const typography: Record<AppDevice, Typography> = {
  desktop: {
    displayLarge: { fontSize: "8rem" },
    displayMedium: { fontSize: "6rem" },
    displaySmall: { fontSize: "4rem" },

    headlineLarge: { fontSize: "2.5rem" },
    headlineMedium: { fontSize: "2rem" },
    headlineSmall: { fontSize: "1.5rem" },

    titleLarge: { fontSize: "1rem" },
    titleMedium: { fontSize: "1rem" },
    titleSmall: { fontSize: "1rem" },

    labelLarge: { fontSize: "1.2rem" },
    labelMedium: { fontSize: "1rem" },
    labelSmall: { fontSize: "0.8rem" },

    bodyLarge: { fontSize: "1.1rem" },
    bodyMedium: { fontSize: "1rem" },
    bodySmall: { fontSize: "0.9rem" },
  },
  mobile: {
    displayLarge: { fontSize: "4rem" },
    displayMedium: { fontSize: "3.5rem" },
    displaySmall: { fontSize: "3rem" },

    headlineLarge: { fontSize: "1.75rem" },
    headlineMedium: { fontSize: "1.5rem" },
    headlineSmall: { fontSize: "1.25rem" },

    titleLarge: { fontSize: "1rem" },
    titleMedium: { fontSize: "1rem" },
    titleSmall: { fontSize: "1rem" },

    labelLarge: { fontSize: "1.2rem" },
    labelMedium: { fontSize: "1rem" },
    labelSmall: { fontSize: "0.8rem" },

    bodyLarge: { fontSize: "1rem" },
    bodyMedium: { fontSize: "0.9rem" },
    bodySmall: { fontSize: "0.8rem" },
  },
};

export function useAppTheme(): DefaultTheme {
  // A dynamic logic for switching between dark and light themes
  // can be implemented here
  const themeMode: ThemeMode = "light";

  const device = useAppDevice();

  return {
    colors: colors[themeMode],
    typography: typography[device],
  };
}
