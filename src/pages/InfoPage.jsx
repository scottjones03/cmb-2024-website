import React from "react";
import { Footer, Header, Container } from "../components";
import { InfoDisplay } from "../components/main";

export default function InfoPage() {
  return (
    <Container>
      <Header />
      <InfoDisplay />
      <Footer />
    </Container>
  );
}
