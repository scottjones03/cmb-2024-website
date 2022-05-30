import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { SeanhannaOne } from "../../assets/img";

export const data = {
  name: "Seanhanna",
  text: [
    "SeanHanna is one of the UK's top hair salons. Known for their bespoke looks designed to amaze and inspire. London Hairdresser of the Year, SeanHanna create beautiful hair styles that will set you apart from the crowd."
  ],
  img: SeanhannaOne,
  link: "/sponsors/seanhanna"
};

export default function SeanhannaPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
