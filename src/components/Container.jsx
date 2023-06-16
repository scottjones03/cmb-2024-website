import * as React  from 'react';
import Box from "@mui/material/Box";

const Container = (props) => {
  return (
    <Box
      pt={{ xs: 0, sm: 5 }}
      minHeight="100vh"
      boxSizing="border-box"
      overflow="hidden"
      pb={30}
      {...props}
    />
  );
};

export default Container;
