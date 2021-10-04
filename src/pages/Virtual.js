import { Button, Divider, Typography, Row, Col, Input } from "antd";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Resources from "../components/Resources";
import Subscribe from "../components/Subscribe";
import AttendeeConnections from "../components/AttendeeConnections";

import header_vid from "../assets/hybrid/hybrid-header-video.mp4";
import ai from "../assets/hybrid/ai.mp4";
import personal from "../assets/hybrid/personal.mp4";
import quick from "../assets/hybrid/quick.mp4";

import img1 from "../assets/hybrid/img1.webp";
import img2 from "../assets/hybrid/img2.webp";
import img3 from "../assets/hybrid/img3.webp";
import img4 from "../assets/hybrid/img4.webp";
import img5 from "../assets/hybrid/img5.webp";
import img6 from "../assets/hybrid/img6.jpeg";
import img7 from "../assets/hybrid/img7.webp";
import img8 from "../assets/hybrid/img8.webp";
import img9 from "../assets/hybrid/img9.webp";
import img10 from "../assets/hybrid/img10.webp";
import img11 from "../assets/hybrid/img11.webp";
import img12 from "../assets/hybrid/img12.webp";
import img13 from "../assets/hybrid/img13.webp";
import img14 from "../assets/hybrid/img14.webp";
import img15 from "../assets/hybrid/img15.webp";
import img16 from "../assets/hybrid/img16.webp";
import img17 from "../assets/hybrid/img17.webp";
import img18 from "../assets/hybrid/img18.webp";
import img19 from "../assets/hybrid/img19.webp";
import img20 from "../assets/hybrid/img20.webp";
import CarouselComp from "../components/Carousel";
import SuccessStoryCard from "../components/SuccessStoryCard";
import GreenCard from "../components/GreenCard";
import HowWeDoHybrid from "../components/HowWeDoHybrid";
import VideoSlider from "../components/VirtualAndHybrid/VideoSlider";
import chats from "../assets/virtual/chats.mp4";
import room from "../assets/virtual/room.mp4";
import multiple from "../assets/virtual/multiple.mp4";
import livestream from "../assets/virtual/livestream.webp";
import interests from "../assets/virtual/interests.webp";
import roi from "../assets/virtual/roi.webp";

