import React, { StrictMode } from "react";
import { useAppLocale } from "@/core/locale.ts";
import { ThemeProvider } from "styled-components";
import { useAppTheme } from "@/core/theme.ts";
import { useAppDevice } from "@/core/device.ts";
import { GlobalAppStyle } from "@/core/styles.ts";
import { HistoricalDatesDesktop } from "@/features/historical-dates/HistoricalDatesDesktop";
import { HistoricalDatesMobile } from "@/features/historical-dates/HistoricalDatesMobile.tsx";
import { mockData } from "@/core/data.ts";

export function App() {
  const locale = useAppLocale();
  const theme = useAppTheme();
  const device = useAppDevice();

  return (
    <StrictMode>
      <title>{locale.historicDates.title}</title>
      <ThemeProvider theme={theme}>
        <GlobalAppStyle />
        {device === "desktop" ? (
          <HistoricalDatesDesktop data={mockData} />
        ) : (
          <HistoricalDatesMobile data={mockData} />
        )}
      </ThemeProvider>
    </StrictMode>
  );
}
