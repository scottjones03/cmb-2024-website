import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Logo } from "../../assets/img";
import { Stone } from "../../assets/img";

export default function HomeDisplay() {
  return (
    <Container 
      maxWidth="md" 
      sx={{ backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
      backgroundImage: { xs: "inherit", sm: `url(${Stone})` },
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
          21 . 06 . 2024
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="secondary.main"
          mt={3}
          lineHeight="1.5"
        >
          Welcome to the captivating celebration of the 2024 Christ's College May Ball. This time-honored tradition will take place in the enchanting setting of Christ's College, Cambridge. Unfolding within the College's beautiful gardens and historic buildings, this extraordinary night promises an unforgettable experience.
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="secondary.main"
          mt={3}
          lineHeight="1.5"
        >
          On June 16th, 2024, we will invite you to step into a world where academic brilliance meets pure festivity, where timeless tradition is paired with contemporary entertainment. This year's theme, yet to be revealed, promises to make the night more enchanting than ever before.
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="secondary.main"
          mt={3}
          lineHeight="1.5"
        >
          From Champagne at dawn to delightful culinary surprises, from mesmerizing fireworks to live music and top DJs, every moment will be imbued with magic and splendor. We aim to surprise and delight you, bringing together students, alumni, and guests for a night that will be remembered for a lifetime.
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="secondary.main"
          mt={3}
          mb={5}
          lineHeight="1.5"
        >
          Stay tuned for updates on ticket sales, the reveal of our theme, and sneak peeks of the unique experiences we're preparing for you. Join us to celebrate the end of the academic year in style at the Christ's College May Ball 2024. It promises to be an enchanting night of glamour, elegance, and unforgettable experiences.
        </Typography>
      </Box>
    </Container>
  );
}
