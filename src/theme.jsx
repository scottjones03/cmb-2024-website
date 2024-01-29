import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#18114A",
      contrastText: "#000"
    },
    secondary: {
      main: "#18114A", 
      contrastText: "#000"
    },
    tertiary: {
      main: "#4E457D", 
      contrastText: "#000"
    },
    text: {
      primary: "#4E457D", 
      secondary: "#000080",
    },
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
    fontFamily: "ITC Benguiat, Arial", // Use ITC Benguiat font
    fontSize: 15,
    h1: {
      fontWeight: 400,
      color: "#18114A" 
    },
    h2: {
      fontWeight: 400,
      color: "#18114A" 
    },
    h3: {
      fontWeight: 400,
      color: "#4E457D" 
    },
    h4: {
      fontWeight: 400,
      color: "#4E457D" 
    },
    h5: {
      fontWeight: 400,
      color: "#4E457D" 
    },
    h6: {
      fontWeight: 400,
      color: "#4E457D" 
    }
  }
});

export default theme;
