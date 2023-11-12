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
  },
});
