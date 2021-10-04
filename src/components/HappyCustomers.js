import { Typography } from "antd";
import Carousel from "./Carousel";

const HappyCustomers = () => {
  const { Title } = Typography;
  return (
    <div className="customers">
      <Title>
        Meet our happy
        <br />
        customers
      </Title>
      <Carousel />
    </div>
  );
};

export default HappyCustomers;
