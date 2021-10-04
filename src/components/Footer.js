import React from "react";
import { Row, Col, Divider, Typography, Input, Button } from "antd";
import MainLogo from "../assets/brellaMainLogo.svg";
import {
  FacebookFilled,
  FacebookOutlined,
  TwitterCircleFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { BsArrowRight } from "react-icons/bs";

import "../styles/components/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerListMain">
      <div className="footerList">
        <div id="letterContainer">
          <Row>
            <Col xs={24} md={12} id="letterLeft">
              <Typography.Title
                style={{
                  fontSize: 20,
                  fontWeight: "bolder",
                  lineHeight: "20px",
                }}
              >
                Subscribe to our monthly newsletter
              </Typography.Title>
              <p
                className="text-small"
                style={{ color: "#7E7E7E", fontSize: "14px" }}
              >
                By clicking subscribe you’ll receive occasional emails from
                Brella.
              </p>
            </Col>
            <Col xs={24} md={12} id="letterRight">
              <div id="searchContainer">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Input
                    placeholder="Your work email."
                    style={{
                      width: "200px",
                      height: "50px",
                      borderRadius: "5px",

                      borderRight: 0,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Button
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "130px",
                      height: "50px",
                      borderRadius: "5px",
                      borderLeft: 0,
                      borderColor: "lightgray",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      fontWeight: "bold",
                    }}
                  >
                    SUBSCRIBE{" "}
                    <BsArrowRight
                      color="black"
                      style={{ marginLeft: "10px" }}
                    />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Divider orientation="center" />
        </div>
        <Row
          // style={{ marginTop: "70px", padding: "40px 60px" }}
          className="footer-row-main"
          justify="space-between"
          align="middle"
        >
          <Col lg={6} md={12} sm={24} xs={24}>
            <img src={MainLogo} style={{ marginTop: "10px" }} /> <br /> <br />
            <div>
              <FacebookOutlined className="logos" />
              <InstagramFilled
                className="logos"
                style={{ marginLeft: "7px" }}
              />
              <TwitterCircleFilled
                className="logos"
                style={{ marginLeft: "7px" }}
              />
              <LinkedinFilled className="logos" style={{ marginLeft: "7px" }} />
              <YoutubeFilled className="logos" style={{ marginLeft: "7px" }} />
            </div>
          </Col>
          <br />
          <br />
          <Col lg={5} md={0} xs={0} sm={0} style={{ lineHeight: "250%" }}>
            <Link to="/virtual-event-platform">
              <h4>VIRTUAL EVENTS</h4>
            </Link>
            <Link to="hybrid-event-platform">
              <h4>HYBRID EVENTS</h4>
            </Link>

            <h4>IN-PERSON EVENTS</h4>
          </Col>
          <Col lg={5} md={0} xs={0} sm={0} style={{ lineHeight: "250%" }}>
            <h4>EVENT MATCHMAKING</h4>
            <h4>RESOURCE CENTER</h4>
            <h4>TERMS AND CONDITIONS</h4>
          </Col>
          <Col
            lg={8}
            md={12}
            sm={24}
            xs={24}
            style={{
              // marginTop: "4px",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "normal",
              color: "gray",
            }}
            className="footer-text"
          >
            Brella is the leading event platform for virtual, physical, and
            hybrid events. The world’s leading conferences and exhibitions trust
            Brella to power their events with relevant content, quality
            networking, and multiple revenue-generating opportunities.
          </Col>
        </Row>
        <br />
        <br />
        <div className="footer">
          <div></div>

          <ul className="footer">
            <li>2021 Brella Oy, Inc. All rights reserved</li>
            <li>{`Terms & conditions`} </li>
            <li>Privacy notice </li>
            <li>Contact sales </li>
            <li>Sign in</li>
          </ul>

          <ul className="footer1">
            <li>With love, MEOM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
