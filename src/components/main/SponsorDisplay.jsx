import * as React from "react";

import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";

import { data as TailorData } from "../../pages/sponsors/TailorPage";
import { data as SeanhannaData } from "../../pages/sponsors/Seanhannapage";
import { data as RedBullData } from "../../pages/sponsors/RedBull";
import { data as HireStreetData } from "../../pages/sponsors/HireStreetPage";
import { data as GrannyData } from "../../pages/sponsors/GrannyMaBubbleTeaPage";

let data = [TailorData, SeanhannaData, RedBullData, HireStreetData, GrannyData];

export default function SponsorDisplay() {
  return (
    <Box
      mx="auto"
      pt={5}
      sx={{
        position: "relative",
        maxWidth: 1200
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
              md={4}
            >
              <Button
                key={name}
                color="tertiary"
                size="large"
                disableElevation
                LinkComponent={Link}
                to={link}
                sx={{
                  textTransform: "none"
                }}
              >
                <Typography fontSize={30} gutterBottom textAlign="center">
                  {name}
                </Typography>
              </Button>
              <Box component="img" width="100%" src={img} alt="logo" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
