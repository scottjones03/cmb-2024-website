import React from "react";
import Container from "../components/Container";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import CommitteeDisplay from "../components/main/CommitteeDisplay";

export default function CommitteePage() {
  return (
    <Container>
      <Header />
      <CommitteeDisplay />
      <Footer />
    </Container>
  );
}
