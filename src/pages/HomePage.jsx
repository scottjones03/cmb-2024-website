import React from "react";
import Container from "../components/Container";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import HomeDisplay from "../components/main/HomeDisplay";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <HomeDisplay />
      <Footer />
    </Container>
  );
}
