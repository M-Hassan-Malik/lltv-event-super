import { Button } from "antd";
import { BsArrowRight } from "react-icons/bs";

import image from "../assets/hybrid/green-image.webp";

const greenCard = () => {
  return (
    <div className="green-card-main">
      <div className="content">
        <div>
          <button className="circle-btn-active" />
          <p>Free eBook</p>
        </div>
        <h5>The Ultimate Guide to Hybrid Events</h5>
        <Button type="default">
          Download eBook <BsArrowRight />
        </Button>
      </div>
      <img src={image} className="image" />
    </div>
  );
};

export default greenCard;
