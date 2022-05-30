import React from "react";
import Container from "../components/Container";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import SponsorDisplay from "../components/main/SponsorDisplay";

export default function SponsorPage() {
  return (
    <Container>
      <Header />
      <SponsorDisplay />
      <Footer />
    </Container>
  );
}
