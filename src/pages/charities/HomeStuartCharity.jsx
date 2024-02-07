import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { HomeStuartCharity } from "../../assets/img";

export const data = {
  name: "Home-Start Cambridgeshire - Local (1106007)",
  bio: [
    "Home-Start is a UK charity that aims to provide support to families to ensure that children have the best start in life. Home-Start Cambridgeshire works specifically with the local community to provide families with support. These services range from support networks to decrease loneliness amongst parents, improving access to health and educational services, and providing toys for children. "
  ],
  img: HomeStuartCharity,
  imgMaxWidth: 400,
  link: "/charities/home-start-charity"
};

export default function HomeStuartCharityPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
