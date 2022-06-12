import React from "react";
import { Footer, Header, Container } from "../components";
import { TicketsDisplay } from "../components/main";

export default function TicketsPage() {
  return (
    <Container>
      <Header />
      <TicketsDisplay />
      <Footer />
    </Container>
  );
}
