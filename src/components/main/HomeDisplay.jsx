import * as React from "react";
import Box from "@mui/material/Box";

import { Logo, LogoMobile } from "../../assets/img";

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
      <Box px={{ lg: 0, xs: 2 }}>
        <Box
          display={{ xs: "none", sm: "inherit" }}
          component="img"
          src={Logo}
          alt="logo"
          sx={{ width: "100%" }}
        />
        <Box
          display={{ xs: "inherit", sm: "none" }}
          component="img"
          src={LogoMobile}
          alt="logo"
          sx={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
}
