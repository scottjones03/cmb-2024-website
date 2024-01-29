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
      <Grid item xs={12} textAlign="center">
        <Typography variant="h3" gutterBottom>
          SPONSORS
        </Typography>
      </Grid>
      <Grid
        container
        color="tertiary.main"
        rowSpacing={5}
        columnSpacing={5}
        justifyContent="center"
      >
        {data.map(({ name, img, link, bio }, i) => {
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
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={3}
                >
                  <Box component="img" width="50%" src={img} alt="logo" />
                </Box>
                {bio.map((text, k) => (
                  <Typography variant="body1" sx={{ padding: 1 }}>{text}</Typography>
                ))}
              </NoStyleLink>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
