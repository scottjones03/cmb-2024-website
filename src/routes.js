import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import WorkForUsPage from "./pages/WorkForUsPage";
import theme from "./theme";

export default (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work-for-us" component={WorkForUsPage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);
