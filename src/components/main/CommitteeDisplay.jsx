import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { Iris } from "../../assets/img";

const dummy = [Iris, "Iris Toom", "Committee member"];

const images = {
  Presidents: [dummy, dummy],
  "Art & Deisgn": [dummy, dummy, dummy],
  "Webmaster & Ticketing": [dummy],
  Staffing: [dummy, dummy, dummy, dummy, dummy]
};

const Member = ({ img, name, role, ...others }) => (
  <Grid container item direction="column" justifyContent="center" {...others}>
    <Grid item textAlign="center">
      <Box component="img" maxWidth={250} width="100%" src={img} alt="logo" />
    </Grid>
    <Grid item textAlign="center">
      <Typography fontSize={24}>{name}</Typography>
    </Grid>
    <Grid item textAlign="center">
      <Typography fontSize={20}>{role}</Typography>
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
        maxWidth: 1000
      }}
    >
      <Grid container color="tertiary.main" rowSpacing={10}>
        {Object.entries(images).map(([key, value]) => {
          console.log(value);
          return (
            <Grid item container justifyContent="center" rowSpacing={2}>
              <Grid itme xs={12} textAlign="center">
                <Typography variant="h3" gutterBottom>
                  {key}
                </Typography>
              </Grid>
              {value.map(([img, name, role], i) => (
                <Member
                  img={img}
                  name={name}
                  role={role}
                  key={i}
                  xs={12}
                  sm={4}
                />
              ))}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
