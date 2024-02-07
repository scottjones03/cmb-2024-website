import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { CrisisCharity } from "../../assets/img";

export const data = {
  name: "Crisis UK - National (1082947)",
  bio: [
    "Founded in 1967, Crisis UK has been working to tackle the issue of homelessness across the UK. In 2021/2022, the charity gave over 8000 people advice. Alongside advice, they provide emergency shelter, employment opportunities, and a variety of other services. Though Crisis’ impact can be felt in local communities, they also promote changes in national housing policy.     "
  ],
  img: CrisisCharity,
  imgMaxWidth: 400,
  link: "/charities/crisis-uk-charity"
};

export default function CrisisCharityPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
