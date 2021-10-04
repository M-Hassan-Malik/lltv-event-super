import React from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";

const Row2 = () => {
  const totalOrganizersNo = useSelector(
    (state) => state.userReducer.totalOrganizers
  );
  const totalEventsNo = useSelector(
    (state) => state.userReducer.totalEvents
  );
  const totalAttendeesNo = useSelector(
    (state) => state.userReducer.totalAttendees
  );
  

  return (
    <>
      <Col lg="3" md="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col xs="5">
                <div className="info-icon text-center icon-warning">
                  <i className="tim-icons icon-chat-33" />
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Total Events</p>
                  <CardTitle tag="h3">{totalEventsNo}</CardTitle>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="tim-icons icon-refresh-01" />
            </div>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col xs="5">
                <div className="info-icon text-center icon-primary">
                  <i className="tim-icons icon-shape-star" />
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Total Attendees</p>
                  <CardTitle tag="h3">{totalAttendeesNo}</CardTitle>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="tim-icons icon-sound-wave" />
            </div>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col xs="5">
                <div className="info-icon text-center icon-success">
                  <i className="tim-icons icon-single-02" />
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Total Organizers</p>
                  <CardTitle tag="h3">{totalOrganizersNo}</CardTitle>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="tim-icons icon-trophy" /> 
            </div>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="3" md="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col xs="5">
                <div className="info-icon text-center icon-danger">
                  <i className="tim-icons icon-molecule-40" />
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Errors</p>
                  <CardTitle tag="h3">12</CardTitle>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="tim-icons icon-watch-time" /> 
            </div>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default Row2;
