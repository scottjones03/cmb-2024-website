import { createTheme } from "@mui/material/styles";
const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#3f51b5",  // adjust color to your preference
      contrastText: "#000"
    },
    secondary: {
      main: "#000000",  // adjust color to your preference
      contrastText: "#000"
    },
    tertiary: defaultTheme.palette.augmentColor({
      color: {
        main: "#000000",
        contrastText: "#000"
      },
      name: "tertiary"
    })
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    fontFamily: "Classico, Arial",
    fontSize: 15,
    h1: {
      fontWeight: 400
    },
    h2: {
      fontWeight: 400
    },
    h3: {
      fontWeight: 400
    },
    h4: {
      fontWeight: 400
    },
    h5: {
      fontWeight: 400
    },
    h6: {
      fontWeight: 400
    }
  }
});

export default theme;
