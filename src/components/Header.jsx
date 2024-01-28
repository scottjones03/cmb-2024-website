import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Banner } from "../assets/img";

const pages = [
  { name: "Home", link: "/" },
  { name: "Tickets", link: "/tickets" },
  { name: "FAQs", link: "/faqs" },
  { name: "Sponsors", link: "/sponsors" },
  { name: "Charities", link: "/charities" },
  { name: "Terms", link: "/terms-and-conditions" },
];

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",

      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          minWidth: 900,
          position: "relative"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {pages.map(({ name, link }) => (
            <Button
              key={name}
              color="tertiary"
              size="large"
              disableElevation
              sx={{
                fontWeight: 600,
                fontSize: {
                  xs: 16,
                  sm: 26
                },
                px: {
                  xs: 0.5,
                  sm: 1.5
                },
                fontStyle: "italic"
              }}
              LinkComponent={Link}
              to={link}
            >
              {name}
            </Button>
          ))}
        </Box>
        <Box component="img" src={Banner} alt="banner" sx={{ width: "100%" }} />
      </Box>
    </Box>
  );
}
