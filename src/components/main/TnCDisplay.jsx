import { Box, Typography } from "@mui/material";
import BodyParagraph from "../BodyParagraph";
import data from "../../assets/data/terms-and-conditions.json";

const TnCDisplay = () => (
  <Box
    p={5}
    mt={3}
    mx="auto"
    maxWidth={1000}
    borderRadius={1}
    color="tertiary.main"
    sx={{ backgroundColor: "rgba(0,0,0,0.3)" }}
  >
    <Typography variant="h4" gutterBottom>
      {data.heading}
    </Typography>
    <BodyParagraph>{data.intro}</BodyParagraph>
    {data.points.map((text, i) => (
      <BodyParagraph mt={2}>
        {i + 1}. {text}
      </BodyParagraph>
    ))}
  </Box>
);
export default TnCDisplay;
