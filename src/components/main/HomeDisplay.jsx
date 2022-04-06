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
        <Typography
          variant="h4"
          textAlign="center"
          color="tertiary.main"
          fontStyle="italic"
          mt={3}
        >
          Tickets have sold out, thank you for your support!
        </Typography>
      </Box>
    </Box>
  );
}
