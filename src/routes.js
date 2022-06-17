import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  HomePage,
  WorkForUsPage,
  TicketsPage,
  TnCPage,
  CommitteePage,
  SponsorPage,
  TailorPage,
  SeanhannaPage,
  RedBullPage,
  HireStreetPage,
  GrannyMaBubbleTeaPage
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";

import theme from "./theme";
import InfoPage from "./pages/InfoPage";

export default (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work-for-us" component={WorkForUsPage} />
        <Route exact path="/sponsors" component={SponsorPage} />
        <Route
          exact
          path="/sponsors/cambridge-tailors"
          component={TailorPage}
        />
        <Route exact path="/sponsors/seanhanna" component={SeanhannaPage} />
        <Route exact path="/sponsors/red-bull" component={RedBullPage} />
        <Route exact path="/sponsors/hire-street" component={HireStreetPage} />
        <Route
          exact
          path="/sponsors/granny-ma-bubble-tea"
          component={GrannyMaBubbleTeaPage}
        />
        <Route exact path="/tickets" component={TicketsPage} />
        <Route exact path="/terms-and-conditions" component={TnCPage} />
        <Route exact path="/info" component={InfoPage} />
        <Route exact path="/committee" component={CommitteePage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);
