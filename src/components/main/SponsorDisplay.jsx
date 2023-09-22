import * as React from "react";

import { Box, Grid, Typography } from "@mui/material";

import { NoStyleLink } from "../../components";
import { data } from "../../pages/sponsors";
import { Stone } from "../../assets/img";

export default function SponsorDisplay() {
  return (
    <Box
      mx="auto"
      pt={5}
      sx={{
        position: "relative",
        maxWidth: 800,
        backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
          backgroundImage: { xs: `url(${Stone})`, sm: `url(${Stone})` },
          backgroundSize: "100% 100%"
      }}
      px={3}
    >
      <Grid
        container
        color="tertiary.main"
        rowSpacing={5}
        columnSpacing={5}
        justifyContent="center"
      >
        {data.map(({ name, img, link }, i) => {
          return (
            <Grid
              item
              container
              justifyContent="center"
              alignContent="center"
              key={i}
              sm={6}
              md={6}
            >
              <NoStyleLink to={link}>
                <Typography fontSize={30} gutterBottom textAlign="center">
                  {name}
                </Typography>
                <Box component="img" width="100%" src={img} alt="logo" />
              </NoStyleLink>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