const Hybrid = () => {
  const { Text } = Typography;

  const videos = [ai, personal, quick];

  const [currnetid, setCurrentId] = useState(1);

  const [currnetid2, setCurrentId2] = useState(1);

  const [video, setVideo] = useState(videos[currnetid]);

  useEffect(() => {
    setTimeout(() => {
      if (currnetid >= 2) {
        setVideo(videos[0]);
        setCurrentId(0);
        setCurrentId2(0);
      } else {
        setVideo(videos[currnetid + 1]);
        setCurrentId(currnetid + 1);
        setCurrentId2(currnetid + 1);
      }
    }, 3000);
  }, [currnetid2]);

  useEffect(() => {
    setVideo(null);
    setTimeout(() => {
      setVideo(videos[currnetid]);
    }, 4);
  }, [currnetid]);

  return (
    <div className="hybrid-main virtual-main">
      <Header />
      <div className="hybrid-body w-70">
        <div className="header">
          <div className="main-head">
            <Typography.Title level={1}>
              Host engaging & professional virtual events
            </Typography.Title>
            <p>
              We come for the content, but it’s the people we meet who make an
              event memorable. Whether it’s during the livestream, 1:1 or with
              sponsors, Brella is the virtual event platform that facilitates
              relevant attendee interactions.
            </p>
          </div>
          <div className="video-section">
            <video
              autoPlay="autoPlay"
              loop
              muted
              playsInline
              width="432px"
              height="280px"
            >
              <source src={header_vid} />
            </video>
            <Divider />
            <div className="bottom-content">
              <p>GET OUR FREE GUIDE TO HOSTING VIRTUAL EVENTS IN BRELLA</p>
              <Button type="primary">
                Download <BsArrowRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="images">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
          <img src={img7} />
        </div>
      </div>

      <Row
        align="middle"
        style={{
          margin: "60px 0",
          padding: "30px 0",
          background: "#F5F5F5",
          minHeight: "500px",
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
              "https://www.brella.io/hs-fs/hubfs/40643_jonathan.jpeg?width=350&height=350&name=40643_jonathan.jpeg"
            }
            style={{ borderRadius: "50%", height: 300, width: 300 }}
          />
        </Col>
        <Col
          lg={12}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
          // className={""}
        >
          <Text
            style={{
              fontWeight: "bolder",
              padding: "50px 50px 20px 0",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            “What surprised us most was a higher networking score [from our
            attendee feedback virtually than when people are in the same room.
            This higher score is directly correlated to our use of Brella."
            <br />
          </Text>
          <div class="description-logo">
            <img
              style={{ height: "auto", width: "100px" }}
              src={
                "https://www.brella.io/hs-fs/hubfs/emax%20logoedit.png?height=60&name=emax%20logoedit.png"
              }
            />
            <div>
              <p>Jonathan Rudman</p>
              <p>CEO at Emax</p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="hybrid-body w-70">
        <VideoSlider
          heading={"Start a discourse around core topics"}
          text1={
            "Attendees who participate in Brella meetings are 18% more likely to come back to your next event."
          }
          hasText1={false}
          text2={
            "It’s simple to both host and watch your event content. Your attendees can jump straight into the stream as soon as they join, or start networking 1:1 with others. And with multiple livestream hosting, live chat, breakout rooms and more, it’s simple to provide access to the content your audience demands."
          }
          videos={[multiple, chats, room]}
          isVideo={true}
          isVirtual={true}
          buttonText={"ALL FEATURES"}
          videoText={[
            {
              heading: "MULTIPLE LIVESTREAMS",
              text: "Combine a physical presence with a powerful online microsite that drives greater awareness and conversions.",
            },
            {
              heading: "LIVESTREAM CHATS & Q&AS",
              text: "Sponsors can expedite their sales process and meet relevant leads 1:1 right at your event.",
            },
            {
              heading: "BREAKOUT ROOMS",
              text: "Drive more awareness and traffic to your sponsors through announcements and sponsor advertisements in the platform.",
            },
          ]}
        />
      </div>
      {/* <div className="carousel-section">
        <Typography.Title level={1}>
          Powering hybrid
          <br />
          experiences around the
          <br />
          world
        </Typography.Title>
        <CarouselComp />
      </div> */}

      <div className="hybrid-body w-70">
        <div className="images">
          <img src={img8} />
          <img src={img9} />
          <img src={img10} />
          <img src={img11} />
          <img src={img12} />
        </div>
        <div className="network-section second-video">
          <VideoSlider
            heading={"Relevant and memorable 1:1 meetings"}
            text1={
              "Attendees who participate in Brella meetings are 18% more likely to come back to your next event."
            }
            hasText1={false}
            text2={
              "We believe one good meeting outshines 1,000 random ones. And it’s not make believe - we found that attendees who have Brella meetings are 18% more likely to come to your next event. That’s the power of networking done right, and you’ll bring that to your event with Brella."
            }
            videos={[ai, personal, quick]}
            isVideo={true}
            isVirtual={true}
            reverse={true}
            buttonText={"HOW WE DO MATCHMAKING RIGHT"}
            videoText={[
              {
                heading: "AI-POWERED MATCHMAKING",
                text: "Combine a physical presence with a powerful online microsite that drives greater awareness and conversions.",
              },
              {
                heading: "1:1 VIDEO CONFERENCING",
                text: "Sponsors can expedite their sales process and meet relevant leads 1:1 right at your event.",
              },
              {
                heading: "EASY MEETING SCHEDULING",
                text: "Drive more awareness and traffic to your sponsors through announcements and sponsor advertisements in the platform.",
              },
            ]}
          />
        </div>

        <div className="success">
          <SuccessStoryCard noImage={true} />
        </div>

        <div className="images">
          <img src={img13} />
          <img src={img14} />
          <img src={img15} />
          <img src={img16} />
          <img src={img5} />
        </div>

        <GreenCard />

        <VideoSlider
          heading={"Prove the impact on your bottom line"}
          text1={
            "Attendees who participate in Brella meetings are 18% more likely to come back to your next event."
          }
          hasText1={false}
          text2={
            "Data is the new lynchpin for the winning event strategies. Stay on top of the changing demands of your audience, determine content impact and make informed, strategic decisions with Brella’s dashboard and reporting."
          }
          videos={[livestream, interests, roi]}
          isVideo={true}
          isVirtual={true}
          reverse={false}
          buttonText={"OUR EVENT ANALYTICS"}
          videoText={[
            {
              heading: "LIVESTREAM ANALYTICS",
              text: "Gain a complete understanding of your content performance with metrics on session attendance, drop-offs and more.",
            },
            {
              heading: "ATTENDEE INTEREST & INTENTS",
              text: "Understand what excites your audience and the goals they want to achieve at your events.",
            },
            {
              heading: "SPONSOR ROI ANALYTICS",
              text: "Put a number on your sponsors' return on investment with meeting counts, booth traffic, ad views and more.",
            },
          ]}
        />

        <div className="images">
          <img src={img17} />
          <img src={img18} />
          <img src={img19} />
          <img src={img20} />
        </div>

        <div className="success">
          <SuccessStoryCard noImage={true} />
        </div>
      </div>
      <HowWeDoHybrid isHybrid={false} />
      <Resources type={"virtual"} />
      <Subscribe />
      <AttendeeConnections />

      <Footer />
    </div>
  );
};

export default Hybrid;
