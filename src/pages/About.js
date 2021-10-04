import React, { useState } from "react";
import { Row, Col, Typography, Input, Button, Modal } from "antd";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player/lazy";

// Assets
import { BsPlayFill, BsArrowRight } from "react-icons/bs";
// Local
import "../styles/pages/aboutUs.css";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import TextAndImage from "../components/text&Img";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AiOutlineClose } from "react-icons/ai";

export default function AboutUs() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Title } = Typography;
  const [isBgGreen, setBgValues] = useState(true);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const ourCompany = (
    <>
    
    <Row id="ourCompanyRow" xs={24}>
      <Col xs={24} md={12} id="leftContainer">
        <Title level={3} className="title">
          Our company & culture
        </Title>
        <p className="text">
          It’s hard to capture the true culture of a company and put it into
          words. But here’s a little bit about us, how we operate and what we
          believe in. We hope it resonates with you!
        </p>
      </Col>
      <Col xs={24} md={12} id="rightContainer" onClick={showModal}>
        <div id="rightContainerImg">
          <section id="rightContainerBtn">
            <BsPlayFill color="white" size={70} />
          </section>
        </div>
      </Col>
    </Row>
    </>
  );

  const ourMission = (
    <div id="ourMissionContainer">
      <h2>
        <b>Our Mission</b>
      </h2>
      <div className="glow-pink"></div>
      <Title level={3} className="title" style={{ textAlign: "center" }}>
        We accomplish everything in life with the help of other people.
      </Title>
      <p className="text">
        People accomplish everything in life with the help of others. We exist
        to empower people with access to meaningful connections and knowledge.
      </p>
      <img
        src="https://www.brella.io/hs-fs/hubfs/Brella-3%20bubbles%20(1).png?width=710&height=347&name=Brella-3%20bubbles%20(1).png"
        id="image2"
      />
    </div>
  );

  const values = (
    <div
      id="valuesContainer"
      style={isBgGreen ? { backgroundColor: "#E8FFEF" } : {}}
      onMouseEnter={() => setBgValues(true)}
      // onMouseLeave={() => setBgValues(false)}
    >
      <Title level={3} className="title">
        Brella's values
      </Title>
      <p className="text" style={{ textAlign: "center" }}>
        The strongest relationships are built on empathy, integrity, genuine
        curiosity and a bit of fun. Those human touches form the heart of
        everything we do at Brella.
      </p>
      <Row gutter={50}>
        <Col xs={24} md={12}>
          <Title
            level={5}
            style={{ marginBottom: 0, textAlign: "center", lineHeight: "25px" }}
          >
            Boldly exploring what lies beyond the trail
          </Title>
          <p className="text-small">
            Getting off trail means thinking outside the box and breaking new
            ground, persevering to discover new ways of helping our customers,
            collaboration and growing as a business and a team. Curiosity helps
            us view the unknown in a positive light, while innovation helps us
            find new paths and trails.
          </p>
        </Col>
        <Col xs={24} md={12}>
          <Title
            level={5}
            style={{ marginBottom: 0, textAlign: "center", lineHeight: "25px" }}
          >
            Urge to conquer and grow
          </Title>
          <p className="text-small">
            Creating excellence means finding your passion and letting it fuel
            your steps to success. Like the best inventors, we continually
            strive to improve ourselves and our work to create the best version
            of ourselves possible. We embrace our entrepreneurial spirits and
            always seek out more responsibilities and opportunities.
          </p>
        </Col>
        <Col xs={24} md={12}>
          <Title
            level={5}
            style={{ marginBottom: 0, textAlign: "center", lineHeight: "25px" }}
          >
            Confidence without arrogance, humility without shame
          </Title>
          <p className="text-small">
            Trust and respect yourself and others. We have the most brilliant
            minds working together - and that means you too. Mistakes happen.
            But perseverance and enthusiasm keeps us on our feet, no matter how
            many times we fall. Humility, respect and integrity are all easier
            to carry than a large ego.
          </p>
        </Col>
        <Col xs={24} md={12}>
          <Title
            level={5}
            style={{ marginBottom: 0, textAlign: "center", lineHeight: "25px" }}
          >
            Human-centric & customer-first
          </Title>
          <p className="text-small">
            Technology is our core, but empathy and trust form our soul. We
            always consider the human aspect before numbers, processes our
            technology. Honest and open communication foster trust in our
            partnerships, whether they’re between our customers or ourselves.
          </p>
        </Col>
      </Row>
    </div>
  );

  const slides = (
    <div>
      <p
        level={5}
        style={{
          marginLeft: "7vw",
          marginRight: "7vw",
          marginTop: "80px",
          fontWeight: "bolder",
          borderBottom: "1px solid #D0D0D0",
          paddingBottom: "10px",
        }}
        className="text-small"
      >
        ABOUT US
      </p>
      <Marquee
        className={"example"}
        speed={100}
        pauseOnHover
        gradient={false}
        style={{ height: "120px" }}
      >
        <>
          <Title />
          <Title
            level={3}
            style={{ marginLeft: "20px", marginRight: "20px" }}
            className="title"
          >
            5 years old
          </Title>
          <Title
            level={3}
            style={{ marginLeft: "20px", marginRight: "20px" }}
            className="title"
          >
            20+ nationalities
          </Title>
          <Title
            level={3}
            style={{ marginLeft: "20px", marginRight: "20px" }}
            className="title"
          >
            1M+ networking meetings
          </Title>
        </>
      </Marquee>
      <Marquee
        className={"example"}
        speed={100}
        pauseOnHover
        direction="right"
        gradient={false}
        style={{ height: "120px" }}
      >
        <>
          <Title />
          <Title
            level={3}
            style={{ marginLeft: "20px", marginRight: "20px" }}
            className="title"
          >
            2 offices
          </Title>
          <Title
            level={3}
            style={{ marginLeft: "20px", marginRight: "20px" }}
            className="title"
          >
            68 average eNPS score
          </Title>
          <Title
            level={3}
            style={{ marginLeft: "20px", marginRight: "20px" }}
            className="title"
          >
            3 office guinea pigs
          </Title>
        </>
      </Marquee>
      <Marquee
        className={"example"}
        speed={100}
        pauseOnHover
        gradient={false}
        style={{ height: "120px" }}
      >
        <>
          <Title />
          <Title
            level={3}
            style={{ marginLeft: "20px", marginRight: "20px" }}
            className="title"
          >
            12 office dogs
          </Title>
          <Title
            level={3}
            style={{ marginLeft: "20px", marginRight: "20px" }}
            className="title"
          >
            2 office cats
          </Title>
          <Title
            level={3}
            style={{ marginLeft: "20px", marginRight: "20px" }}
            className="title"
          >
            2 office cats
          </Title>
        </>
      </Marquee>
    </div>
  );

  const story = (
    <div id="storyContainer">
      <Title className="title" level={3} style={{ textAlign: "center" }}>
        Brella's story
      </Title>
      <p className="text" style={{ textAlign: "center" }}>
        Events are perfect environments for collaboration, growth, and new
        opportunities. But these opportunities need facilitation. Gathering many
        people into one area isn’t enough - they need a simple way to connect
        with each other.
      </p>
      <p className="text" style={{ textAlign: "center" }}>
        Enter Brella.
      </p>
      <TextAndImage src="https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/A%20fruitful%20partnership.png?width=865&height=566&name=A%20fruitful%20partnership.png">
        <p className="text-small">
          In just 5 short years, we’ve helped more than 1 million people in more
          than 60 countries by giving them a powerful, meaningful and rewarding
          event experience.
        </p>
        <p className="text-small">
          While events provide amazing learning opportunities and stunning
          experiences, the real magic is when you meet the right person.
        </p>
      </TextAndImage>
      <TextAndImage
        src="https://www.brella.io/hs-fs/hubfs/Company%20photos/Brella_18%20(1)%20(1).jpg?width=700&height=467&name=Brella_18%20(1)%20(1).jpg"
        rtl={window.innerWidth > 750 ? true : false}
      >
        <p className="text-small">
          We’re proud to have helped create new jobs, connect job-hunters with
          recruiters, businesses grow, scientists & researchers connect,
          companies find investment and so much more.
        </p>
        <p className="text-small">
          We believe 100% in the power of human connections, because we achieve
          everything with the help of others.
        </p>
        <p className="text-small">
          Meeting the right person at the right time changes everything - and we
          want to give that experience to every attendee worldwide.
        </p>
      </TextAndImage>
      <TextAndImage src="https://www.brella.io/hs-fs/hubfs/Brella_1%20(1)%20(1ff).jpg?width=700&height=396&name=Brella_1%20(1)%20(1ff).jpg">
        <p className="text-small">
          We’ve been fortunate to work with a variety of industries and
          customers and gain the trust of a ton of big brands.
        </p>
        <p className="text-small">
          But creating great experiences for attendees starts at home, ensuring
          you have the best possible team and a work environment where you feel
          appreciated, safe and inspired.
        </p>
      </TextAndImage>
    </div>
  );

  const storyBottom = (
    <div id="storyBtmContainer">
      <Title level={3} className="title" style={{ textAlign: "center" }}>
        Be part of our story
      </Title>
      <p className="text-small" style={{ textAlign: "center" }}>
        If this sounds like a team you want to be a part of, then we have great
        news - we're hiring! Learn more about the many perks of becoming a
        Brellaneer.
      </p>
      <button id="joinTeamBtn">
        Join Our Team <BsArrowRight style={{ marginLeft: "15px" }} />
      </button>
    </div>
  );

  const search = (
    <div id="searchContainer">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Input
          placeholder="Your work email."
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "5px",
            borderRight: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
        <Button
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "130px",
            height: "50px",
            borderRadius: "5px",
            borderLeft: 0,
            borderColor: "lightgray",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            fontWeight: "bold",
          }}
        >
          SUBSCRIBE{" "}
          <BsArrowRight color="black" style={{ marginLeft: "10px" }} />
        </Button>
      </div>
    </div>
  );

  const newsLetter = (
    <div id="letterContainer">
      <Row>
        <Col xs={24} md={12} id="letterLeft">
          <Title
            style={{ fontSize: 20, fontWeight: "bolder", lineHeight: "20px" }}
          >
            Subscribe to our monthly newsletter
          </Title>
          <p
            className="text-small"
            style={{ color: "#7E7E7E", fontSize: "14px" }}
          >
            By clicking subscribe you’ll receive occasional emails from Brella.
          </p>
        </Col>
        <Col xs={24} md={12} id="letterRight">
          {search}
        </Col>
      </Row>
    </div>
  );

  return (
    <>
      <Header />
      {ourCompany}
      {ourMission}
      {values}
      {slides}
      {story}
      {storyBottom}
      {/* {newsLetter} */}
      <Footer />
      <Modal
        // title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        centered
        width={"80%"}
        destroyOnClose
        closeIcon={
          <AiOutlineClose
            // style={{ color: "#fff", fontSize: "1.3em", marginBottom: "20px" }}
            className="close-icon"
          />
        }
        // height={"100%"}
      >
        <ReactPlayer
          url="https://www.youtube-nocookie.com/embed/qVjN5QjWr3w?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fwww.brella.io%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fwww.brella.io&widgetid=1"
          controls={true}
          height={550}
          width={"100%"}
          playing={true}
        />
      </Modal>
    </>
  );
}
