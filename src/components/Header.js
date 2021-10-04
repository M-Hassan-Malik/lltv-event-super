import React, { useState } from "react";
import Logo from "../assets/brellaMainLogo.svg";
import "../styles/components/Header.css";
import { Button, Drawer, Collapse, Divider } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Menu, Dropdown } from "antd";
import { BsArrowRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const Header = () => {
	const [visible, setVisible] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const isSmall = useMediaQuery({ query: "(max-width: 1117px)" });

	const showDrawer = () => {
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};

	// const onClick = () => {
	//   setShowMenu(!showMenu);
	// };

	const { Panel } = Collapse;
	const menu = (
		<Menu>
			<Row className="dropdownLi">
				<Col lg={12} md={12} sm={12} xs={12}>
					<Menu.Item>
						<Link to="/virtual-event-platform">
							<li>Virtual events</li>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/hybrid-event-platform">
							<li>Hybrid events</li>
						</Link>
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
            <Link to='/success-story'>
						<li>Customer success</li>
            </Link>
					</Menu.Item>
					<Menu.Item>
            <Link to='/features'>
						<li>All features</li>
            </Link>
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
            <Link to='/success-story'>
						<li>Success stories</li>
            </Link>
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
						<Link to="/about-us">
							<li>About us</li>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/career">
						<li>Careers</li>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<li>{`Media & press`}</li>
					</Menu.Item>
				</Col>
			</Row>
		</Menu>
	);

	return (
		<div>
			{isSmall ? (
				<div className="headerSmall">
					<div style={{ height: "25px", flexDirection: "row" }}>
						<Link to="/">
							<img src={Logo} width="100px" style={{ marginLeft: "7px" }} />
						</Link>
					</div>

					<div style={{ marginLeft: "50px" }}>
						<button
							type="primary"
							onClick={showDrawer}
							style={{
								backgroundColor: "transparent",
								boxShadow: "none",
								border: "white",
								cursor: "pointer",
								// paddingTop: "0px",
							}}
						>
							<HiOutlineMenuAlt4 style={{ color: "black", fontSize: "25px" }} />
						</button>
						<Drawer
							placement="top"
							onClose={onClose}
							visible={visible}
							getContainer={false}
							width={"100%"}
							height={"100%"}
							closeIcon={
								<GrClose style={{ fontSize: "20px", fontWeight: "600" }} />
							}
						>
							<div className="drawer">
								<div>
									<Collapse
										//onChange={callback}
										expandIconPosition="right"
										style={{ marginTop: "30px" }}
										ghost
									>
										<Panel header={<p>Events</p>} key="1">
											<div>
												<ul
													style={{
														backgroundColor: "#F5F5F5",
														paddingTop: "20px",
														paddingBottom: "20px",
													}}
												>
													<Link to="/virtual-event-platform">
														<li>Virtual events</li>
													</Link>
													<Link to="/hybrid-event-platform">
														<li>Hybrid events</li>
													</Link>

													<li>In-person events</li>
													<center>
														<Divider type="horizontal" />
													</center>

													<li style={{ fontSize: "medium", fontWeight: "400" }}>
														The ultimate guide to hybrid events{" "}
													</li>

													<a className="download">
														DOWNLOAD NOW <BsArrowRight />
													</a>
												</ul>
											</div>
										</Panel>
										<Divider />

										<Panel header={<p>Product</p>} key="2">
											<div>
												<ul
													style={{
														backgroundColor: "#F5F5F5",
														paddingTop: "20px",
														paddingBottom: "20px",
													}}
												>
													<Link>
														<li>Matchmaking & networking</li>
													</Link>

													<Link>
														<li>Sponsors & partners</li>
													</Link>
													<Link>
														<li>Event data & analytics</li>
													</Link>
													<Link>
														<li>Customer success</li>
													</Link>
													<Link to='/features' >
														<li>All features</li>
													</Link>
													<center>
														<Divider type="horizontal" />
													</center>
													<li style={{ fontSize: "15px", fontWeight: "400" }}>
														Improve your ticket retention by 18% with networking
													</li>

													<a className="download">
														GET THE REPORT{" "}
														<BsArrowRight style={{ color: "#00af66" }} />
													</a>
												</ul>
											</div>
										</Panel>
										<Divider />

										<Panel header={<p>Resources</p>} key="3">
											<div>
												<ul
													style={{
														backgroundColor: "#F5F5F5",
														paddingTop: "20px",
														paddingBottom: "20px",
													}}
												>
													<li>Resource center</li>
                          <Link to='/blogs'>
													<li>Blog</li>
                          </Link>
                          <Link to='/success-story'>
													<li>Success stories</li>
                          </Link>
													<li>Product news</li>
													<li>Releases</li>
												</ul>
											</div>
										</Panel>
										<Divider />

										<Panel header={<p>Company</p>} key="4">
											<div>
												<ul
													style={{
														backgroundColor: "#F5F5F5",
														paddingTop: "20px",
														paddingBottom: "20px",
													}}
												>
													<Link to="/about-us">
														<li>About us</li>
													</Link>
													<li>Careers</li>
													<li>Media & press</li>
												</ul>
											</div>
										</Panel>
										<Divider />

										<Panel
											id="last1"
											header={
												<Link to="/pricing">
													<p>Pricing</p>
												</Link>
											}
											key="5"
											collapsible={"disabled"}
											showArrow={false}
										>
											<div></div>
										</Panel>
										<Divider />
									</Collapse>
								</div>
								<div className="buttons">
									<p>
										<div className="signIn">
											<Button type="link">Sign in</Button>
										</div>
									</p>
									<p>
										<div className="contact">
											<Button type="primary">
												Contact Sales <BsArrowRight />
											</Button>
										</div>
									</p>
								</div>
							</div>
						</Drawer>
					</div>
				</div>
			) : (
				<div className="headerMain">
					<div id="first">
						<Link to="/">
							<img src={Logo} />
						</Link>
					</div>

					<div id="second">
						<ul className="headerList">
							<Dropdown overlay={menu}>
								<li>Events</li>
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

							<Link
								to="pricing"
								style={{ textDecoration: "none", color: "#949494" }}
							>
								<li>Pricing</li>
							</Link>
						</ul>
					</div>

					<div id="fourth" className="signIn">
						<Link to="/signin">
							{" "}
							<li>Sign in </li>
						</Link>
					</div>
					<div id="fifth" className="contact">
						<Button type="primary">
							Contact Sales <BsArrowRight />
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
