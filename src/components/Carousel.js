import Carousel from "react-multi-carousel";
import { Divider, Typography } from "antd";
import "react-multi-carousel/lib/styles.css";

import profile2 from "../assets/hybrid/profile.jpg";
import profile2logo from "../assets/hybrid/profilelogo.webp";

const CarouselComp = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1.5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel className="carousel" responsive={responsive}>
      <div style={{ width: "100%", padding: "0 30px" }}>
        <iframe
          width="100%"
          height="370"
          src="https://www.youtube.com/embed/upssHYAfSvU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="video-info">
          <p className="desc">
            "As we started using Brella at more and more events, we've really
            seen much deeper connections between our attendees and sponsors. It
            really sets us apart from our competition, so it is the app of
            choice for us now."
          </p>
          <img src={profile2} className="profile" />
          <p className="name">Anastasia Ioannou</p>
          <p className="designation">General Manager at Informa</p>
          <img src={profile2logo} />
          <Divider />
        </div>
      </div>
      <div style={{ width: "100%", padding: "0 30px" }}>
        <iframe
          width="100%"
          height="370px"
          src="https://www.youtube.com/embed/ICGxj817_Bw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="video-info">
          <p className="desc">
            "As we started using Brella at more and more events, we've really
            seen much deeper connections between our attendees and sponsors. It
            really sets us apart from our competition, so it is the app of
            choice for us now."
          </p>
          <img src={profile2} className="profile" />
          <p className="name">Anastasia Ioannou</p>
          <p className="designation">General Manager at Informa</p>
          <img src={profile2logo} />
          <Divider />
        </div>
      </div>

      <div style={{ width: "100%", padding: "0 30px" }}>
        <iframe
          width="100%"
          height="370"
          src="https://www.youtube.com/embed/l5D6TA_yQd0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="video-info">
          <p className="desc">
            "As we started using Brella at more and more events, we've really
            seen much deeper connections between our attendees and sponsors. It
            really sets us apart from our competition, so it is the app of
            choice for us now."
          </p>
          <img src={profile2} className="profile" />
          <p className="name">Anastasia Ioannou</p>
          <p className="designation">General Manager at Informa</p>
          <img src={profile2logo} />
          <Divider />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComp;
