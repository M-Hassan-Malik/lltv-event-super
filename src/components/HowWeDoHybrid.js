import React from "react";
import { Row, Col, Typography, Button } from "antd";
import hybrid1 from "../assets/hybrid1.webp";
import hybrid2 from "../assets/hybrid2.webp";
import hybrid3 from "../assets/hybrid3.webp";
import virtual1 from "../assets/virtual/virtual1.webp";
import virtual2 from "../assets/virtual/virtual2.webp";
import virtual3 from "../assets/virtual/virtual3.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import "../styles/components/HowWeDoHybrid.css";
import { BsArrowRight } from "react-icons/bs";

const HybridComponent = ({ isHybrid }) => {
  const { Title, Text } = Typography;
  const main = {
    // padding: "13rem 0 13rem 0",
    backgroundColor: "#EEEEEE",
    height: "200%",
    width: "100%",
    marginRight: "",
  };
  const mainHeading = {
    marginBottom: "50px",
  };
  const heading = {
    lineHeight: "27px",
    marginTop: "25px",
  };
  const text = {
    fontSize: "18px",
  };
  // const margin = {
  //   marginLeft: "40px",
  // };
  const img = {
    height: "180xpx",
    width: "100%",
  };
  return (
    <center>
      <div style={main} className="howMain">
        <div className="howWeDo">
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title level={1}>
                {isHybrid
                  ? "How we do hybrid"
                  : "Greater reach & impact for your sponsors"}
              </Title>
            </Col>
          </Row>
          <Row gutter={[20, 20]} justify="center">
            <Col lg={8} md={12} xs={24}>
              {isHybrid ? (
                <img src={hybrid1} style={img} />
              ) : (
                <img src={virtual1} style={img} />
              )}
              <Title level={5} style={heading}>
                {isHybrid
                  ? "Build the excitement well before your event"
                  : "Native sponsor promotion"}
              </Title>
              <Text style={text}>
                {isHybrid
                  ? "All attendees can join the platform 2 weeks before your event to meet and chat with other participants."
                  : "Create a digital booth & promote sponsors directly in your event marketplace"}
              </Text>
            </Col>
            <Col lg={8} md={12} xs={24}>
              {isHybrid ? (
                <img src={hybrid2} style={img} />
              ) : (
                <img src={virtual2} style={img} />
              )}
              <Title level={5} style={heading}>
                {isHybrid
                  ? "Provide a truly memorable, inclusive experience"
                  : "Effective lead generation"}
              </Title>
              <Text style={text}>
                {isHybrid
                  ? "No matter if they attend live or virtual, everyone can participate in sessions, breakout rooms and 1:1 networking."
                  : "Provide a list of interested parties quickly by segmenting your audience according to networking & matchmaking data"}
              </Text>
            </Col>
            <Col lg={8} md={12} xs={24}>
              {isHybrid ? (
                <img src={hybrid3} style={img} />
              ) : (
                <img src={virtual3} style={img} />
              )}{" "}
              <Title level={5} style={heading}>
                {isHybrid
                  ? "Make new connections from anywhere"
                  : "Expedite the sales process"}
              </Title>
              <Text style={text}>
                {isHybrid
                  ? "Our AI provides all your attendees with their personal meeting location, either at the event or online."
                  : "Instead of waiting, sponsors can proactively approach leads and connect at your event 1:1"}
              </Text>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: "50px" }}>
            <Col lg={11}>
              <Title level={5} style={heading}>
                {isHybrid
                  ? "  Contact our team for a comprehensive demo of our hybrid event platform."
                  : ""}
              </Title>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <center>
                <Button
                  type="primary"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  {isHybrid ? "Contact sales" : "All Sponsor Features"}
                  <BsArrowRight />
                </Button>
              </center>
            </Col>
          </Row>
        </div>
      </div>
    </center>
  );
};

export default HybridComponent;
