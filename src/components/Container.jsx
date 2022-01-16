import Box from "@mui/material/Box";

import bg from "../assets/img/2022/background.png";

const Container = (props) => {
  return (
    <Box
      p={{ xs: 2, sm: 5 }}
      minHeight="100vh"
      boxSizing="border-box"
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
      {...props}
    />
  );
};

export default Container;