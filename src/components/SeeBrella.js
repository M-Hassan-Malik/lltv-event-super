import { Typography } from "antd";
import ReactPlayer from "react-player/lazy";

const SeeBrella = () => {
  const { Title } = Typography;
  return (
    <div className="see">
      <Title>See Brella in action</Title>
      <div className="see-video">
        <ReactPlayer
          url="https://www.youtube-nocookie.com/embed/qVjN5QjWr3w?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fwww.brella.io%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fwww.brella.io&widgetid=1"
          controls={true}
          height={550}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default SeeBrella;
