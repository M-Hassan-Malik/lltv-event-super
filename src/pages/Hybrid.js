import { Button, Divider, Typography } from "antd";
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
import CarouselComp from "../components/Carousel";
import HowWeDoHybrid from "../components/HowWeDoHybrid";
import ModernFeatures from "../components/ModernFeatures";
import SuccessStoryCard from "../components/SuccessStoryCard";
import GreenCard from "../components/GreenCard";
import HybridComponent from "../components/HowWeDoHybrid";
import VideoSlider from "../components/VirtualAndHybrid/VideoSlider";
import image1 from "../assets/hybrid/image1.webp";
import image2 from "../assets/hybrid/image2.webp";
import image3 from "../assets/hybrid/image3.webp";
import sales1 from "../assets/hybrid/sales1.mp4";
import sales2 from "../assets/hybrid/sales2.mp4";
import sales3 from "../assets/hybrid/sales3.mp4";

const Hybrid = () => {
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
    <div className="hybrid-main">
      <Header />
      <div className="hybrid-body w-70">
        <div className="header">
          <div className="main-head">
            <Typography.Title level={1}>
              Host engaging & professional hybrid events
            </Typography.Title>
            <p>
              Bring your entire community together for an incredible shared
              experience, no matter where they are.
            </p>
          </div>
          <div className="video-section">
            {video && (
              <video
                autoPlay="autoPlay"
                loop
                muted
                playsInline
                width="432px"
                height="280px"
              >
                <source src={video} />
              </video>
            )}

            <Divider />
            <div className="bottom-content">
              <p>DOWNLOAD THE ULTIMATE GUIDE TO HYBRID EVENTS FOR FREE</p>
              <Button type="primary">
                Download <BsArrowRight />
              </Button>
            </div>
          </div>
        </div>

        <VideoSlider
          heading={"Provide the best hybrid networking experience"}
          text1={
            "Attendees who participate in Brella meetings are 18% more likely to come back to your next event."
          }
          hasText1={true}
          text2={
            "  Our AI-powered matchmaking gives the highest-quality matches and meetings to each participant, no matter if they attend virtually or live."
          }
          videos={[ai, personal, quick]}
          isVideo={true}
          buttonText={"HOW BRELLA DOES MATCHMAKING RIGHT"}
          videoText={[
            {
              heading: "AI MATCHMAKING & NETWORKING",
              text: "Our algorithm uses artificial intelligence to match attendees according to interests and their event goals.",
            },
            {
              heading: "PERSONAL ONLINE MEETING ROOM",
              text: "Personal meeting rooms offer your attendees the flexibility tohave a quality discussion from the event or their home.",
            },
            {
              heading: "QUICK MEETING BOOKING",
              text: "No unnecessary back and forth - booking a meeting takes 5 seconds.",
            },
          ]}
        />
        <div className="images">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
        </div>
      </div>
      <div className="carousel-section">
        <Typography.Title level={1}>
          Powering hybrid
          <br />
          experiences around the
          <br />
          world
        </Typography.Title>
        <CarouselComp />
      </div>

      <div className="hybrid-body w-70">
        <VideoSlider
          heading={"Understand both your live and virtual impact"}
          text1={
            "Attendees who participate in Brella meetings are 18% more likely to come back to your next event."
          }
          hasText1={false}
          text2={
            "Gain a new understanding of your audience and event success by measuring impact across different formats. Determine engagement & activity levels across your live & virtual audience, calculate networking impact and much more."
          }
          videos={[image1, image2, image3]}
          isVideo={true}
          buttonText={"DATA AND ANALYTICS"}
          videoText={[
            {
              heading: "DIGITAL BOOTH TRAFFIC",
              text: "Prove value to sponsors by showcasing booth traffic before and during your event.",
            },
            {
              heading: "LIVESTREAM ANALYTICS",
              text: "Determine virtual reach with livestream timestamps, dropoff rates and more.",
            },
            {
              heading: "AUDIENCE ENGAGEMENT DATA",
              text: "Segment your audience by virtual & live participants and evaluate activity levels.",
            },
          ]}
        />

        <div className="success">
          <SuccessStoryCard noImage={false} />
        </div>

        <div className="images">
          <img src={img6} />
          <img src={img7} />
          <img src={img8} />
          <img src={img9} />
          <img src={img10} />
        </div>

        <GreenCard />

        <VideoSlider
          heading={"Drive sales to your sponsors - both online and offline"}
          text1={
            "Attendees who participate in Brella meetings are 18% more likely to come back to your next event."
          }
          hasText1={false}
          text2={
            "Drastically increase sponsor value with a presence both online and offline, and accurate reporting of their return on investment."
          }
          videos={[sales1, sales2, sales3]}
          isVideo={true}
          buttonText={"FEATURES FOR YOUR SPONSORS"}
          videoText={[
            {
              heading: "VIRTUAL BOOTHS",
              text: "Combine a physical presence with a powerful online microsite that drives greater awareness and conversions.",
            },
            {
              heading: "ONLINE & OFFLINE 1:1 MEETINGS",
              text: "Sponsors can expedite their sales process and meet relevant leads 1:1 right at your event.",
            },
            {
              heading: "SPONSOR ADS & PROMOTIONS",
              text: "Drive more awareness and traffic to your sponsors through announcements and sponsor advertisements in the platform.",
            },
          ]}
        />

        <div className="success">
          <SuccessStoryCard noImage={false} />
        </div>
      </div>
      <HowWeDoHybrid isHybrid={true} />
      {/* <div className="hybrid-body w-70"> */}
      <ModernFeatures isTransparent={true} />
      {/* </div> */}
      <Resources type={"hybrid"} />
      <Subscribe />
      <AttendeeConnections />

      <Footer />
    </div>
  );
};

export default Hybrid;
