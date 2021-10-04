import React, { useState } from "react";
import { Row, Col, Typography, Button, Table, Switch } from "antd";
import Included from "../components/Included";
import { PricingCard } from "../components/PricingCard";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/pricing.css";
import person1 from "../assets/person-1.png";
import person2 from "../assets/person-2.png";
import person3 from "../assets/person-3.webp";
import person4 from "../assets/person-4.png";
import person5 from "../assets/person-5.png";
import person6 from "../assets/person-6.png";
import { BsArrowRight } from "react-icons/bs";

const PricingTables = () => {
  const { Title, Text } = Typography;

  const data = [
    {
      text: "Hybrid, virtual and in-person event support",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Multi-day events (up to 14 days)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Responsive Web App",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Native iOS and Android apps",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Schedule widget for websites",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Passwordless authentication (Magic Link)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Social login options (Apple, Google, LI, FB)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Best-in-class user experience",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Comprehensive branding options",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Communities with no fixed end-date (coming soon)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Tailored success, support & consulting",
      starter: false,
      professional: true,
      portfolio: true,
    },
  ];

  const data1 = [
    {
      text: "AI-powered matchmaking",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Interest & intent based networking recommendations",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "1:1 video meetings on any device",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Group video meetings on any device",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "In-app private messaging on any device",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Multiple timezone support",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Sync schedules with 3rd party calendars",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Networking notifications (push & email)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "1:1 meeting ratings (coming soon)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Controlled access to networking features (coming soon)",
      starter: true,
      professional: true,
      portfolio: true,
    },
  ];

  const data2 = [
    {
      text: "Interactive virtual sponsor booths",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Targeted, AI-powered prospecting",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Sponsor grouping",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Live chat in virtual sponsor booths",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Sponsor ads on platform",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Dedicated sponsor dashboard (coming soon)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Sponsor self-service (coming soon)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "1-click data export	",
      starter: true,
      professional: true,
      portfolio: true,
    },
  ];

  const data3 = [
    {
      text: "Easy livestream integration",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Multi-track schedule",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Breakout Rooms (up to 100 people)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Controlled access to event streams (coming soon)",
      starter: true,
      professional: true,
      portfolio: true,
    },
  ];

  const data4 = [
    {
      text: "Ticketing & registration system (Coming Soon)",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Group users by ticket-type",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Controlled platform access for each ticket type",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Public event join codes",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Private event join codes	",
      starter: true,
      professional: true,
      portfolio: true,
    },
  ];
  const data5 = [
    {
      text: "Detailed session analytics",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Networking and meeting data",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Insightful sponsor interaction data",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Behavioral matchmaking analytics",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Livestream analytics",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "1-Click data export",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Qualitative data on 1:1 meetings (coming soon)",
      starter: true,
      professional: true,
      portfolio: true,
    },
  ];
  const data6 = [
    {
      text: "Comprehensive Help Center",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Full technical support",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Full attendee / end-user support",
      starter: true,
      professional: true,
      portfolio: true,
    },
    {
      text: "Dedicated Customer Success Manager",
      starter: false,
      professional: true,
      portfolio: true,
    },
  ];
  const data7 = [
    {
      text: `"Impactful networking & matchmaking" consulting`,
      starter: false,
      professional: true,
      portfolio: true,
    },
    {
      text: `"Successful event monetization" consulting`,
      starter: false,
      professional: true,
      portfolio: true,
    },
    {
      text: `"Event communications that inspire" consulting`,
      starter: false,
      professional: true,
      portfolio: true,
    },
    {
      text: `"Become a Brella Superuser" consulting`,
      starter: false,
      professional: true,
      portfolio: true,
    },
    {
      text: `Post-event insights call	`,
      starter: false,
      professional: true,
      portfolio: true,
    },
  ];

  const title = "Overview";
  const title1 = "Networking & Matchmaking";
  const title2 = "Sponsorships & Monetization";
  const title3 = "Content & Sessions";
  const title4 = "Ticketing & Registration";
  const title5 = "Data & Analytics";
  const title6 = "Basic Success & Support";
  const title7 = "Tailored Success Consulting";

  return (
    <div>
      <center>
        <Row justify="center" style={{ marginTop: "5rem" }}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Title level={1}>What’s included</Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col lg={12} md={16} sm={20} xs={14}>
            <Text style={{ fontSize: "18px" }}>
              Built around our acclaimed AI-powered matchmaking technology,
              Brella is an immersive event platform that puts your event
              experience front and center — <i> whether it’s in-person, virtual or
              hybrid. </i>
            </Text>
          </Col>
        </Row>
      </center>
      <Included data={data} title={title} />
      <Included data={data1} title={title1} />
      <Included data={data2} title={title2} />
      <Included data={data3} title={title3} />
      <Included data={data4} title={title4} />
      <Included data={data5} title={title5} />
      <Included data={data6} title={title6} />
      <Included data={data7} title={title7} />
    </div>
  );
};

