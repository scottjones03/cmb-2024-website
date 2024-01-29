import * as React from 'react';
import { Box, Typography, List, ListItem , Grid} from "@mui/material";
import { FAQPack } from "../../assets/data";
import { Stone } from "../../assets/img";
import BodyParagraph from "../BodyParagraph";

const FAQDisplay = () => (
  <Box
    p={5}
    mt={{ xs: 0, sm: 3 }}
    mx="auto"
    maxWidth={1000}
    borderRadius={{ xs: 0, sm: 1 }}
    color="tertiary.main"
    sx={{
      backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
      backgroundImage: { xs: `url(${Stone})`, sm: `url(${Stone})` },
      backgroundSize: "100% 100%",
    }}
  >
    <Grid item xs={12} textAlign="center">
        <Typography variant="h3" gutterBottom>
          {FAQPack.heading}
        </Typography>
    </Grid>
    {FAQPack.sections.map(({ title, questions }, i) => (
      <Box key={i} sx={{ padding: 2 }}>
        <Typography variant="h4" sx={{ padding: 2, borderBottom: '2px solid white', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <List>
          {questions.map(({ question, answers }, j) => (
            <ListItem key={j} sx={{ padding: 2, borderBottom: '1px solid white' }}>
              <Box>
                <BodyParagraph variant="h6">
                  {j + 1}. {question}
                </BodyParagraph>
                {answers.map((text, k) => (
                  <BodyParagraph key={k}>
                    {text}
                  </BodyParagraph>
                ))}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    ))}
  </Box>
);

export default FAQDisplay;
