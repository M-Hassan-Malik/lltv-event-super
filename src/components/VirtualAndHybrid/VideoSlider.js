import { useEffect, useState } from "react";
import { Typography } from "antd";
import { BsArrowRight } from "react-icons/bs";

const VideoSlider = ({
  heading,
  text1,
  text2,
  videos,
  buttonText,
  videoText,
  hasText1,
  isVirtual,
  reverse,
}) => {
  // const videos = [ai, personal, quick];
  console.log(videoText);
  const [currnetid, setCurrentId] = useState(0);

  const [currnetid2, setCurrentId2] = useState(0);

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
    }, 5000);
  }, [currnetid2]);

  useEffect(() => {
    setVideo(null);
    setTimeout(() => {
      setVideo(videos[currnetid]);
    }, 4);
  }, [currnetid]);
  return (
    <div
      className={`network-section ${reverse ? "network-section-reverse" : ""}`}
    >
      <div className="desc">
        <Typography.Title level={4}>{heading}</Typography.Title>
        <p>
          <span>{hasText1 ? text1 : ""}</span> {text2}
        </p>

        {videoText?.map((item, index) => {
          {
            return currnetid === index ? (
              isVirtual ? (
                <p className="virtual-active">
                  <button className="circle-btn-active"></button>
                  {item.heading}
                </p>
              ) : (
                <fieldset>
                  <legend>
                    <button className="circle-btn-active"></button>
                    {item.heading}
                  </legend>
                  <p className="legend-desc">{item.text}</p>
                </fieldset>
              )
            ) : (
              <p
                className="non-active-p"
                onClick={() => {
                  setCurrentId(index);
                }}
              >
                {" "}
                <button className="circle-btn" />
                {item.heading}
              </p>
            );
          }
        })}

        <p className="link">
          {buttonText} <BsArrowRight />
        </p>
      </div>
      {video && (
        <video
          autoPlay="autoPlay"
          loop
          muted
          playsInline
          width="500px"
          height="325px"
          poster={video}
        >
          <source src={video} />
        </video>
      )}
    </div>
  );
};

export default VideoSlider;
