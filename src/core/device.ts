import { useMediaQuery } from "react-responsive";

export type AppDevice = "desktop" | "mobile";

export function useAppDevice(): AppDevice {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return isDesktop ? "desktop" : "mobile";
}
