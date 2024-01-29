import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { RedBullSponsor } from "../../assets/img";

export const data = {
  name: "Red Bull",
  bio: [
  ],
  img: RedBullSponsor,
  imgMaxWidth: 400,
  link: "/sponsors/red-bull-sponsor"
};

export default function RedBullSponsorPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
