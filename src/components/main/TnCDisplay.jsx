import * as React  from 'react';
import { Box, Typography } from "@mui/material";
import BodyParagraph from "../BodyParagraph";
import data from "../../assets/data/2024/terms-and-conditions.json";
import { Stone } from "../../assets/img";

const TnCDisplay = () => (
  <Box
    p={5}
    mt={{ xs: 0, sm: 3 }}
    mx="auto"
    maxWidth={1000}
    borderRadius={{ xs: 0, sm: 1 }}
    color="tertiary.main"
    sx={{ backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
    backgroundImage: { xs: "inherit", sm: `url(${Stone})` },
    backgroundSize: "100% 100%" }}
  >
    <Typography variant="h4" gutterBottom>
      {data.heading}
    </Typography>
    <BodyParagraph>{data.intro}</BodyParagraph>
    {data.points.map((text, i) => (
      <BodyParagraph mt={2} key={i}>
        {i + 1}. {text}
      </BodyParagraph>
    ))}
  </Box>
);
export default TnCDisplay;
