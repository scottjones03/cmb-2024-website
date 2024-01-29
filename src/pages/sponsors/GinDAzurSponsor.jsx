import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { GinDAzurSponsor } from "../../assets/img";

export const data = {
  name: "Gin D'Azur",
  bio: [
  ],
  img: GinDAzurSponsor,
  imgMaxWidth: 400,
  link: "/sponsors/gin-d-azur-sponsor"
};

export default function GinDAzurSponsorPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
