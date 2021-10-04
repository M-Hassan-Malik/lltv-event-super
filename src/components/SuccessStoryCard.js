import { Divider } from "antd";
import { BsArrowRight } from "react-icons/bs";

import profile from "../assets/hybrid/profile2.webp";
import logo from "../assets/hybrid/profile2logo.webp";

const SuccessStoryCard = ({ noImage }) => {
  return (
    <div className="success-card-main">
      <Divider />
      <p className="desc">
        "We learned a lot through Brella. Statistics should not be
        underestimated. When you are trying a tool like this, you of course rely
        on the feedback you get, but the figures don't lie."
      </p>
      {!noImage ? (
        <img src={profile} className="profile" />
      ) : (
        <div className="profile" />
      )}
      <p className="name">Oliver Chramosta</p>
      <p className="position">Team International Markets at Austrian Wine</p>
      <img src={logo} className="logo" />
      <Divider className="last" />
      <p className="link">
        READ THEIR STORY <BsArrowRight />
      </p>
    </div>
  );
};

export default SuccessStoryCard;
