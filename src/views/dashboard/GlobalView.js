import axios from "axios";
import React, { useEffect, useState } from "react";
import { VectorMap } from "react-jvectormap";
import { ServerURL } from "../../url";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

const GlobalView = () => {
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    axios.get(`${ServerURL}/api/events/get-global-data`).then((res) => {
      res.data.result.length !== 0
        ? setResultData(res.data.result)
        : res.data.result.length === 0
        ? alert("No Data")
        : res.data.error
        ? console.log(res.data.error)
        : console.log("error at else last");
    });
  }, []);

  return (
    <>
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Global Sales by Top Locations</CardTitle>
            <p className="card-category">All products that were shipped</p>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="6">
                <Table responsive>
                  <tbody>
                    {resultData.globalData !== undefined &&
                      resultData.globalData.map((data) => (
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/US.png").default}
                              />
                            </div>
                          </td>
                          <td>{data.country.label}</td>
                          <td className="text-right">{data.total}</td>
                          <td className="text-right">
                            {data.percentage.toFixed(3) + "%"}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <VectorMap
                  map={"world_mill"}
                  backgroundColor="transparent"
                  zoomOnScroll={false}
                  containerStyle={{
                    width: "100%",
                    height: "300px",
                  }}
                  regionStyle={{
                    initial: {
                      fill: "#e4e4e4",
                      "fill-opacity": 0.9,
                      stroke: "none",
                      "stroke-width": 0,
                      "stroke-opacity": 0,
                    },
                  }}
                  series={{
                    regions: [
                      {
                        values: resultData.mapData,
                        scale: ["#aad8cf", "#a92a00"],
                        normalizeFunction: "polynomial",
                      },
                    ],
                  }}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default GlobalView;
