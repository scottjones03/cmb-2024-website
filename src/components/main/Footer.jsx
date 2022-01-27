import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/EmailRounded";
import Button from "@mui/material/Button";

import { LogoMobile } from "../../assets/img";
import handbook from "../../assets/docs/Accessibility-Handbook.pdf";

const FooterLink = ({ text, link, ...others }) => (
  <Button
    color="tertiary"
    disableElevation
    sx={{
      fontSize: 20,
      textTransform: "none"
    }}
    LinkComponent={link ? Link : undefined}
    to={link ? link : undefined}
    {...others}
  >
    {text}
  </Button>
);

const Footer = () => (
  <Box pt={10} pb={10}>
    <Box display="flex" justifyContent="center">
      <Box mx={1} mb={3}>
        <IconButton
          color="tertiary"
          target="_blank"
          href="https://www.instagram.com/christsmayball"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box mx={1}>
        <IconButton
          color="tertiary"
          target="_blank"
          href="https://www.facebook.com/christsmayball"
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box mx={1}>
        <IconButton
          color="tertiary"
          href="mailto:webmaster@christsmayball.co.uk"
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
    <Grid
      container
      rowSpacing={3}
      justifyContent="center"
      mx="auto"
      maxWidth={1100}
      color="tertiary.main"
    >
      <Grid container item xs={12} sm={4} justifyContent="center">
        <Box
          maxWidth={200}
          display="flex"
          flexDirection="column"
          textAlign="center"
        >
          <Typography
            variant="h4"
            gutterBottom
            borderBottom={1}
            borderColor="tertiary.main"
          >
            Page links
          </Typography>
          <FooterLink text="Home" link="/" />
          <FooterLink text="Tickets" link="/tickets" />
          <FooterLink text="Work for us" link="/work-for-us" />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        order={{ xs: 3, sm: 2 }}
        textAlign="center"
        alignSelf="center"
      >
        <Box
          component="img"
          maxWidth={250}
          width="100%"
          src={LogoMobile}
          alt="logo"
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={4}
        order={{ xs: 2, sm: 3 }}
        maxWidth={200}
        justifyContent="center"
      >
        <Box
          maxWidth={200}
          display="flex"
          flexDirection="column"
          textAlign="center"
        >
          <Typography
            variant="h4"
            gutterBottom
            borderBottom={1}
            borderColor="tertiary.main"
          >
            Details
          </Typography>
          <FooterLink
            text="Terms and conditions"
            link="/terms-and-conditions"
          />
          <FooterLink
            text="Accessibility handbook"
            link={handbook}
            target="_blank"
          />
        </Box>
      </Grid>
    </Grid>
    <Box py={3}>
      <Typography variant="subtitle1" textAlign="center" color="tertiary.main">
        Copyright © Christ's May Ball Committee 2022
      </Typography>
    </Box>
  </Box>
);

export default Footer;
