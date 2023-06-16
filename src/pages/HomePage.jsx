import React from "react";
import { Footer, Header, Container } from "../components";
import { HomeDisplay } from "../components/main";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <HomeDisplay  />
      <Footer />
    </Container>
  );
}
