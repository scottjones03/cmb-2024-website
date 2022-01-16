import React from "react";
import Container from "../components/Container";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import TicketsDisplay from "../components/main/TicketsDisplay";

export default function TicketsPage() {
  return (
    <Container>
      <Header />
      <TicketsDisplay />
      <Footer />
    </Container>
  );
}