export default function Pricing() {
  const { Text, Title } = Typography;
  const [activeIndex, setActiveIndex] = useState(1);
  const [currencyType, setCurrencyType] = useState(1);

  return (
    <div className="pricingMain">
      <Header />
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 150,
          marginBottom: 150,
          padding: "20px",
        }}
        gutter={[10, 10]}
      >
        <Col xs={24}>
          <Title
            style={{ textAlign: "center", marginBottom: 0, paddingBottom: 0 }}
          >
            Pricing
          </Title>
        </Col>

        <Text style={{ marginTop: "30px" }} className="mainText">
          Simple, upfront and transparent – just like our platform.{" "}
        </Text>
      </Row>

      <div
        // style={{
        //   backgroundColor: "#fafafa",
        //   display: "flex",
        //   justifyContent: "center",
        //   marginTop: 20,
        //   marginBottom: 0,
        //   // flexDirection: "column",
        // }}
        className="filter-pricing"
      >
        <p>Number Of Attendees</p>
        <div className="btn-container">
          <button
            className={`${activeIndex === 1 ? "black-btn" : ""}`}
            onClick={() => setActiveIndex(1)}
          >
            {"<100"}
          </button>
          <button
            className={`${activeIndex === 2 ? "black-btn" : ""}`}
            onClick={() => setActiveIndex(2)}
          >
            250
          </button>
          <button
            className={`${activeIndex === 5 ? "black-btn" : ""}`}
            onClick={() => setActiveIndex(5)}
          >
            500
          </button>
          <button
            className={`${activeIndex === 10 ? "black-btn" : ""}`}
            onClick={() => setActiveIndex(10)}
          >
            1000
          </button>
          <button
            className={`${activeIndex === 20 ? "black-btn" : ""}`}
            onClick={() => setActiveIndex(20)}
          >
            2000
          </button>
          <button
            className={`${activeIndex === 50 ? "black-btn" : ""}`}
            onClick={() => setActiveIndex(50)}
          >
            5000+
          </button>
        </div>
        <div className="switch-currency">
          <span>Currency</span>
          <div className="currency-switch">
            <button
              className={`${currencyType === 0 ? "gray-btn" : ""}`}
              onClick={() => setCurrencyType(0)}
            >
              USD
            </button>
            <button
              className={`${currencyType === 1 ? "gray-btn" : ""}`}
              onClick={() => setCurrencyType(1)}
            >
              EUR
            </button>
          </div>
        </div>
      </div>
      <Row
        style={{
          backgroundColor: "#fafafa",
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          // padding: 50,
          // flexDirection: "column",
        }}
      >
        <PricingCard
          image={"https://www.brella.io/hubfs/Starter%20icon.svg"}
          name={"Starter"}
          price={"2000"}
        />
        <PricingCard
          image={"https://www.brella.io/hubfs/Professional%20icon.svg"}
          name={"Professional"}
          price={"4000"}
          boxShadow={true}
        />
        <PricingCard
          image={"https://www.brella.io/hubfs/Portfolio%20icon.svg"}
          name={"Portfolio"}
        />
        <Col lg={12}>
          <p style={{ textAlign: "center", fontSize: 12, margin: "40px 0" }}>
            The final price for the Starter plan will depend on the total number
            of attendees at your event. The final price for the Professional
            plan will depend on the total number of attendees at your event +
            the consulting services selected. The final price for the Portfolio
            plan will depend on the number of attendees at each event, the
            consulting services requested and the number of events in your
            portfolio — more events equates to bigger discounts!
          </p>
        </Col>
      </Row>
      <Row
        style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        className={"centerText"}
      ></Row>

      <PricingTables />
      <Row style={{ marginTop: 100, marginBottom: 50 }}>
        <Col
          lg={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="centerText"
        >
          <Text style={{ fontWeight: "bolder", fontSize: 27, width: 600 }}>
            Supercharge your success with Brella's Professional plan
          </Text>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 100,
        }}
        className="centerText"
      >
        <Col lg={6} style={{}}>
          <h1
            style={{
              fontSize: 45,
              fontWeight: "bolder",
              paddingBottom: 0,
              marginBottom: 0,
              color: "#00af66",
            }}
          >
            29.1%
          </h1>
          <Text>More attendee engagement using consulting services</Text>
        </Col>

        <Col lg={6}>
          <h1
            style={{
              fontSize: 45,
              fontWeight: "bolder",
              paddingBottom: 0,
              marginBottom: 0,
              color: "#00af66",
            }}
          >
            3X
          </h1>
          <Text>Higher meeting acceptance compared to competitors</Text>
        </Col>

        <Col lg={6}>
          <h1
            style={{
              fontSize: 45,
              fontWeight: "bolder",
              paddingBottom: 0,
              marginBottom: 0,
              color: "#00af66",
            }}
          >
            87%
          </h1>
          <Text>Higher attendance when using consulting services</Text>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#fafafa",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={
              "https://www.brella.io/hs-fs/hubfs/blacksmith-logo-bla.png?width=350&height=350&name=blacksmith-logo-bla.png"
            }
            style={{ borderRadius: "50%", height: 300, width: 300 }}
          />
        </Col>
        <Col
          lg={12}
          style={{ display: "flex", justifyContent: "center" }}
          className={"centerText"}
        >
          <Text style={{ fontWeight: "bolder", padding: 50, fontSize: 20 }}>
            “Our CSM has been incredibly patient with all of my questions AND
            has found solutions to help me use the Brella platform better. She
            has also provided some great ideas of how we can use different
            Brella functionalities which we incorporated into our events with
            great success.”
            <br />
            Caitlin Orosz
          </Text>
        </Col>
      </Row>
      <FAQ />
      <div className="main-attendee white-bg">
        <div className="attendee">
          <Title>Deliver engaging events that inspire</Title>
          <p>
            Get access to Brella's unbeatable attendee experience, AI-powered
            matchmaking capabilities and monetization options for your next
            hybrid, virtual or in-person event.
          </p>
          <Button type="primary">
            Get Started <BsArrowRight />
          </Button>
        </div>

        <div className="shadow-bottomA"></div>
      </div>
      <Footer />
    </div>
  );
}
