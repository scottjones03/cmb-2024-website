import React from "react";
import { Container, Header, Footer, Sponsor } from "../../components";

import { SoldariTeeCharity } from "../../assets/img";

export const data = {
  name: "SolidariTee - International (1182195)",
  bio: [
    "Founded by a Cambridge student in 2017, SolidariTee works with organisations in Greece to provide legal and psychological aid to refugees. This is achieved through the sale of T-shirts designed by artists who have been affected by displacement. SolidariTee also aims to educate people on the refugee crisis through social media and events. ",
    "Christ’s College May Ball is proud to be working with SolidariTee on exclusive SolidariTee x CMB t-shirts. You will have a chance at ticket purchase to buy a t-shirt for £10. If you purchase a t-shirt you will automatically be entered into a prize draw where you could get the price of your standard ticket reimbursed to you! The proceeds of our t-shirt sales will go towards our charities. "
  ],
  img: SoldariTeeCharity,
  imgMaxWidth: 400,
  link: "/charities/solidaritee-charity"
};

export default function SoldariTeeCharityPage() {
  return (
    <Container>
      <Header />
      <Sponsor {...data} />
      <Footer />
    </Container>
  );
}
