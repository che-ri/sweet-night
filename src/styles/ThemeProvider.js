import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import media from "./theme/media";
import { GlobalStyle } from "./globalStyle";

export default function GlobalThemeProvider({ children }) {
  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
