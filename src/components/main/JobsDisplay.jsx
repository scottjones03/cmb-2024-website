import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoneyIcon from "@mui/icons-material/Money";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

import data from "../../assets/data/2024/jobs.json";
import { Stone } from "../../assets/img";

const JobCard = styled(Card)(({ theme }) => ({
  maxWidth: 370,
  margin: "auto",
  padding: `${theme.spacing(4)} ${theme.spacing(3)}`,
  backgroundColor: "transparent",
  backgroundImage: ` url(${Stone})`,
  backgroundSize: "100% 100%"
}));

const BodyListItem = ({ text, icon }) => (
  <ListItem disableGutters>
    <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 , }}>{icon}</ListItemIcon>
    <ListItemText
      primary={text}
      primaryTypographyProps={{ variant: "body2" }}
    />
  </ListItem>
);

const JobItem = ({ name, description, numHours, pay, needsInterview }) => (
  <JobCard elevation={0}>
    <CardContent sx={{ paddingBottom: 1 }}>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Box pb={2}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <List>
        <BodyListItem text={numHours} icon={<AccessTimeIcon />} />
        <BodyListItem text={pay} icon={<MoneyIcon />} />
        <BodyListItem
          text={
            needsInterview ? "Requires interview" : "Does not require interview"
          }
          icon={needsInterview ? <DoneIcon /> : <CloseIcon />}
        />
      </List>
    </CardContent>
    <CardActions>
      <Button
        sx={{
          fontSize: 16
        }}
        size="small"
        target="_blank"
        href="https://docs.google.com/forms/d/1F-7TQG291-854WWybTzFfJeKXc5ek9nJzMqYYqX9y2k/prefill"
      >
        Apply
      </Button>
    </CardActions>
  </JobCard>
);

const JobsDisplay = () => (
  <Box m="auto" width={{ xs: "100%", sm: "85%" }} maxWidth={1100}>
    <Typography variant="h2" mb={2} textAlign={{ xs: "center", sm: "inherit" }}>
      Open Jobs
    </Typography>
    <Grid container spacing={{ xs: 2, lg: 3 }} columns={12}>
      {data.jobs.map((job, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <JobItem {...job} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default JobsDisplay;
