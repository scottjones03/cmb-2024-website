import * as React from "react";
import { Tab, Tabs, Box, Typography, Button , Grid} from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import BodyParagraph from "../BodyParagraph";
import TabPanel from "../TabPanel";
import { Stone } from "../../assets/img";
import { OpenInNew } from "@mui/icons-material";

import { TShirt , BuyTicketButton} from "../../assets/img";

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

export const solidariTeeData = {
  name: "SolidariTee - International",
  bio: [
    "Founded by a Cambridge student in 2017, SolidariTee works with organisations in Greece to provide legal and psychological aid to refugees. This is achieved through the sale of T-shirts designed by artists who have been affected by displacement. SolidariTee also aims to educate people on the refugee crisis through social media and events. ",
    "Christ’s College May Ball is proud to be working with SolidariTee on exclusive SolidariTee x CMB t-shirts. You will have a chance at ticket purchase to buy a t-shirt for £10. If you purchase a t-shirt you will automatically be entered into a prize draw where you could get the price of your standard ticket reimbursed to you! The proceeds of our t-shirt sales will go towards our charities. "
  ],
  img: TShirt,
  imgMaxWidth: 400,
  link: "/charities/t-shirt-charity"
};

const FirstSection = ({
  standardPrice,
  alumniPrice,
  staffPrice,
  accessPrice,
  accessPlusPrice,
  queueJumpPrice,
  diningPrice,
  nonChristsStandardPrice
}) => (
  <>
    
    <BodyParagraph>
      There is an option to include an extra £2 to the price of your ticket which will be shared amongst the three charities that the Christ’s May Ball is supporting. <a href={`https://www.christsmayball.co.uk/#/charities`} style={{ textDecoration: 'none', color: 'inherit' }}> <strong>charities</strong></a> 
    </BodyParagraph>
    <BodyParagraph>
      We encourage you to buy a t-shirt for £10 which will enter you into a giveaway to be reimbursed for the price of a standard ticket and whose proceeds will go to one of our charity partners SolidariTee.
    </BodyParagraph>
    <Box
      mx="auto"
      pt={0} pb={0} // Remove padding
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center the content
        justifyContent: "center", // Center the content
        backgroundColor: { xs: "rgba(0,0,0,0.3)", sm: "inherit" },
        backgroundImage: { xs: `url(${Stone})`, sm: `url(${Stone})` },
        backgroundSize: "100% 100%",
      }}
      px={0} // Remove horizontal padding
      color="tertiary.main"
    >
      <Grid item>
        <Box
          component="img"
          my={0} // Remove margin
          maxWidth={solidariTeeData.imgMaxWidth}
          width="100%"
          src={solidariTeeData.img}
          alt="logo"
        />
      </Grid>
    </Box>
    {(
      <>
        <BodyParagraph>
          <strong>Christ's Standard (£{standardPrice})</strong> 
        </BodyParagraph>
        <BodyParagraph>
        Enjoy a night of unlimited food, drink and entertainment at the 2024 Christ’s May Ball.
        This ticket is open to all Christ’s Students (undergraduate and postgraduate)  and comes with the right to buy four guest tickets at standard (non-christ’s) price.
        </BodyParagraph>
        <BodyParagraph>
          <strong>Christ's Alumni (£{alumniPrice})</strong> 
        </BodyParagraph>
        <BodyParagraph>
        We are delighted to welcome back our alumni to join us for a night of unlimited food, drink and entertainment. All alumni ticket holders will be entered into a giveaway with our partners Gin D’Azur to stand the chance to win a case of their award winning Gin. Alumni are entitled to buy three additional guest tickets.
        </BodyParagraph>
        <BodyParagraph>
          <strong>Christ’s Staff and Fellows (£{staffPrice})</strong> 
        </BodyParagraph>
        <BodyParagraph>
        We invite staff and fellows to join us at the 2024 Christ’s May Ball for a night of unlimited food, drink and entertainment. Tickets are limited and will be allocated via a ballot that opens on the 1st of February and closes at 6pm on the 4th of February. Those who have been allocated a ticket will be informed on the 5th of February, with those who have been unsuccessful being given the option to purchase a ticket at standard (non-christ’s) price. Staff and fellows are entitled to buy three additional guest tickets at standard (non-christ’s) price.
        </BodyParagraph>
        <BodyParagraph>
          <strong>Christ’s Access (£{accessPrice})</strong> 
        </BodyParagraph>
        <BodyParagraph>
        Christ’s undergraduate students on means tested bursaries are entitled to a discounted ticket for the May Ball. Once reserved, eligibility will be confirmed with the tutorial office before requesting payment. Buyers of this ticket are entitled to purchase two guest tickets at standard (non-christs’s) price.
        </BodyParagraph>
        <BodyParagraph>
          <strong>Non - Christ’s Standard (£{nonChristsStandardPrice})</strong>
        </BodyParagraph>
        <BodyParagraph>
        Join us at the 2024 Christ’s May Ball for a night of unlimited food, drink and entertainment! This ticket is open to students, fellows and staff of the university of Cambridge and comes with the right to buy two additional guest tickets.
        </BodyParagraph>
        <BodyParagraph>
          <strong>Access + (£{accessPlusPrice})</strong>
        </BodyParagraph>
        <BodyParagraph>
        This is our brand new pilot scheme to widen financial access beyond Christ’s undergraduate students. Christ’s postgraduate students on means tested financial support are eligible to purchase a discounted Access + ticket at the time of the Christ’s Release. During general release, students from other colleges on the Cambridge bursary scheme will be eligible to buy a limited number of Access + Tickets, after which they will have the option to either join a waitlist or purchase a standard price ticket. For non-Christs’s students we will require a letter from their college’s tutorial office confirming receipt of the bursary.
        </BodyParagraph>
      </>
    )}
    <Typography variant="h5" gutterBottom>
      <b>Add Ons</b>
    </Typography>
    <BodyParagraph>
      <strong>Queue Jump (£{queueJumpPrice})</strong> – Queue jump allows express entry in to the 2024 Christ’s May Ball, allowing you more time to explore the beautiful scenery and eat and drink to your heart's content.
    </BodyParagraph>
    <BodyParagraph>
      <strong>Dining (£{diningPrice})</strong> – Join us for a sumptuous meal in our formal hall, following which you are free to begin to explore the ball before the rest of the guests arrive.
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
      Christ's May Ball is keen to welcome you and your guests - which is why we
      have made guest tickets no more expensive than Christ's member ones.
      Please do feel encouraged to bring along your friends from other Colleges
      and from outside the University! Note everyone must be 18+.
    </BodyParagraph>
  </>
);

