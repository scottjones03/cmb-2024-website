import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import {
  Clemmie,
  Christina,
  Eleanor,
  Benji,
  Camille,
  Pippa,
  Kiera,
  Finton,
  Sam,
  Oliwia,
  Iris,
  Lucy,
  Morgan,
  Michelle,
  Sophia,
  Emily,
  Andy,
  Fergus,
  Sophie,
  Becca,
  Mary,
  Charlotte,
  Rehan,
  Koni,
  Cicely
} from "../../assets/img";

const images = {
  Presidents: [
    [Pippa, "Pippa Prendergast-Coates", "Co-president"],
    [Sam, "Sam Grankin", "Co-president"]
  ],
  "Art & Design": [
    [Sophia, "Sophia Ashroff", "Head of Art & Design"],
    [Sophie, "Sophie West", "Art & Design"],
    [Iris, "Iiris Toom", "Art & Design"],
    [Charlotte, "Charlotte Evans", "Art & Design"],
    [Koni, "Koni Borowiak", "Art & Design"],
    [Mary, "Mary Holmes", "Graphics"]
  ],
  Entertainments: [
    [Clemmie, "Clemmie Butler Brown", "Head of Entertainments"],
    [Morgan, "Morgan Roberts", "Entertainments"],
    [Kiera, "Kiera Messenger", "Entertainments"]
  ],
  "Food & Drinks": [
    [Becca, "Rebecca Tyson", "Head of Food & Drinks"],
    [Eleanor, "Eleanor Burnett-Stuart", "Food"],
    [Michelle, "Michelle Del Carretto", "Drinks"]
  ],
  "Green & Access": [[Camille, "Camille McCarthy", "Green & Access"]],
  Logistics: [
    [Oliwia, "Oliwia Stecko", "Head of Logistics"],
    [Lucy, "Lucy Ivey", "Logistics"],
    [Rehan, "Rehan Chagla", "Logistics"]
  ],
  "Sponsorship & Publicity": [
    [Christina, "Christina Lawrence", "Sponsorship"],
    [Cicely, "Cicely Norman", "Publicity"]
  ],
  "Staffing & Security": [
    [Fergus, "Fergus Kirman", "Head of Staffing & Security"],
    [Finton, "Finton Hanks", "Staffing"],
    [Emily, "Emily Wenban-Smith", "Security"]
  ],
  Treasurer: [[Benji, "Benji Holland", "Treasurer"]],
  "Webmaster & Ticketing": [[Andy, "Andy Lo", "Webmaster & Ticketing"]]
};

const Member = ({ img, name, role, ...others }) => (
  <Grid container item direction="column" justifyContent="start" {...others}>
    <Grid item textAlign="center">
      <Box
        component="img"
        maxWidth={300}
        mb={2}
        width="100%"
        src={img}
        alt="logo"
      />
    </Grid>
    <Grid item textAlign="center">
      <Typography fontSize={30}>{name}</Typography>
    </Grid>
    <Grid item textAlign="center">
      <Typography fontSize={24}>{role}</Typography>
    </Grid>
  </Grid>
);

export default function CommitteeDisplay() {
  return (
    <Box
      mx="auto"
      pt={5}
      sx={{
        position: "relative",
        maxWidth: 1200
      }}
    >
      <Grid container color="tertiary.main" rowSpacing={5}>
        {Object.entries(images).map(([key, value], i) => {
          return (
            <Grid
              item
              container
              justifyContent="center"
              alignContent="start"
              rowSpacing={2}
              columnSpacing={5}
              key={i}
            >
              <Grid item xs={12} textAlign="center">
                <Typography variant="h3" gutterBottom>
                  {key}
                </Typography>
              </Grid>
              {value.map(([img, name, role], j) => {
                return (
                  <Member
                    img={img}
                    name={name}
                    role={role}
                    key={j}
                    xs={12}
                    sm={4}
                  />
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
