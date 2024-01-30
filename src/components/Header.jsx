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
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%", // Make the container full-width
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {pages.map(({ name, link }) => (
            <Button
              color="tertiary"
              disableElevation
              sx={{
                fontSize: 20,
                textTransform: "none",
                margin: "5px",
              }}
              LinkComponent={link ? Link : undefined}
              to={link ? link : undefined}
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
