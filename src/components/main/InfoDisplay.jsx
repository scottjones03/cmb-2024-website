import * as React  from 'react';
import { Box, Typography, List, ListItem } from "@mui/material";
import data from "../../assets/data/2024/info-pack.json";
import { Stone } from "../../assets/img";

const InfoDisplay = () => (
  <Box
    p={30}
    pt={30} pb={50}
    mt={{ xs: 0, sm: 3 }}
    mx="auto"
    maxWidth={1000}
    borderRadius={{ xs: 0, sm: 1 }}
    color="tertiary.main"
    sx={{ 
      backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
      backgroundImage: { xs: "inherit", sm: `url(${Stone})` },
      backgroundSize: "100% 100%",
    }}
  >
    <Typography variant="h4" gutterBottom sx={{ padding: 1 }}>
      {data.heading}
    </Typography>
    {data.sections.map(({ title, points }, i) => (
      <div key={i} sx={{ padding: 1 }}>
        <Typography variant="h5" sx={{ padding: 1 }}>{title}</Typography>
        <List>
          {points.map((text, j) => (
            <ListItem key={j} sx={{ padding: 1 }}>
              <Typography variant="body1" sx={{ padding: 1 }}>{text}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    ))}
  </Box>
);

export default InfoDisplay;
