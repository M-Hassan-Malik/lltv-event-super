import { Button, Input, Typography } from "antd";
import { BsArrowRight } from "react-icons/bs";

const Subscribe = () => {
  const { Title } = Typography;
  return (
    <div className="subscribe">
      <Title level={5}>
        Get the top industry highlights and latest content in our monthly
        newsletter
      </Title>
      <div className="subscribe-email">
        <Input placeholder="You Work Email" />
        <Button>
          subscribe <BsArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
