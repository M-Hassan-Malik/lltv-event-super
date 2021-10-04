import React, { useEffect } from "react";
import classNames from "classnames";
import {
  chartExample1,
  Row1ChartDataOrganizers,
} from "../../variables/charts.js";
import { Line } from "react-chartjs-2";
import { ServerURL } from "../../url";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import { useDispatch } from "react-redux";

const Row1 = () => {
  const dispatch = useDispatch();
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  useEffect(() => {
    switch (bigChartData) {
      case "data1":
        axios
          .get(`${ServerURL}/api/organizers/get-organizers-chart`)
          .then((res) => {
            if (res.data.error) {
              console.log(res.data.error);
            } else if (res.data.result) {
              dispatch({ type: "ORGANIZERS", payload: res.data.result.total });
              res.data.result.chartData.map(
                (data) =>
                  (Row1ChartDataOrganizers[data._id] = data.registrations)
              );
            } else console.log(res.data);
          });
        break;
      case "data2":
        break;
      case "data3":
        break;
    }
  });

  return (
    <>
      <Col xs="12">
        <Card className="card-chart">
          <CardHeader>
            <Row>
              <Col className="text-left" sm="6">
                <h5 className="card-category">Annaul Data</h5>
                <CardTitle tag="h2">Performance</CardTitle>
              </Col>
              <Col sm="6">
                <ButtonGroup
                  className="btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <Button
                    color="info"
                    id="0"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: bigChartData === "data1",
                    })}
                    onClick={() => setBgChartData("data1")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Organizers
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-single-02" />
                    </span>
                  </Button>
                  <Button
                    color="info"
                    id="1"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: bigChartData === "data2",
                    })}
                    onClick={() => setBgChartData("data2")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Purchases
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-gift-2" />
                    </span>
                  </Button>
                  <Button
                    color="info"
                    id="2"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: bigChartData === "data3",
                    })}
                    onClick={() => setBgChartData("data3")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Sessions
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-tap-02" />
                    </span>
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="chart-area">
              <Line
                data={chartExample1[bigChartData]}
                options={chartExample1.options}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default Row1;
