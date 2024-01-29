import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { NicheCocktailsSponsor } from "../../assets/img";

export const data = {
  name: "Niche Cocktails",
  bio: [
  ],
  img: NicheCocktailsSponsor,
  imgMaxWidth: 400,
  link: "/sponsors/niche-cocktails-sponsor"
};

export default function NicheCocktailsSponsorPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
