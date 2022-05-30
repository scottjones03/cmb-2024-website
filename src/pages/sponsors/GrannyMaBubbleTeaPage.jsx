import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { GrannyMa } from "../../assets/img";

export const data = {
  name: "Granny Ma Bubble Tea",
  text: [
    "Come down to Granny Ma's Bubble tea at the market for some refreshing bubble tea!",
    "Granny Ma pride themselves on their fruity and zingy flavours and eco-friendly mindset.",
    "On your way back from a lecture?Milling about on King's Parade? Why don't you check out Granny Ma's Bubble tea, for a range of vibrant pearls and teas to choose from."
  ],
  img: GrannyMa,
  imgMaxWidth: 400,
  link: "/sponsors/granny-ma-bubble-tea"
};

export default function GrannyMaBubbleTeaPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
