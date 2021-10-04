import { Typography, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import event1 from "../assets/event1.mp4";
import event2 from "../assets/event2.mp4";
import event3 from "../assets/event3.mp4";
import { Animated } from "react-animated-css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const { Title } = Typography;
  const [activeVideo, setActiveVideo] = useState(event1);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(null);
  const [type, setType] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(0);
  const changeVideo = (type) => {
    console.log(type);
    setType(type);
    //  setActiveVideo(null);
    if (type === "video1") {
      setActiveVideo(event1);
    } else if (type === "video2") {
      setActiveVideo(event2);
    } else {
      setActiveVideo(event3);
    }

    // setTimeout(() => {
    //   setActiveVideo(event2);
    // }, 0);
  };

  // useEffect(() => {
  //   let formatSeconds = Math.round(time?.playedSeconds);
  //   // console.log(formatSeconds);
  //   let formatDuration = Math.round(duration);
  //   // console.log(formatDuration);
  //   if (
  //     formatSeconds === formatDuration ||
  //     formatSeconds === formatDuration - 1
  //   ) {
  //     if (type === "video1") {
  //     }
  //   }
  //   // console.log(time);
  // }, [time, type]);
  //   console.log(videoRef?.current.currentTime);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (counter >= 100) {
        setCounter(0);
      } else {
        // console.log(counter);
        setCounter(counter + 1);
      }
    }, 100);
  }, [counter]);

  return (
    <div className="header-sec">
      <div className="header-title">
        <Title>
          The event platform that inspires, engages and connects attendees
        </Title>
        <p>
          Industry leaders trust Brella to deliver truly interactive virtual,
          hybrid and in-person events that empower attendees and sponsors to
          make meaningful connections.
        </p>
        <div className="video-header-text">
          <div
            onMouseEnter={() => {
              setSelectedVideo(0);
              changeVideo("video1");
            }}
          >
            <Link to="/virtual-event-platform">
              <span
                className="video-header-text-heading"
                style={{ color: "black" }}
              >
                Virtual <BsArrowRight />
              </span>
            </Link>
            <div className="progress">
              {selectedVideo === 0 ? (
                <Progress percent={counter} size="small" showInfo={false} />
              ) : (
                <Progress percent={0} size="small" showInfo={false} />
              )}
            </div>
          </div>

          <div
            onMouseEnter={() => {
              setSelectedVideo(1);
              changeVideo("video2");
            }}
          >
            <Link to="/hybrid-event-platform">
              <span
                className="video-header-text-heading"
                style={{ color: "black" }}
              >
                Hybrid <BsArrowRight />
              </span>
            </Link>

            <div className="progress">
              {selectedVideo === 1 ? (
                <Progress percent={counter} size="small" showInfo={false} />
              ) : (
                <Progress percent={0} size="small" showInfo={false} />
              )}
            </div>
          </div>
          <div
            onMouseEnter={() => {
              //   setActiveVideo(null);

              //   setTimeout(() => {
              //     setActiveVideo(event3);
              //   }, 0);
              setSelectedVideo(2);
              changeVideo("video3");
            }}
          >
            <span className="video-header-text-heading">
              In-person <BsArrowRight />
            </span>
            <div className="progress">
              {selectedVideo === 2 ? (
                <Progress percent={counter} size="small" showInfo={false} />
              ) : (
                <Progress percent={0} size="small" showInfo={false} />
              )}
            </div>
          </div>
        </div>
        <div className="video-section">
          {activeVideo && (
            <ReactPlayer
              url={activeVideo}
              playing={true}
              onProgress={(e) => setTime(e)}
              loop
              onDuration={(e) => setDuration(e)}
              playsinline
              muted
            />
          )}
        </div>
      </div>
      <div className="glow-right"></div>
    </div>
  );
};

export default HeaderSection;
