import * as React from "react";
import { Tab, Tabs, Box, Typography, Button } from "@mui/material";

import BodyParagraph from "../BodyParagraph";
import TabPanel from "../TabPanel";
import { Stone } from "../../assets/img";

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

const FirstSection = ({
  standardPrice,
  queueJumpPrice,
  diningPrice,
  staff
}) => (
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
    {staff ? (
      <BodyParagraph>
        <strong>Standard (£{standardPrice})</strong> – enjoy all of the above,
        with priority entry to the ball at 20:30
      </BodyParagraph>
    ) : (
      <>
        <BodyParagraph>
          <strong>Standard (£{standardPrice})</strong> – enjoy all of the above,
          with standard entry to the ball at 21:00
        </BodyParagraph>
        <BodyParagraph>
          <strong>Queue jump (£{queueJumpPrice})</strong> – priority entrance to
          the Ball from 20:30 via a dedicated queue
        </BodyParagraph>
      </>
    )}
    <BodyParagraph>
      <strong>Dining (£{diningPrice})</strong> – arrive at 18:00 for a decadent
      four course meal in the Great Hall followed by instant entry to the Ball
    </BodyParagraph>
  </>
);

const AccessDescription = () => (
  <>
    <BodyParagraph>
      <strong>Access tickets</strong> – Christ's is very proud to be offering
      Access tickets this year. You are eligible for access tickets if you are a
      Christ’s JCR students on <strong>the Cambridge Bursary</strong> , full or
      partial, or a Christ’s MCR students on <strong>College Bursaries</strong>.
      Select these as your ticket choice and the Tutorial Office will
      confidentially confirm your status. The prices are{" "}
      <strong>
        Access standard (£100), Access queue jump (£115), Access dining (£135)
      </strong>
    </BodyParagraph>
    <BodyParagraph>
      If you have already purchased a full-price ticket but are eligible for an
      Access ticket, please get in touch here:
      <Button
        sx={{ minWidth: 0, textTransform: "none" }}
        href="mailto:webmaster@christsmayball.co.uk"
        target="_blank"
      >
        webmaster@christsmayball.co.uk
      </Button>
      , and we will sort a refund out for you.
    </BodyParagraph>
  </>
);

const SalesSection = ({ start, end }) => (
  <>
    <Typography variant="h4">Sales date</Typography>
    <BodyParagraph>
      Ticket sale starts at <strong>{start}</strong>
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

const PurchaseMethodSection = ({ googleForm, ballot }) => (
  <>
    <Typography variant="h4">Purchase method</Typography>
    <BodyParagraph>
      Tickets have now sold out, thank you for your support!
    </BodyParagraph>
    {/* {googleForm ? (
      <>
        <BodyParagraph>
          You will receive an email from Christ's College when the ticket sales
          starts. Included in the email will be a link to a google form which
          you can submit to request for tickets.
        </BodyParagraph>
        {ballot && (
          <BodyParagraph>
            Tickets are distributed via a ballot. This means that by the end of
            the sales period, if we received more requests than tickets
            available, we will random selects tickets to be accepted.
          </BodyParagraph>
        )}
      </>
    ) : (
      <>
        <BodyParagraph>
          Please visit
          <Button
            sx={{ minWidth: 0, textTransform: "none" }}
            href="https://ticketing.christsmayball.co.uk/"
            target="_blank"
          >
            https://ticketing.christsmayball.co.uk/
          </Button>
          for instructions to purchase your ticket.
        </BodyParagraph>
      </>
    )}
    <BodyParagraph>
      If you opt in to our charity donation, you will be entered into a raffle
      to have your ticket refunded!
    </BodyParagraph>
    <BodyParagraph>
      Once you receive a confirmation email of your ticket reservations, you
      will have <strong>48 hours</strong> to perform bank transfers in order to
      secure your ticket.
    </BodyParagraph>
    <BodyParagraph>
      Please note that the buyer's ticket needs to be paid before we can approve
      the guest tickets.
      <strong>
        If the buyer fails to pay for his / her own ticket, neither the buyer
        nor the guests will get their tickets.
      </strong>
    </BodyParagraph> */}
  </>
);

const DressCodeSection = () => (
  <>
    <Typography variant="h4">Dress code</Typography>
    <BodyParagraph>
      The dress code for the ball is black tie. Standard black tie consists of
      either a dinner jacket (identifiable by its shiny lapels) with trousers, a
      bow-tie, and a white shirt, or a long evening gown. Guests can use their
      discretion as to other equally black-tie appropriate attires (this may
      include formal jumpsuits, for example). White tie and national dress are
      also permitted. Sports blazers are not permitted.
    </BodyParagraph>
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
        borderRadius={{ xs: 0, sm: 1 }}
        py={{ xs: 4, sm: 8 }}
        px={{ xs: 4, sm: 10 }}
        color={{ xs: "tertiary.main", sm: "inherit" }}
        sx={{
          backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
          backgroundImage: { xs: "inherit", sm: `url(${Stone})` },
          backgroundSize: "100% 100%"
        }}
      >
        <Box mb={2} sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="ticket types tab"
            textColor="inherit"
            indicatorColor="primary"
            TabIndicatorProps={{
              sx: {
                backgroundColor: { xs: "tertiary.main", sm: "primary.main" }
              }
            }}
            variant="scrollable"
            scrollButtons="auto"
          >
            <TicketTab label="Christ's JCR + MCR students" index={0} />
            <TicketTab label="Non-christ’s cambridge students" index={1} />
            <TicketTab label="Christ's 2021 graduates" index={2} />
            <TicketTab label="Christ's alumni" index={3} />
            <TicketTab label="Christ's staff & fellow" index={4} />
          </Tabs>
        </Box>
        <TicketTabPanel value={value} index={0}>
          <FirstSection
            standardPrice={160}
            queueJumpPrice={175}
            diningPrice={195}
          />
          <AccessDescription />
          <DressCodeSection />
          {/* <SalesSection start="12:00 noon 29th January, 2022" /> */}
          <GuestSection numGuests={2} />
          <PurchaseMethodSection />
        </TicketTabPanel>
        <TicketTabPanel value={value} index={1}>
          <FirstSection
            standardPrice={160}
            queueJumpPrice={175}
            diningPrice={195}
          />
          <DressCodeSection />
          {/* <SalesSection start="12:00 noon 5th February, 2022" /> */}
          <GuestSection numGuests={2} />
          <PurchaseMethodSection />
        </TicketTabPanel>
        <TicketTabPanel value={value} index={2}>
          <FirstSection
            standardPrice={160}
            queueJumpPrice={175}
            diningPrice={195}
          />
          <DressCodeSection />
          {/* <SalesSection start="12th January, 2022" /> */}
          <GuestSection numGuests={2} />
          <PurchaseMethodSection googleForm />
        </TicketTabPanel>
        <TicketTabPanel value={value} index={3}>
          <FirstSection
            standardPrice={195}
            queueJumpPrice={205}
            diningPrice={225}
          />
          <DressCodeSection />
          {/* <SalesSection start="12th January, 2022" end="30th January, 2022" /> */}
          <GuestSection numGuests={1} />
          <PurchaseMethodSection googleForm ballot />
        </TicketTabPanel>
        <TicketTabPanel value={value} index={4}>
          <FirstSection standardPrice={80} diningPrice={110} staff />
          <DressCodeSection />
          {/* <SalesSection start="18th January, 2022" end="1st February, 2022" /> */}
          <GuestSection numGuests={3} />
          <PurchaseMethodSection googleForm ballot />
        </TicketTabPanel>
      </Box>
    </Box>
  );
}
