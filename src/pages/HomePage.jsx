import React from "react";
import { Footer, Header, Container } from "../components";
import { HomeDisplay, CommitteeDisplay } from "../components/main";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <HomeDisplay  />
      <CommitteeDisplay />
      <Footer />
    </Container>
  );
}
