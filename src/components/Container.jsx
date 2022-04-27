import Box from "@mui/material/Box";

const Container = (props) => {
  return (
    <Box
      pt={{ xs: 0, sm: 5 }}
      minHeight="100vh"
      boxSizing="border-box"
      overflow="hidden"
      {...props}
    />
  );
};

export default Container;
