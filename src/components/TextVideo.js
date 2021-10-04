import React from "react";
import { Col } from "antd";
import { Row } from "antd";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const TextVideo = ({ heading, text, button, video }) => {
  const buttonStyle = {
    fontWeight: "bolder",
    fontSize: "12px",
  };
  const { Title, Text } = Typography;
  return (
    <div className="text-video-main">
     
      <Row align="middle" className="row">
        <Col lg={12} md={24} sm={24} xs={24}>
          <div>
            <Title className="title1" level={3} style={{ fontWeight: "bolder", fontSize: "27px" }}>
              {heading}
            </Title>
            <Text
              level={5}
              style={{
                fontWeight: "normal",
                lineHeight: "20px",
                fontSize: "18px",
              }}
            >
              {text}
            </Text>
          </div>
          <br />
          <div>
            <Button type="link" style={buttonStyle}>
              {button}
              <ArrowRightOutlined
                style={{ marginLeft: "20px", color: "#00AF66" }}
              />
            </Button>
          </div>
          <br /> <br /> <br />
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <video
            src={video}
            width="100%"
            height="312px"
            autoPlay="autoplay"
            muted
            loop
          />
        </Col>
      </Row>
    </div>
  );
};

export default TextVideo;
