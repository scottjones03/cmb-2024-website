import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import {
  Scott
} from "../../assets/img";
import { Stone } from "../../assets/img";

const data = {
  // TODO: Add committee
};

const Member = ({ img, name, role, ...others }) => (
  <Grid container item direction="column" justifyContent="start" {...others} >
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
      pt={10} pb={30}
      sx={{
        position: "relative",
        maxWidth: 1200,
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
