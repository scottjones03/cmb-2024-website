import React from "react";
import { Footer, Header, Container } from "../components";
import { TnCDisplay } from "../components/main";

export default function TnCPage() {
  return (
    <Container>
      <Header />
      <TnCDisplay />
      <Footer />
    </Container>
  );
}
