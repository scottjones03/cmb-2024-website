import Box from "@mui/material/Box";

import bg from "../assets/img/2022/background_1_landscape.jpg";

const Container = (props) => {
  return (
    <Box
      pt={{ xs: 2, sm: 5 }}
      minHeight="100vh"
      boxSizing="border-box"
      overflow="hidden"
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
