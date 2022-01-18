import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  HomePage,
  WorkForUsPage,
  TicketsPage,
  TnCPage,
  CommitteePage
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";

import theme from "./theme";

export default (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work-for-us" component={WorkForUsPage} />
        <Route exact path="/tickets" component={TicketsPage} />
        <Route exact path="/terms-and-conditions" component={TnCPage} />
        <Route exact path="/committee" component={CommitteePage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);
