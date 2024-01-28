import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { Stone } from "../../assets/img";

const data = {
  "2024 Committee": [
    ["Adanna Okoli", "President", "ao543@cam.ac.uk"],
    ["Amelia Cheeseman", "President", "ac2503@cam.ac.uk"],
    ["Eliana Dyer-Fernandes", "Head of Art & Design", "ed634@cam.ac.uk"],
    ["Annie Milhoffer", "Art & Design", "azm24@cam.ac.uk"],
    ["Monty Hunt", "Art & Design", "mh2179@cam.ac.uk"],
    ["Adhithy Hari Baskar", "Art & Design", "ah2260@cam.ac.uk"],
    ["Katie Burge", "Graphics", "kb788@cam.ac.uk"],
    ["Josh Nathan", "Head of Entertainment", "jn462@cam.ac.uk"],
    ["Emily Sparkes", "Entertainment", "es982@cam.ac.uk"],
    ["Lea Milanini", "Entertainment", "lm2037@cam.ac.uk"],
    ["Kate Mulvany", "Head of Food & Drinks", "kem83@cam.ac.uk"],
    ["Ju Yi Tai", "Food and Drink", "jyt33@cam.ac.uk"],
    ["Eugenie Dodds", "Food and Drink", "ed624@cam.ac.uk"],
    ["Isabelle Mohammed", "Green, Access & Compliance", "green@christsmayball.co.uk"],
    ["Parvathy Sunil Mattappilly", "Head of Logistics", "ps916@cam.ac.uk"],
    ["Sihan Yu", "Logistics", "sy440@cam.ac.uk"],
    ["Shonit Sharma", "Logistics", "ss2947@cam.ac.uk"],
    ["Maelle Bebleadzi", "Sponsorship", "msnb2@cam.ac.uk"],
    ["Anders Vase Hinge", "Head of Staffing & Security", "avh36@cam.ac.uk"],
    ["Harris Wood", "Staffing & Security", "hw622@cam.ac.uk"],
    ["Jessica Asiedu-Kwatchey", "Security & Security", "ja778@cam.ac.uk"],
    ["John Thompson", "Treasurer", "jat93@cam.ac.uk"],
    ["Scott Jones", "Webmaster & Ticketing", "webmaster@christsmayball.co.uk"]
  ]
};

const Member = ({ name, role, email, ...others }) => (
  <Grid container item direction="column" justifyContent="start" {...others}>
    <Grid item textAlign="center">
      <Typography fontSize={30}>
        <a href={`mailto:${email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          {name}
        </a>
      </Typography>
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
