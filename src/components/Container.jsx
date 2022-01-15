import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import bg from "../assets/img/2022/background.png";

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2)
  },
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed"
}));

export default Container;
