import * as React from "react";
import Box from "@mui/material/Box";

import Container from "../Container";
import logo from "../../assets/img/2022/prereveal-logo.png";

export default function HomeDisplay() {
  return (
    <Container>
      <Box
        mx="auto"
        pt={5}
        sx={{
          position: "relative",
          maxWidth: 1200
        }}
      >
        <Box px={{ lg: 10, xs: 0 }} pt={25}>
          <Box component="img" src={logo} alt="logo" sx={{ width: "100%" }} />
        </Box>
      </Box>
    </Container>
  );
}
