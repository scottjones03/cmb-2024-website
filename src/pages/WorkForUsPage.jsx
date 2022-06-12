import React from "react";
import { Footer, Header, Container } from "../components";
import JobsDisplay from "../components/main/JobsDisplay";

export default function WorkForUsPage() {
  return (
    <Container>
      <Header />
      <JobsDisplay />
      <Footer />
    </Container>
  );
}
