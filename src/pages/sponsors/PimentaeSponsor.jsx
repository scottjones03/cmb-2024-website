import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { PimentaeSponsor } from "../../assets/img";

export const data = {
  name: "Pimentae",
  bio: [
    // "Tequila cocktail brand Pimentae was launched in March 2021 by female founders Alice & Wynter. Mexico opened their eyes to the incredibly complex and sophisticated nature of high-quality tequila. Not something to be shot, something to be sipped and savoured.  ",
    // "They quickly realised there was a huge knowledge gap in the UK driven by the shot culture and poor-quality options available on the shelves. Pimentae was born to shift these perceptions and introduce bar quality cocktails in multiple formats that broaden the footprint of how & where tequila is enjoyed.  ",
    // "Their multi-award-winning range includes a Spicy Margarita, Tommy’s Margarita and Cucumber Margarita that can simply be poured over ice and enjoyed in your own pocket of paradise."
  ],
  img: PimentaeSponsor,
  imgMaxWidth: 400,
  link: "/sponsors/pimentae-sponsor"
};

export default function PimentaeSponsorPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
