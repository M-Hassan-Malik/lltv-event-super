import { Row, Col, Divider } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/brellaMainLogo.svg";
import { Button } from "antd";
import { Menu, Dropdown } from "antd";
import { BsArrowRight } from "react-icons/bs";
import  { useHistory } from 'react-router-dom'
  

const Navbar = ({ hideTransparency }) => {
  const history = useHistory()
  const menu = (
    <Menu>
      <Row className="dropdownLi">
        <Col lg={12} md={12} sm={12} xs={12}>
          <Menu.Item>
            <li>
              <Link to="/virtual-event-platform">Virtual events</Link>
            </li>
          </Menu.Item>
          <Menu.Item>
            <li>
              <Link to="/hybrid-event-platform">Hybrid events</Link>
            </li>
          </Menu.Item>
          <Menu.Item>
            <li>In-person events</li>
          </Menu.Item>
        </Col>
        <Divider type="vertical" />
        <Col
          lg={10}
          md={10}
          sm={10}
          xs={10}
          style={{ padding: "0 0 20px 20px" }}
        >
          {/* <span className="circle"></span> */}
          <button className="circle-btn-active"></button>

          <li style={{ fontSize: "medium", fontWeight: "400" }}>
            The ultimate guide to hybrid events{" "}
          </li>

          <p className="download">
            DOWNLOAD NOW <BsArrowRight />
          </p>
          {/* <Button
            type="link"
            style={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            DOWNLOAD NOW
            <BsArrowRight style={{ fontSize: "20px" }} />
          </Button> */}
        </Col>
      </Row>
    </Menu>
  );

  const menu2 = (
    <Menu>
      <Row className="dropdownLi">
        <Col lg={12} md={12} sm={12} xs={12}>
          <Menu.Item>
            <li>{`Matchmaking & networking`}</li>
          </Menu.Item>
          <Menu.Item>
            <li>{`Sponsers & partners`}</li>
          </Menu.Item>
          <Menu.Item>
            <li>{`Event data & analytics`}</li>
          </Menu.Item>
          <Menu.Item>
            <li>Customer success</li>
          </Menu.Item>
          <Menu.Item>
            
            <li>
              <Link to="/features">All features</Link>
            </li>
            
          </Menu.Item>
        </Col>
        <Divider
          type="vertical"
          style={{ height: "150px", fontWeight: "bolder", color: "black" }}
        />
        <Col
          lg={10}
          md={10}
          sm={10}
          xs={10}
          style={{ padding: "0 0 20px 20px" }}
        >
          <button className="circle-btn-active"></button>

          <li style={{ fontSize: "15px", fontWeight: "400" }}>
            {" "}
            Improve your ticket retention by 18% with networking{" "}
          </li>

          <p className="download">
            GET THE REPORT <BsArrowRight />
          </p>
          {/* <Button
            type="link"
            style={{
              fontWeight: "bolder",
              fontSize: "16px",
            }}
          >
            {" "}
            GET THE REPORT
            <ArrowRightOutlined style={{ fontSize: "20px" }} />
          </Button> */}
        </Col>
      </Row>
    </Menu>
  );

  const menu3 = (
    <Menu>
      <Row className="dropdownLi">
        <Col lg={12} md={12} sm={12} xs={12}>
          <Menu.Item>
            <li>Resource center</li>
          </Menu.Item>
          <Menu.Item>
            <li>Blog</li>
          </Menu.Item>
          <Menu.Item>
            <li>Success stories</li>
          </Menu.Item>
          <Menu.Item>
            <li>Product news</li>
          </Menu.Item>
          <Menu.Item>
            <li>Releases</li>
          </Menu.Item>
        </Col>
      </Row>
    </Menu>
  );
  const menu4 = (
    <Menu>
      <Row className="dropdownLi">
        <Col lg={12}>
          <Menu.Item>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </Menu.Item>
          <Menu.Item>
            <li>Careers</li>
          </Menu.Item>
          <Menu.Item>
            <li>{`Media & press`}</li>
          </Menu.Item>
        </Col>
      </Row>
    </Menu>
  );

  return (
    <div
      className={
        hideTransparency
          ? "navbar-desktop navbar-desktop-fixed"
          : "navbar-desktop"
      }
    >
      <div>
        <Link to="/">
          <img src={MainLogo} alt="Logo" />
        </Link>
        <ul className="navbarLi">
          <Dropdown overlay={menu}>
            <li id="first">Events</li>
          </Dropdown>
          <Dropdown overlay={menu2}>
            <li>Product</li>
          </Dropdown>

          <Dropdown overlay={menu3}>
            <li>Resources</li>
          </Dropdown>
         <Dropdown overlay={menu4}>
            <li>Company</li>
          </Dropdown>

          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          onClick={history.push("/signin")}
          style={{
            fontSize: "large",
            color: "GrayText",
            fontWeight: "600",
            marginRight: "10px",
          }}
        >
          Sign in
        </button>
        <Button
          type="primary"
          className={
            hideTransparency ? "contact-btn contact-btn-active" : "contact-btn"
          }
        >
          Contact sales <BsArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
