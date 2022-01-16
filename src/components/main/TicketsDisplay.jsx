import * as React from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";

import TabPanel from "../TabPanel";
import stone from "../../assets/img/2022/stone.png";

const TicketTab = ({ label, index, ...others }) => (
  <Tab
    label={label}
    id={`ticket-tab-${index}`}
    aria-controls={`ticket-tabpanel-${index}`}
    sx={{ fontWeight: 600 }}
    {...others}
  />
);

const TicketTabPanel = (props) => (
  <TabPanel id="ticket-tabpanel" labelledby="ticket-tab" {...props} />
);

const BodyParagraph = (props) => (
  <Typography variant="body1" gutterBottom {...props} />
);

const FirstSection = () => (
  <>
    <Typography variant="h4">What's included in your ticket?</Typography>
    <BodyParagraph>
      <strong>Every ticket</strong> gets you unlimited access to all the
      fantastic food and drink on offer, as well as the opportunity to enjoy all
      the ents, activities and music we have lined up (including a very special
      headliner)! It promises to be a fabulous night – and we can’t wait for
      everyone to experience it!
    </BodyParagraph>
    <BodyParagraph>
      So with <strong>every ticket</strong>, including every standard ticket,
      you get this exciting package. Below is information about what else comes
      with the different ticket types.
    </BodyParagraph>
    <BodyParagraph>
      <strong>Standard</strong> – enjoy all of the above, with standard entry to
      the ball at 21:00
    </BodyParagraph>
    <BodyParagraph>
      <strong>Queue jump</strong> – priority entrance to the Ball from 20:30 via
      a dedicated queue{" "}
    </BodyParagraph>
    <BodyParagraph>
      <strong>Dining</strong> – arrive at 18:00 for a decadent four course meal
      in the Great Hall followed by instant entry to the Ball
    </BodyParagraph>
  </>
);

const AccessDescription = () => (
  <>
    <BodyParagraph>
      <strong>Access tickets</strong> – Christ’s is very proud to be offering
      Access tickets this year to students on a bursary. Select these as your
      ticket choice and the Tutorial Office will confirm your status.
    </BodyParagraph>
  </>
);

const SalesSection = ({ start, end }) => (
  <>
    <Typography variant="h4">Sales date</Typography>
    <BodyParagraph>
      Ticket sales starts at <strong>{start}</strong>
      {end && (
        <>
          {" "}
          and ends at <strong>{end}</strong>
        </>
      )}
      .
    </BodyParagraph>
  </>
);

const GuestSection = ({ numGuests }) => (
  <>
    <Typography variant="h4">Guests</Typography>
    <BodyParagraph>
      You will also be able to purchase{" "}
      <strong>
        {numGuests} guest ticket
        {numGuests === 1 ? "" : "s"}
      </strong>{" "}
      when buying your own ticket.
    </BodyParagraph>
    <BodyParagraph>
      Christ’s May Ball is keen to welcome you and your guests – which is why we
      have made guest tickets no more expensive than Christ’s member ones.
      Please do feel encouraged to bring along your friends from other Colleges
      and from outside the University! Note everyone must be 18+.
    </BodyParagraph>
  </>
);

const GoogleFormSection = ({ ballot }) => (
  <>
    <Typography variant="h4">Purchase method</Typography>
    <BodyParagraph>
      You will receive an email from Christ's College when the ticket sales
      starts. Included in the email will be a link to a google form which you
      can submit to request tickets.
    </BodyParagraph>
    {ballot && (
      <BodyParagraph>
        Tickets are distributed via a ballot. This means that by the end of the
        sales period, if we received more requests than tickets available, we
        will random selects tickets to be accepted.
      </BodyParagraph>
    )}
  </>
);

export default function TicketsDisplay() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mx="auto" maxWidth={1200}>
      <Box
        borderRadius={1}
        p={{ xs: 4, sm: 8 }}
        sx={{
          backgroundColor: { xs: "tertiary.main", sm: "inherit" },
          backgroundImage: { xs: "inherit", sm: `url(${stone})` },
          backgroundSize: "100% 100%"
        }}
      >
        <Box mb={2} sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="ticket types tab"
            variant="scrollable"
            scrollButtons="auto"
          >
            <TicketTab label="Christ's JCR + MCR students" index={0} />
            <TicketTab label="Other JCR + MCR students" index={1} />
            <TicketTab label="Christ's 2021 graduates" index={2} />
            <TicketTab label="Christ's alumni" index={3} />
            <TicketTab label="Christ's staff & fellow" index={4} />
          </Tabs>
        </Box>
        <TicketTabPanel value={value} index={0}>
          <FirstSection />
          <AccessDescription />
          <SalesSection start="12:00 noon 29th January, 2022" />
          <GuestSection numGuests={2} />
        </TicketTabPanel>
        <TicketTabPanel value={value} index={1}>
          <FirstSection />
          <SalesSection start="12:00 noon 5th February, 2022" />
          <GuestSection numGuests={2} />
        </TicketTabPanel>
        <TicketTabPanel value={value} index={2}>
          <FirstSection />
          <SalesSection start="12th January, 2022" />
          <GuestSection numGuests={2} />
          <GoogleFormSection />
        </TicketTabPanel>
        <TicketTabPanel value={value} index={3}>
          <FirstSection />
          <SalesSection start="12th January, 2022" end="30th January, 2022" />
          <GuestSection numGuests={1} />
          <GoogleFormSection ballot />
        </TicketTabPanel>
        <TicketTabPanel value={value} index={4}>
          <FirstSection />
          <SalesSection start="18th January, 2022" end="1st February, 2022" />
          <GuestSection numGuests={3} />
          <GoogleFormSection ballot />
        </TicketTabPanel>
      </Box>
    </Box>
  );
}
