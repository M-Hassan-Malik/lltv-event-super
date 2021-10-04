import { Button, Col, Row, Typography } from "antd";
import { BsArrowRight } from "react-icons/bs";

const Trusted = () => {
  const { Title } = Typography;
  return (
    <div className="trusted">
      <div>
        <Title level={4}>
          Trusted by thousands of businesses & event organizers
        </Title>
        <Row
          // justify="center"
          gutter={[10, 30]}
          align="middle"
          className="logos-row"
        >
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/SaaStr%20Logo%20Horz%20(1).png?noresize&width=100&name=SaaStr%20Logo%20Horz%20(1).png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/Templates/Brella2019/Example_images/example-google-logo.png?noresize&width=100&name=example-google-logo.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/coindesk-vector-logo.png?noresize&width=100&name=coindesk-vector-logo.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/logo2.png?noresize&width=100&name=logo2.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/logo%20in.png?noresize&width=100&name=logo%20in.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/Templates/Brella2019/Example_images/example-samsung-logo.png?noresize&width=100&name=example-samsung-logo.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/Blog_images/lenditlogo.png?noresize&width=100&name=lenditlogo.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/microsoft%20logo.png?noresize&width=100&name=microsoft%20logo.png" />
          </Col>
          <Col xs={12} md={4} lg={4} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/126px-Informa_logo.svg.png?noresize&width=100&name=126px-Informa_logo.svg.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/fcbi%20logo.png?noresize&width=100&name=fcbi%20logo.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/pnp%20logo.png?noresize&width=100&name=pnp%20logo.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/vidcon%20logo.png?noresize&width=100&name=vidcon%20logo.png" />
          </Col>
          <Col xs={12} md={4} lg={3} className="black-and-white">
            <img src="https://www.brella.io/hs-fs/hubfs/linux%20logo.png?noresize&width=100&name=linux%20logo.png" />
          </Col>
        </Row>
        <Button>
          Read Success Stories
          <BsArrowRight />{" "}
        </Button>
      </div>
    </div>
  );
};

export default Trusted;
