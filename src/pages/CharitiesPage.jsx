import React from "react";
import { Footer, Header, Container } from "../components";
import { CharitiesDisplay } from "../components/main";

export default function CharitiesPage() {
  return (
    <Container>
      <Header />
      <CharitiesDisplay />
      <Footer />
    </Container>
  );
}
