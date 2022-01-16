import React from "react";
import Container from "../components/Container";
import Header from "../components/main/Header";
import TicketsDisplay from "../components/main/TicketsDisplay";

export default function TicketsPage() {
  return (
    <Container>
      <Header />
      <TicketsDisplay />
    </Container>
  );
}
