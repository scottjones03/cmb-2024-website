import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const pages = ["Work for us"];

const Brand = styled(Typography)(({ theme }) => ({
  fontFamily: "Cinzel",
  fontWeight: 600,
  fontSize: 30,
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: 18
  }
}));

export default function AppHeader() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1
          }}
        >
          <Button
            sx={{
              mt: 2.5,
              mb: 2,
              color: "white",
              textTransform: "none"
            }}
            LinkComponent={Link}
            to={"/"}
          >
            <Brand variant="span">Christ's May Ball 2022</Brand>
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          {pages.map((page) => (
            <Button
              key={page}
              variant="contained"
              color="secondary"
              disableElevation
              sx={{ my: 2, color: "white", display: "block", borderRadius: 8 }}
              LinkComponent={Link}
              to={"/work-for-us"}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
