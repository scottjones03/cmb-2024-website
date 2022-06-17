import { Box, Typography, List, ListItem } from "@mui/material";
import data from "../../assets/data/info-pack.json";

const InfoDisplay = () => (
  <Box
    p={5}
    mt={{ xs: 0, sm: 3 }}
    mx="auto"
    maxWidth={1000}
    borderRadius={{ xs: 0, sm: 1 }}
    color="tertiary.main"
    sx={{ backgroundColor: "rgba(0,0,0,0.3)" }}
  >
    <Typography variant="h4" gutterBottom>
      {data.heading}
    </Typography>
    {data.sections.map(({ title, points }, i) => (
      <div key={i}>
        <Typography variant="h5">{title}</Typography>
        <List>
          {points.map((text, j) => (
            <ListItem key={j}>
              <Typography variant="body1">{text}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    ))}
  </Box>
);
export default InfoDisplay;
