import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Logo } from "../../assets/img";

export default function HomeDisplay() {
  return (
    <Box
      mx="auto"
      pt={5}
      sx={{
        position: "relative",
        maxWidth: 1000
      }}
    >
      <Box px={{ lg: 0, xs: 2 }} textAlign="center">
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{ width: "100%", maxWidth: { xs: "inherit", sm: 600 } }}
        />
      </Box>
      <Typography
        variant="h2"
        textAlign="center"
        color="tertiary.main"
        fontStyle="italic"
        mt={3}
      >
        21 . 06 . 2022
      </Typography>
      <Box textAlign="center">
        <Button href="https://ticketing.christsmayball.co.uk/" target="_blank">
          <Typography
            variant="h4"
            textAlign="center"
            color="tertiary.main"
            fontStyle="italic"
            mt={3}
          >
            Christ's Students can get tickets now!
            <ChevronRightIcon sx={{ fontSize: 50, verticalAlign: "bottom" }} />
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
