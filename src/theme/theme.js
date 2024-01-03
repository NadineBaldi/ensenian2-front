import { createTheme } from "@mui/material/styles";

const primaryColor = "#4E35F2";
const fontFamily = "Montserrat";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: "#F2F2F2",
    },
    tertiary: {
      main: "#614ED9",
    },
    black: {
      main: "#000000",
    },
    green: {
      main: "#75D966",
    },
    skyblue: {
      main: "#80F1EA",
    },
  },
  typography: {
    fontFamily,
    title: {
      fontSize: 30,
      fontWeight: "bold",
      fontFamily,
    },
    subtitle: {
      fontSize: 14,
      fontFamily,
    },
    subtitle2: {
      fontSize: 16,
      fontFamily,
      fontWeight: "semibold",
    },
    state: {
      fontSize: 12,
      fontFamily,
    },
  },
});
