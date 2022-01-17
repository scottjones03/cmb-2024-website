import React from "react";
import Container from "../components/Container";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import TnCDisplay from "../components/main/TnCDisplay";

export default function TnCPage() {
  return (
    <Container>
      <Header />
      <TnCDisplay />
      <Footer />
    </Container>
  );
}
