import React from "react";
import { Card, Typography, Button } from "antd";
import { Row, Col, Divider } from "antd";
import dummyImage from "../assets/dummy.png";
import hybrid1 from "../assets/hybrid/hybrid1.jpg";
import hybrid2 from "../assets/hybrid/hybrid2.webp";
import hybrid3 from "../assets/hybrid/hybrid3.webp";
import virtual from "../assets/virtual/virtual.png";
import virtual1 from "../assets/virtual/virtual1.png";
import virtual2 from "../assets/virtual/virtual2.png";

const Resources = ({ type }) => {
  const { Meta } = Card;
  const { Title, Text } = Typography;

  return (
    <div className="main-resources">
      <Row justify="center">
        <center>
          {" "}
          <Col lg={13} md={15} sm={24} xs={24}>
            <Title level={1}>
              {type === "hybrid"
                ? "Hybrid event guides & 101's"
                : type === "virtual"
                ? "Virtual event planning tips & guides"
                : " Essential resources for the modern event organizer"}
            </Title>
          </Col>
        </center>
      </Row>
      <Row gutter={[20, 20]} className="resource-row" justify="center">
        <Col xs={24} md={12} lg={8}>
          <Card
            // hoverable
            className="resource-card"
            bordered={false}
            cover={
              <img
                alt="example"
                src={
                  type === "hybrid"
                    ? hybrid1
                    : type === "virtual"
                    ? virtual
                    : dummyImage
                }
                height="200px"
                style={{ borderRadius: "8px" }}
              />
            }
          >
            <Meta
              title={
                <Text
                  style={{
                    fontWeight: "lighter",
                    fontSize: "22px",
                    fontFamily: "Gilroy",
                    lineHeight: "10px",
                  }}
                >
                  {type === "hybrid"
                    ? `sTARTUp Day`
                    : type === "virtual"
                    ? `How virtual events changed the event industry - and how to host your own`
                    : `sTARTUp Day`}
                </Text>
              }
              description={
                <Text style={{ fontSize: "15px" }}>
                  {type === "hybrid"
                    ? `Over 1,300 meetings between startups and investors - at a p rimarily physical  experience, no less! Read how sTARTUp Day achieved this here.`
                    : type === "virtual"
                    ? `Virtual events are the new norm. But how can you host one of your own? We detail some great examples and 8 key tips in the Brella blog.`
                    : `Over 1,300 meetings between startups and investors - at a p rimarily physical  experience, no less! Read how sTARTUp Day achieved this here.`}
                </Text>
              }
            />{" "}
            <br />
            <Button
              size="small"
              style={{
                width: "50px",
                height: "20px",
                fontSize: "15px",
                backgroundColor: "#F5F5F5",
                color: "black",
                padding: "0px 20px 25px 5px",
              }}
            >
              News
            </Button>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            // hoverable
            className="resource-card"
            bordered={false}
            style={{
              marginLeft: "20px",
            }}
            cover={
              <img
                alt="example"
                src={
                  type === "hybrid"
                    ? hybrid2
                    : type === "virtual"
                    ? virtual1
                    : dummyImage
                }
                height="200px"
                style={{ borderRadius: "8px" }}
              />
            }
          >
            <Meta
              title={
                <Text
                  style={{
                    fontWeight: "lighter",
                    fontSize: "22px",
                    fontFamily: "Gilroy",
                    lineHeight: "10px",
                  }}
                >
                  {type === "hybrid"
                    ? `Personalize the attendee experience with Brella's Access Control features`
                    : type === "virtual"
                    ? `Is your virtual event platform giving the best experience to your sponsors?`
                    : `Personalize the attendee experience with Brella's Access Control features`}
                </Text>
              }
              description={
                <Text style={{ fontSize: "15px" }}>
                  {type === "hybrid"
                    ? `Brella's Access Control features empower event organizers to offer each attendee a uniquely personalized hybrid, virtual or in-person event experience based on their ticket-type and mode of attendance.`
                    : type === "virtual"
                    ? `Your virtual event platform dictates whether your sponsors have a great or poor experience. Learn how to evaluate your platform for the best results!`
                    : `Brella's Access Control features empower event organizers to offer each attendee a uniquely personalized hybrid, virtual or in-person event experience based on their ticket-type and mode of attendance.`}
                </Text>
              }
            />{" "}
            <br />
            <Button
              size="small"
              style={{
                width: "50px",
                height: "20px",
                fontSize: "15px",
                backgroundColor: "#F5F5F5",
                color: "black",
                padding: "0px 20px 25px 5px",
              }}
            >
              News
            </Button>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            // hoverable
            className="resource-card"
            bordered={false}
            style={{
              marginLeft: "20px",
            }}
            cover={
              <img
                alt="example"
                src={
                  type === "hybrid"
                    ? hybrid3
                    : type === "virtual"
                    ? virtual2
                    : dummyImage
                }
                height="200px"
                style={{ borderRadius: "8px" }}
              />
            }
          >
            <Meta
              title={
                <Text
                  style={{
                    fontWeight: "lighter",
                    fontSize: "22px",
                    fontFamily: "Gilroy",
                    lineHeight: "10px",
                  }}
                >
                  {type === "hybrid"
                    ? `The 6 top skill sets you need to host hybrid events`
                    : type === "virtual"
                    ? `Why you need a virtual event platform in your event tech stack`
                    : `Brella welcomes a  passwordless future with Magic Link`}
                </Text>
              }
              description={
                <Text style={{ fontSize: "15px" }}>
                  {type === "hybrid"
                    ? `Conference planners are finding a brand new niche for themselves in hybrid events. Here are the top 6 skill sets you need as you go hybrid.`
                    : type === "virtual"
                    ? `Virtual event platforms have quickly become essential parts of many event tech stacks. Here are 11 reasons why they're so essential.`
                    : `Brella is simplifying the attendee experience with our new passwordless authentication mechanism powered by the secure Magic Link technology.
                    Brella's Access Control features empower event organizers to offer each attendee a uniquely personalized hybrid, virtual or in-person event experience based on their ticket-type and mode of attendance.`}
                </Text>
              }
            />{" "}
            <br />
            <Button
              size="small"
              style={{
                width: "50px",
                height: "20px",
                fontSize: "15px",
                backgroundColor: "#F5F5F5",
                color: "black",
                padding: "0px 20px 25px 5px",
              }}
            >
              News
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Resources;
