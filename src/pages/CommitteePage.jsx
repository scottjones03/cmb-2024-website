import React from "react";
import { Footer, Header, Container } from "../components";
import { CommitteeDisplay } from "../components/main";

export default function CommitteePage() {
  return (
    <Container>
      <Header />
      <CommitteeDisplay />
      <Footer />
    </Container>
  );
}
