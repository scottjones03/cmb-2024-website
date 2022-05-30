import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { Tailor } from "../../assets/img";

export const data = {
  name: "Cambridge Tailors",
  text: [
    "Cambridge Tailors- an expert clothing designer with over 20 years of experience working to produce ready -to wear mens business suits and ladies ball gowns, perfect for black tie occasions. Yesim, the owner of the custom-designed bridal and evening gown business possesses a broad skillset, with an innovative approach to creating and repairing and has a strong commitment to excellent customer service.",
    "Skilled in copying, adapting and emulating popular design and cuts to meet the specific requirements of each customer. Offering a totally personal experience, To provide you get the exact dress that you have been searching for at an excellent price, crafted to the highest standards."
  ],
  img: Tailor,
  link: "/sponsors/cambridge-tailors"
};

export default function TailorPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
