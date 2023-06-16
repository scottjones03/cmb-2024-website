import { HashRouter as Router } from "react-router-dom";

export default (
  <ThemeProvider theme={theme}>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work-for-us" component={WorkForUsPage} />
        <Route exact path="/sponsors" component={SponsorPage} />
        <Route
          exact
          path="/sponsors/test-sponsor"
          component={TestSponsorPage}
        />
        <Route exact path="/tickets" component={TicketsPage} />
        <Route exact path="/terms-and-conditions" component={TnCPage} />
        <Route exact path="/info" component={InfoPage} />
        <Route exact path="/committee" component={CommitteePage} />
      </Switch>
    </Router>
  </ThemeProvider>
);
