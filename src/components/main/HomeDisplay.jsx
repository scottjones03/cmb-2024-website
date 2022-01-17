import * as React from "react";
import Box from "@mui/material/Box";

import logo from "../../assets/img/2022/prereveal-logo.png";
import logoMobile from "../../assets/img/2022/prereveal-logo-1.png";

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
          src={logo}
          alt="logo"
          sx={{ width: "100%" }}
        />
        <Box
          display={{ xs: "inherit", sm: "none" }}
          component="img"
          src={logoMobile}
          alt="logo"
          sx={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
}
