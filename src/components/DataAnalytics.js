import { Typography } from "antd";
import Marquee from "react-fast-marquee";

const DataAnalytics = () => {
  const { Title } = Typography;
  return (
    <div className="analytics">
      <Title level={4}>Data & analytics</Title>
      <p>
        Gain a whole new perspective on the impact of your event. Measure
        attendee engagement, content relevance, sponsor ROI and much more.
      </p>
      <div className="data-and-analytics">
        <Marquee gradient={false}>
          <div className="analytics-container">
            <div className="line-and-text">
              <p>1:1 meetings</p>
            </div>
            <img
              src="https://www.brella.io/hubfs/web-assets-brella-2021-theme/numbers1.svg"
              alt="meetings"
            />
          </div>
          <div className="analytics-container">
            <div className="line-and-text">
              <p>Attendees</p>
            </div>
            <img
              src="https://www.brella.io/hubfs/web-assets-brella-2021-theme/numbers2.svg"
              alt="meetings"
            />
          </div>
          <div className="analytics-container">
            <div className="line-and-text">
              <p>Virtual vs Live participants</p>
            </div>
            <img
              src="https://www.brella.io/hubfs/web-assets-brella-2021-theme/Virtual%20vs%20live.svg"
              alt="meetings"
            />
          </div>
          <div className="analytics-container">
            <div className="line-and-text">
              <p>Session views</p>
            </div>
            <img
              src="https://www.brella.io/hubfs/web-assets-brella-2021-theme/Session%20views.svg"
              alt="meetings"
            />
          </div>
          <div className="analytics-container">
            <div className="line-and-text">
              <p>Sponsor ROI</p>
            </div>
            <img
              src="https://www.brella.io/hubfs/web-assets-brella-2021-theme/Sponsor%20ROI.svg"
              alt="meetings"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default DataAnalytics;
