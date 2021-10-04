import { Typography } from "antd";
import AttendeeConnections from "../components/AttendeeConnections";
import DataAnalytics from "../components/DataAnalytics";
import HeaderSection from "../components/HeaderSection";
import SeeBrella from "../components/SeeBrella";
import Subscribe from "../components/Subscribe";
import Trusted from "../components/Trusted";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer";
import TextVideo from "../components/TextVideo";
import Video from "../assets/Matchmaking_front_page.mp4";
import Video1 from "../assets/Customer_Success_front_page.mp4";
import Video2 from "../assets/Sponsor_Front_page_final.mp4";
import VideoText from "../components/VideoText";
import Resources from "../components/Resources";
import HybridComponent from "../components/HowWeDoHybrid";
import ModernFeatures from "../components/ModernFeatures";
import HappyCustomers from "../components/HappyCustomers";
import Carousel from "../components/Carousel";
import Header from "../components/Header";




const Home = () => {
  const heading = `Matchmaking & networking`;
  const text = `Brella's intent-driven intelligent matchmaking improves attendee satisfaction and engagement by delivering a superior networking experience. `;
  const button = `LEARN HOW OUR MATCHMAKING WORKS`;
  const video = Video;

  const heading1 = `Customer success`;
  const text1 = `Our mission is to empower attendees with access to meaningful knowledge and connections. And that starts with helping you host the best event possible.`;
  const button1 = `OUR CUSTOMER SUCCESS OFFERINGS`;
  const video1 = Video1;

  const heading2 = `Sponsor monetization`;
  const text2 = `Go beyond leads and drive relevant meetings to your sponsors. Measure and prove ROI to keep sponsors coming back.`;
  const button2 = `BUTTON`;
  const video2 = Video2;
  return (
    
    <div>
      <Header/>
      {/* <Navbar /> */}
      <HeaderSection />
      <Trusted />
      <Typography.Title level={1} className="heading">
        Everything you need for a kickass conference
      </Typography.Title>
      <TextVideo video={video} heading={heading} text={text} button={button} />
      <VideoText
        video={video2}
        heading={heading2}
        text={text2}
        button={button2}
      />
      
      <TextVideo
        video={video1}
        heading={heading1}
        text={text1}
        button={button1}
      />{" "}
      <DataAnalytics />
      <ModernFeatures />
      <SeeBrella />
      {/* <Carousel /> */}
      <HappyCustomers />
      <Resources />
      <Subscribe />
      <AttendeeConnections />
      {/* <HybridComponent/> */}
      <Footer />
    </div>
  );
};

export default Home;
