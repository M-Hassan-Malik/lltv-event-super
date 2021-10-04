import React from "react";
import { Row, Col, Typography, Button } from "antd";
import image from "../assets/hybrid/green-image.webp";
import { BsArrowRight } from "react-icons/bs";

export const PricingCard = ({ image, name, price, boxShadow }) => {
  const { Title, Text } = Typography;
  return (
    <Col
      lg={6}
      style={{
        border: "0.5px solid #d0d0d0",
        borderRadius: 4,
        margin: 5,
        boxShadow: `${boxShadow ? "1px 4px 20px rgb(0 0 0 / 15%)" : ""}`,
        backgroundColor: `${boxShadow ? "white" : "transparent"}`,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={image} className="image" style={{ marginTop: 25 }} />
      </div>

      <h1 style={{ textAlign: "center", fontWeight: "bold", color: "black" }}>
        {name}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {price ? (
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            From
            <span
              style={{ fontSize: 30, fontWeight: "bold", color: "#00af66" }}
            >{`  €${price}  `}</span>
            / event
          </Text>
        ) : (
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            Discounted rates for multiple{" "}
            <span
              style={{ fontSize: 30, fontWeight: "bold", color: "#00af66" }}
            ></span>{" "}
            events
          </Text>
        )}
      </div>
      <div className="centerText" style={{ marginTop: 10 }}>
        <Text className={"pricing-card__content-title"}>Includes</Text>
      </div>
      <ul className="styledUL" style={{ paddingRight: 20 }}>
        <li>
          <span>
            Unlimited access to every feature on Brella — no strings (or hidden
            fees) attached
          </span>
        </li>
        <li>
          <span>
            A comprehensive help center with digital resources and documentation
          </span>
        </li>
        <li>
          <span>Basic support services (email / chat)</span>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Button type="primary" style={{ width: "100%", fontWeight: "normal" }}>
          Get Started
          <BsArrowRight />
        </Button>
      </div>
    </Col>
  );
};
