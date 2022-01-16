import React from "react";
import Container from "../components/Container";
import AppHeader from "../components/main/AppHeader";
import HomeDisplay from "../components/main/HomeDisplay";

export default function HomePage() {
  return (
    <Container>
      <AppHeader />
      <HomeDisplay />
    </Container>
  );
}
