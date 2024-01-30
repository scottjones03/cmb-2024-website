import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Logo } from "../../assets/img";
import { Stone } from "../../assets/img";

export default function HomeDisplay() {
  return (
    <Container 
  maxWidth="md" 
  sx={{ 
    backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
    backgroundImage: { xs: `url(${Stone})`, sm: `url(${Stone})` },
    backgroundSize: "100% 100%"
  }}
>
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    mt="auto"
    pt={10} pb={10}
  >
    <Box
      component="img"
      src={Logo}
      alt="logo"
      sx={{ width: { xs: "100%", sm: "100%", md: "80%" } }} // Adjusted size
    />

    <Typography
      variant="h2"
      align="center"
      color="primary.main"
      mt={0} // Remove margin-top
    >
      18 . 06 . 2024
    </Typography>
    <Typography
      variant="h4"
      align="center"
      color="secondary.main"
      mt={3}
      lineHeight="1.5"
    >
    </Typography>
  </Box>
</Container>

  );
}
