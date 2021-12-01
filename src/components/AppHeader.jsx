import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const pages = ["Work for us"];

export default function AppHeader() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button
          sx={{
            flexGrow: 1,
            my: 2,
            color: "white",
            display: "block",
            textTransform: "none"
          }}
          LinkComponent={Link}
          to={"/"}
        >
          <Typography variant="h5">Christ's May Ball 2022</Typography>
        </Button>
        <Box sx={{ display: "flex" }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: "white", display: "block" }}
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
