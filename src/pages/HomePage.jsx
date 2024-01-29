import React from "react";
import { Footer, Header, Container } from "../components";
import { HomeDisplay, CommitteeDisplay, TicketsDisplay, FAQDisplay, SponsorDisplay, CharitiesDisplay } from "../components/main";

const SectionDivider = () => (
  <div style={{ height: "2px", backgroundColor: "#000080" }}></div>
);

export default function HomePage() {
  return (
    <Container>
      <Header />
      <HomeDisplay />
      <SectionDivider />
      <CommitteeDisplay />
      <SectionDivider />
      <TicketsDisplay />
      <SectionDivider />
      <FAQDisplay />
      <SectionDivider />
      <SponsorDisplay />
      <SectionDivider />
      <CharitiesDisplay />
      <Footer />
    </Container>
  );
}
