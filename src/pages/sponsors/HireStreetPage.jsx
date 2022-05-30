import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { HireStreet } from "../../assets/img";

export const data = {
  name: "HireStreet",
  text: [
    "Hirestreet is a fashion rental platform committed to making style and sustainability accessible for all women. They strive to build a community of empowered individuals, with inclusivity, creativity and care for our planet at the forefront of everything we do."
  ],
  img: HireStreet,
  link: "/sponsors/hire-street"
};

export default function HireStreetPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
