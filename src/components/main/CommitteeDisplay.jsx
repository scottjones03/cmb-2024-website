import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { Stone } from "../../assets/img";

const data = {
  "2024 Committee": [
    ["Adanna Okoli", "President", "president@christsmayball.co.uk"],
    ["Amelia Cheeseman", "President", "president@christsmayball.co.uk"],
    ["Eliana Dyer-Fernandes", "Head of Art & Design", "design@christsmayball.co.uk"],
    ["Annie Milhoffer", "Art & Design", "design@christsmayball.co.uk"],
    ["Monty Hunt", "Art & Design", "design@christsmayball.co.uk"],
    ["Adhithy Hari Baskar", "Art & Design", "design@christsmayball.co.uk"],
    ["Katie Burge", "Graphics", "graphics@christsmayball.co.uk"],
    ["Josh Nathan", "Head of Entertainment", "ents@christsmayball.co.uk"],
    ["Emily Sparkes", "Entertainment", "ents@christsmayball.co.uk"],
    ["Lea Milanini", "Entertainment", "ents@christsmayball.co.uk"],
    ["Kate Mulvany", "Head of Food & Drinks", "food@christsmayball.co.uk"],
    ["Ju Yi Tai", "Food and Drink", "food@christsmayball.co.uk"],
    ["Eugenie Dodds", "Food and Drink", "food@christsmayball.co.uk"],
    ["Isabelle Mohammed", "Green, Access & Compliance", "green@christsmayball.co.uk"],
    ["Parvathy Sunil Mattappilly", "Head of Logistics", "logistics@christsmayball.co.uk"],
    ["Sihan Yu", "Logistics", "logistics@christsmayball.co.uk"],
    ["Shonit Sharma", "Logistics", "logistics@christsmayball.co.uk"],
    ["Maelle Bebleadzi", "Sponsorship and Publicity", "publicity@christsmayball.co.uk"],
    ["Anders Vase Hinge", "Head of Staffing & Security", "staffing@christsmayball.co.uk"],
    ["Harris Wood", "Staffing & Security", "staffing@christsmayball.co.uk"],
    ["Jessica Asiedu-Kwatchey", "Security & Security", "staffing@christsmayball.co.uk"],
    ["John Thompson", "Treasurer", "treasurer@christsmayball.co.uk"],
    ["Scott Jones", "Webmaster & Ticketing", "webmaster@christsmayball.co.uk"]
  ]
};

const Member = ({ name, role, email, ...others }) => (
  <Grid container item direction="column" justifyContent="start" {...others}>
    <Grid item textAlign="center">
      <Typography variant="h5">
        <a href={`mailto:${email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <strong>{name}</strong>
        </a>
      </Typography>
    </Grid>
    <Grid item textAlign="center">
      <Typography variant="h6">{role}</Typography>
    </Grid>
  </Grid>
);


export default function CommitteeDisplay() {
  return (
    <Box
      mx="auto"
      pt={10} pb={30}
      sx={{
        position: "relative",
        maxWidth: "md",
        backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
          backgroundImage: { xs: `url(${Stone})`, sm: `url(${Stone})` },
          backgroundSize: "100% 100%"
      }}
    >
      <Grid container color="tertiary.main" rowSpacing={5}>
        {Object.entries(data).map(([key, value], i) => {
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
              {value.map(([name, role, email], j) => {
                return (
                  <Member
                    email={email}
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