const PurchaseMethodSection = ({ googleForm, ballot }) => (
  <>
    <Typography variant="h4">Purchase method</Typography>
    {googleForm ? (
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
    </BodyParagraph>
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

const DetailedInfoSection = () => (
  <>
    <Typography variant="h4">Detailed information</Typography>
    <BodyParagraph>
      More information about the ball is available{" "}
      <Button
        color="primary"
        size="small"
        variant="text"
        LinkComponent={RouterLink}
        to="/info"
        sx={{ textTransform: "none", fontWeight: "bold", minWidth: 0 }}
        endIcon={<OpenInNew />}
      >
        Here
      </Button>
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
          backgroundImage: { xs: `url(${Stone})`, sm: `url(${Stone})` },
          backgroundSize: "100% 100%"
        }}
      >

          <Link href={'https://ticketing.christsmayball.co.uk/'} target="_blank" rel="noopener noreferrer">
            <img src={BuyTicketButton} alt="Clickable Image" />
          </Link>
           <Grid item xs={12} textAlign="center">
              <Typography variant="h3" gutterBottom>
                TICKETING INFORMATION
              </Typography>
          </Grid>
          <FirstSection
            standardPrice={175}
            alumniPrice={195}
            staffPrice={100}
            accessPrice={100}
            accessPlusPrice={130}
            queueJumpPrice={20}
            diningPrice={50}
            nonChristsStandardPrice={195}
          />
           
      </Box>
    </Box>
  );
}
