import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/reddit-mono";
import "swiper/css";

export const GlobalAppStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;

    font-family: 'Montserrat Variable', sans-serif;
    background: ${(props) => props.theme.colors.background};
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;
