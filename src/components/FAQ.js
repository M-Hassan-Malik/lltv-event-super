import React from "react";
import { Row, Col, Typography, Button, Table } from "antd";
import "../styles/components/FAQ.css";

export default function FAQ() {
  const { Text, Title } = Typography;

  return (
    <div className="FAQmain">
      <div className="FAQmain1"
        //style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <Title>FAQ</Title>
      </div>
      <hr 
      //style={{ width: "70%" }} 
      />
      <Row className="row1"
      //style={{ marginLeft: 50, marginRight: 50, color: "black" }}
      >
        <Col className="col1" lg={12} 
        //style={{ padding: 50, paddingTop: 20 }}
        >
          <h2 
          //style={{ fontWeight: "bolder", color: "black" }}
          >
            What happens if I go over the allotted number of attendees?
          </h2>
          <Text>
            Don’t worry, Brella will continue to work as normal. You can either
            increase your attendee cap by contacting our customer support, or
            opt to pay a small sum per each attendee over the limit. If you need
            to stick to a fixed budget, Brella offers the option to limit the
            maximum number of attendees in your event.
          </Text>
        </Col>
        <Col className="col2" lg={12} 
        //style={{ padding: 50, paddingTop: 20 }}
        >
          <h2 
          //style={{ fontWeight: "bolder", color: "black" }}
          >
            I have multiple events throughout the year. How does billing work
            for me?
          </h2>
          <Text>
            Our Portfolio plan offers steep discounts if you pre-pay and sign a
            contract with us for multiple events. Simply discuss the number of
            events, and the amount of expected attendees for each event with our
            sales team.
          </Text>
        </Col>
      </Row>
      <Row 
      //style={{ marginLeft: 50, marginRight: 50, color: "black" }} 
      className="row2">
        <Col className="col1" lg={12} 
        //style={{ padding: 50, paddingTop: 20 }}
        >
          <h2 
          //style={{ fontWeight: "bolder", color: "black" }}
          >
            How long does it take to set-up my event on the Brella platform?
          </h2>
          <Text>
            You could set-it up in a day. However, we recommend doing so at
            least a week in advance, in order to maximize your results. If you
            need help, or want total peace of mind, simply purchase our
            Professional plan to have our dedicated team of Customer Success
            Managers ensure that things go smoothly.
          </Text>
        </Col>
        <Col className="col2" 
        lg={12} 
        //style={{ padding: 50, paddingTop: 20 }}
        >
          <h2 
          //style={{ fontWeight: "bolder", color: "black" }}
          >
            How can I get the exact cost for hosting my event(s) on Brella?
          </h2>
          <Text>
            Simply use our online booking system to pick a date and schedule a
            quick call with our sales team — they will ensure that you get the
            best possible price for your event(s)!
          </Text>
        </Col>
      </Row>
      <Row 
      //style={{ marginLeft: 50, marginRight: 50, color: "black" }} 
      className="row3">
        <Col className="col1" lg={12} 
        //style={{ padding: 50, paddingTop: 20 }}
        >
          <h2 
          //style={{ fontWeight: "bolder", color: "black" }}
          >
            Can I try / explore the platform before buying?
          </h2>
          <Text>
            Absolutely! Simply use our online booking system to pick a
            convenient date and schedule a quick call with our sales team — they
            will provide you with a fully guided tour of the platform, answer
            all your questions, and (if available) recommend public Brella
            events for you to join.
          </Text>
        </Col>
      </Row>
    </div>
  );
}
