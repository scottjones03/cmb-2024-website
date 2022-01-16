import React from "react";
import Container from "../components/Container";
import AppHeader from "../components/main/AppHeader";
import TicketsDisplay from "../components/main/TicketsDisplay";

export default function TicketsPage() {
  return (
    <Container>
      <AppHeader />
      <TicketsDisplay />
    </Container>
  );
}
