import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function Sponsor({ name, text, img, imgMaxWidth, ...others }) {
  return (
    <Box
      mx="auto"
      pt={5}
      sx={{
        position: "relative",
        maxWidth: 1200
      }}
      px={3}
      color="tertiary.main"
    >
      <Grid
        container
        item
        direction="column"
        justifyContent="start"
        md={8}
        mx="auto"
        {...others}
      >
        <Grid item>
          <Typography variant="h3" gutterBottom>
            {name}
          </Typography>
        </Grid>
        <Grid item>
          {text.map((t) => (
            <Typography fontSize={20} gutterBottom>
              {t}
            </Typography>
          ))}
        </Grid>
        <Grid item>
          <Box
            component="img"
            my={3}
            maxWidth={imgMaxWidth}
            width="100%"
            src={img}
            alt="logo"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
