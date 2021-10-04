import { useEffect, useState } from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { ServerURL } from "../../url.js";
import {
  chartExample2,
  chartExample3,
  chartExample4,
  totalEvents,
  dailySales,
  totalAttendees,
} from "variables/charts.js";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";
import axios from "axios";

const Row3 = () => {
  const dispatch = useDispatch();
  const totalEventsNo = useSelector((state) => state.userReducer.totalEvents);
  const totalAttendeesNo = useSelector(
    (state) => state.userReducer.totalAttendees
  );

  useEffect(() => {
    axios.get(`${ServerURL}/api/events/get-events-chart`).then((res) => {
      if (res.data.error) {
        console.log(res.data.error);
      } else if (res.data.result) {
        dispatch({ type: "EVENTS", payload: res.data.result.total });
        res.data.result.chartData.map(
          (data) => (totalEvents[data._id] = data.purchases)
        );
      } else console.log(res.data);
    },[]);

    axios.get(`${ServerURL}/api/attendees/get-attendees-chart`).then((res) => {
      if (res.data.error) {
        console.log(res.data.error);
      } else if (res.data.result) {
        dispatch({ type: "ATTENDEES", payload: res.data.result.total });
        res.data.result.chartData.map((data) => (totalAttendees[data._id] = data.registrations))
      } else console.log(res.data);
    });
  },[]);

  return (
    <>
      <Col lg="4">
        <Card className="card-chart">
          <CardHeader>
            <h5 className="card-category">Total Events</h5>
            <CardTitle tag="h3">
              <i className="tim-icons icon-bell-55 text-primary" />
              {totalEventsNo}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="chart-area">
              <Line data={chartExample2.data} options={chartExample2.options} />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4">
        <Card className="card-chart">
          <CardHeader>
            <h5 className="card-category">Daily Sales</h5>
            <CardTitle tag="h3">
              <i className="tim-icons icon-delivery-fast text-info" /> 3,500€
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="chart-area">
              <Bar data={chartExample3.data} options={chartExample3.options} />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4">
        <Card className="card-chart">
          <CardHeader>
            <h5 className="card-category">Total Attendees</h5>
            <CardTitle tag="h3">
              <i className="tim-icons icon-send text-success" />
              {totalAttendeesNo}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="chart-area">
              <Line data={chartExample4.data} options={chartExample4.options} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Row3;
