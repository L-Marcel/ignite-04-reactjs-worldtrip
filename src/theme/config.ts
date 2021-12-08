import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    black: "#000000",
    heading: "#47585B",
    info: "#999999",
    white: "#FFFFFF",
    whiteHeading: "#F5F8FA",
    whiteInfo: "#DADADA",
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: "white",
      },
    }
  },
});