import { createTheme } from "@mui/material/styles";

/** A custom theme for app **/
const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    primary: {
      main: "#EAEAEA",
      light: "#A0A0A0",
      dark: "#AFB1B6", // ?
    },
    secondary: {
      main: "#2c0777",
    },
    success: {
      main: "#008042",
    },
    text: {
      primary: "#515151",
      secondary: "#2c0777",
      disabled: "#A0A0A0",
    },
  },
  spacing: (factor: number = 1) => `${0.5 * factor}rem`, // 0.5 * 2rem = 1rem = 16px
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
