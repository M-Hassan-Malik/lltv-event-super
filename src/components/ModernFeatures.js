import { Col, Row, Typography } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoPrimitiveDot } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";

const ModernFeatures = ({ isTransparent }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: true,
    vertical: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 1500,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const { Title } = Typography;
  return (
    <div className={isTransparent ? "main-features-trnas" : "main-features"}>
      <div className="features">
        <div className="left-side">
          <Title level={4}>
            {isTransparent
              ? "Everything the modern event professional needs"
              : " Modern features for interactive and inspiring events"}
          </Title>
          <p>
            {isTransparent
              ? "Our complete event platform has the essential features to make your hybrid event nothing short of amazing. From livestream hosting to an embeddable schedule, plus full support for iOS, Android and Web, Brella is the platform for the modern event professional."
              : "No matter the format, Brella has what you need to host a profitable, professional event."}
          </p>
          {isTransparent ? (
            <div>
              <ul className="services">
                <li>Simple set up</li>
                <li>Branding + customization</li>
                <li>iOS, Android + Web app</li>
              </ul>
              <p className="link">
                All Features <BsArrowRight />
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="right-side">
          <Slider {...settings}>
            <div className="text-card">
              <p>
                <GoPrimitiveDot />
                AI-powered matchmaking algorithm
              </p>
            </div>
            <div className="text-card">
              <p>
                {" "}
                <GoPrimitiveDot />
                {isTransparent ? "Livestream chat" : "1-click data export"}
              </p>
            </div>
            <div className="text-card">
              <p>
                {" "}
                <GoPrimitiveDot />
                {isTransparent
                  ? "Detailed engagement analytics"
                  : "Hosted 1:1 video conferencing"}
              </p>
            </div>
            <div className="text-card">
              <p>
                <GoPrimitiveDot />
                {isTransparent ? "Attendee intents" : "Breakout rooms"}
              </p>
            </div>
            <div className="text-card">
              <p>
                <GoPrimitiveDot />
                {isTransparent
                  ? "iOS, Android, Web app"
                  : "Multi-track livestream hosting"}
              </p>
            </div>
            <div className="text-card">
              <p>
                <GoPrimitiveDot />
                {isTransparent
                  ? "Sponsor listing & grouping"
                  : "Virtual sponsor booths"}
              </p>
            </div>
            <div className="text-card">
              <p>
                <GoPrimitiveDot />
                {isTransparent ? "Livestream chat" : "Hosted buyer support"}
              </p>
            </div>
            <div className="text-card">
              <p>
                <GoPrimitiveDot />
                {isTransparent
                  ? "Detailed engagement analytics                  "
                  : "Insightful analytics"}
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ModernFeatures;
