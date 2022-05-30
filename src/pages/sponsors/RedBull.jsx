import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { Tailor } from "../../assets/img";

export const data = {
  name: "RedBull",
  text: [
    "RedBull is an inspirational brand that relates to professional athletes and fun-loving people alike. Red bull aims to fuel people's imaginations and ideas, uplifting them to a motivated and more active lifestyle through their energising drinks. RedBull encourages you to live life on the edge and meet your goals. "
  ],
  img: Tailor,
  link: "/sponsors/red-bull"
};

export default function RedBullPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
