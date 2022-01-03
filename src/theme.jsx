import { createTheme } from "@mui/material/styles";
import { cyan, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[900]
    },
    secondary: {
      main: teal[500]
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    h1: {
      fontWeight: 500
    },
    h2: {
      fontWeight: 500
    },
    h3: {
      fontWeight: 500
    },
    h4: {
      fontWeight: 500
    },
    h5: {
      fontWeight: 500
    },
    h6: {
      fontWeight: 500
    }
  }
});

export default theme;
