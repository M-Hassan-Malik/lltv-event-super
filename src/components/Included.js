import React, { useState } from "react";
import { List, Typography, Row, Badge, Col, Tabs } from "antd";
import { useMediaQuery } from "react-responsive";
import { FiSend } from "react-icons/fi";
import { GiAtomicSlashes } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { GoPrimitiveDot } from "react-icons/go";

const Included = ({ data, title }) => {
  const { Title, Text } = Typography;

  //let length = data.length;

  //   const badges = [];
  //   if(lastDisabled === true){
  //   for (let i = length; i > 1; i--) {
  //     badges.push(<Badge status="success" count={15} />);
  //   }
  //   badges.push(<Badge color="grey" />)
  // }
  // else{
  //   for (let i = length; i > 0; i--) {
  //     badges.push(<Badge status="success" count={15} />);
  //   }
  // }
  const [starterColor, setStarterColor] = useState("#00AE65");
  const [proColor, setProColor] = useState("grey");
  const [portColor, setPortColor] = useState("grey");

  const heading = {
    fontSize: "15px",
    color: starterColor,
  };
  const heading2 = {
    fontSize: "15px",
    color: proColor,
  };
  const heading3 = {
    fontSize: "15px",
    color: portColor,
  };

  const text = {
    //fontSize: "16px",
  };

  const img = {
    width: "35px",
    height: "35px",
    //marginTop:"20px"
  };
  const small = {
    marginLeft: "40px",
  };
  const isSmall = useMediaQuery({ query: "(max-width: 898px)" });

  const { TabPane } = Tabs;

  // function callback(key) {
  //   console.log(key);
  // }

  return (
    <div>
      {isSmall ? (
        <div style={{ marginTop: "30px" }}>
          <Row justify="center">
            <Col>
              <Typography.Title
                level={4}
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontSize: "25px",
                }}
              >
                {title}
              </Typography.Title>
            </Col>
          </Row>

          <Row justify="center">
            <Tabs
              defaultActiveKey="1"
              //onChange={callback}
            >
              <TabPane
                tab={
                  <Col
                    onClick={() => {
                      setStarterColor("#00AE65");
                      setPortColor("grey");
                      setProColor("grey");
                    }}
                  >
                    <center>
                      {" "}
                      <FiSend size="35px" color={starterColor} />{" "}
                    </center>
                    <Typography.Title level={5} style={heading}>
                      STARTER
                    </Typography.Title>
                  </Col>
                }
                key="1"
              >
                <Row justify="center">
                  <Col md={21} sm={21} xs={21}>
                    <List
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item>
                          <Typography.Text style={text}>
                            {item.text}
                          </Typography.Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col md={2} sm={2} xs={2}>
                    <List
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item style={{ marginLeft: "25px" }}>
                          <Typography.Text>
                            {item.starter ? (
                              <Badge color="#00AE65" />
                            ) : (
                              <Badge color="grey" />
                            )}
                          </Typography.Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </TabPane>

              <TabPane
                tab={
                  <Col
                    style={small}
                    onClick={() => {
                      setStarterColor("grey");
                      setPortColor("grey");
                      setProColor("#00AE65");
                    }}
                  >
                    <center>
                      {" "}
                      <IoRocketOutline size="35px" color={proColor} />
                    </center>
                    <Typography.Title level={5} style={heading2}>
                      PROFESSIONAL
                    </Typography.Title>
                  </Col>
                }
                key="2"
              >
                <Row justify="center">
                  <Col md={21} sm={21} xs={21}>
                    <List
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item>
                          <Typography.Text style={text}>
                            {item.text}
                          </Typography.Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col md={2} sm={2} xs={2}>
                    <List
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item style={{ marginLeft: "25px" }}>
                          <Typography.Text>
                            {item.professional ? (
                              <Badge color="#00AE65" />
                            ) : (
                              <Badge color="grey" />
                            )}
                          </Typography.Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab={
                  <Col
                    style={small}
                    onClick={() => {
                      setStarterColor("grey");
                      setPortColor("#00AE65");
                      setProColor("grey");
                    }}
                  >
                    <center>
                      {" "}
                      <GiAtomicSlashes size="35px" color={portColor} />{" "}
                    </center>

                    <Typography.Title level={5} style={heading3}>
                      PORTFOLIO
                    </Typography.Title>
                  </Col>
                }
                key="3"
              >
                <Row justify="center">
                  <Col md={21} sm={21} xs={21}>
                    <List
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item>
                          <Typography.Text style={text}>
                            {item.text}
                          </Typography.Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col md={2} sm={2} xs={2}>
                    <List
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item style={{ marginLeft: "25px" }}>
                          <Typography.Text>
                            {item.portfolio ? (
                              <Badge color="#00AE65" />
                            ) : (
                              <Badge color="grey" />
                            )}
                          </Typography.Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Row>
        </div>
      ) : (
        <Row justify="center" style={{ marginTop: "100px" }}>
          <Col lg={9} md={9} sm={7}>
            <Typography.Title
              level={4}
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography.Title>
            <List
              style={{ marginTop: "49px" }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text
                    style={text}
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      
                    }}
                  >
                    {item.text}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </Col>

          <Col lg={4} md={4} sm={6} style={{ textAlign: "center" }}>
            <FiSend size="35px" />
            <Typography.Title
              level={5}
              style={{ fontSize: "15px", color: "black" }}
            >
              STARTER
            </Typography.Title>
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={{ justifyContent: "center" }}>
                  <Typography.Text>
                    {item.starter ? (
                      <Badge color="#00AE65" />
                    ) : (
                      <Badge color="grey" />
                    )}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </Col>

          <Col lg={4} md={6} sm={6} style={{ textAlign: "center" }}>
            <IoRocketOutline size="35px" />

            <Typography.Title
              level={5}
              style={{ fontSize: "15px", color: "black" }}
            >
              PROFESSIONAL
            </Typography.Title>
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={{ justifyContent: "center" }}>
                  <Typography.Text>
                    {item.professional ? (
                      <Badge color="#00AE65" />
                    ) : (
                      <Badge color="grey" />
                    )}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </Col>
          <Col lg={4} md={4} sm={5} style={{ textAlign: "center" }}>
            <GiAtomicSlashes size="35px" />

            <Typography.Title
              level={5}
              style={{ fontSize: "15px", color: "black" }}
            >
              PORTFOLIO
            </Typography.Title>

            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={{ justifyContent: "center" }}>
                  <Typography.Text>
                    {item.portfolio ? (
                      <Badge color="#00AE65" />
                    ) : (
                      <Badge color="grey" />
                    )}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Included;
