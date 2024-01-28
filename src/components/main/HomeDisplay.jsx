import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Logo } from "../../assets/img";
import { Stone } from "../../assets/img";

export default function HomeDisplay() {
  return (
    <Container 
      maxWidth="md" 
      sx={{ backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
      backgroundImage: { xs: `url(${Stone})`, sm: `url(${Stone})` },
      backgroundSize: "100% 100%"}} >
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
          sx={{ width: { xs: "80%", sm: "60%", md: "40%" } }}
        />
        <Typography
          variant="h2"
          align="center"
          color="primary.main"
          mt={3}
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
          about the ball with old pictures????
        </Typography>
      </Box>
    </Container>
  );
}
