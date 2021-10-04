import { Button, Typography } from "antd";
import { BsArrowRight } from "react-icons/bs";
import person1 from "../assets/person-1.png";
import person2 from "../assets/person-2.png";
import person3 from "../assets/person-3.webp";
import person4 from "../assets/person-4.png";
import person5 from "../assets/person-5.png";
import person6 from "../assets/person-6.png";

const AttendeeConnections = () => {
  const { Title } = Typography;
  return (
    <div className="main-attendee">
      <div className="attendee">
        <Title>Put attendee connections at the heart of your event</Title>
        <p>
          Deliver the same engaging experience and networking opportunities
          whether your audience attends virtually or in-person. Contact our team
          to set up a demo of our platform.
        </p>
        <Button type="primary">
          Contact Sales <BsArrowRight />
        </Button>
      </div>
      <div className="two-images-section1">
        <img src={person1} alt="person" />
        <img src={person2} alt="person" />
      </div>
      <div className="two-images-section2">
        <img src={person3} alt="person" />
        <img src={person4} alt="person" />
      </div>

      <div className="two-images-section3">
        <img src={person5} alt="person" />
        <img src={person6} alt="person" />
      </div>
      <div className="shadow-bottom"></div>
    </div>
  );
};

export default AttendeeConnections;
