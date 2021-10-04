import React from "react";
import { Row, Col } from "antd";
// Local
import "../styles/global.css";
import "../styles/components/text&img.css";

export default function TextAndImage({ rtl = false, children, src }) {
  return (
    <div>
      <Row>
        {!rtl && (
          <Col xs={24} md={12} id="leftSection">
            {children}
          </Col>
        )}
        <Col xs={24} md={12} id="rightSection">
          <img
            src={src}
            id="img"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Col>
        {rtl && (
          <Col xs={24} md={12} id="leftSection">
            {children}
          </Col>
        )}
      </Row>
    </div>
  );
}
