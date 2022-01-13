import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoneyIcon from "@mui/icons-material/Money";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import stone from "../assets/img/2022/stone-cropped.png";
import data from "../assets/data/jobs.json";

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2)
  }
}));

const JobCard = styled(Card)(({ theme }) => ({
  maxWidth: 370,
  margin: "auto",
  padding: `${theme.spacing(4)} ${theme.spacing(3)}`,
  backgroundColor: "transparent",
  backgroundImage: `url(${stone})`,
  backgroundSize: "100% 100%"
}));

const BodyListItem = ({ text, icon }) => (
  <ListItem disableGutters>
    <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>{icon}</ListItemIcon>
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
        href="https://docs.google.com/forms/d/e/1FAIpQLSdbfms9x-u7-jHRoFutQzgy2peNn5esjXBuDa6IdFuleyZSfA/viewform"
      >
        Apply
      </Button>
    </CardActions>
  </JobCard>
);

const JobsDisplay = () => (
  <Container>
    <Box sx={{ maxWidth: 1100, margin: "auto" }}>
      <Typography variant="h2" mb={2}>
        Open Jobs
      </Typography>
      <Grid
        sx={{ maxWidth: 1100 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={12}
        justifyContent="center"
      >
        {data.jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <JobItem {...job} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default JobsDisplay;
