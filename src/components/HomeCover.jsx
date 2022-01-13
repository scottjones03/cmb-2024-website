import * as React from "react";
import ImageBox from "./ImageBox";
import bg from "../assets/img/2022/background_small.png";
import logo from "../assets/img/2022/cropped-logo.png";
import "./HomeCover.less";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const Logo = styled("img")(
  ({ theme }) => `
  padding-top: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 97vw;
  max-height: 80vh;
`
);

export default function HomeCover() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh"
      }}
    >
      <ImageBox imageUrl={bg} lightness={0.5} zoom={130} />
      <Logo src={logo} alt="logo" />
    </Box>
  );
}
