import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { TestSponsor } from "../../assets/img";

export const data = {
  name: "Christs College Cambridge",
  text: [
    "Random text",
    "For a fake sponsor"
  ],
  img: TestSponsor,
  imgMaxWidth: 400,
  link: "/sponsors/test-sponsor"
};

export default function TestSponsorPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
