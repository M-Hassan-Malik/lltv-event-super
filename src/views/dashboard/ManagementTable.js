import "./ManagementTable.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Progress,
  Table,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { ServerURL } from "../../url";

const ManagementTable = () => {
  const [organizers, setOrganizers] = useState([
    {
      fname: "",
      lname: "",
      user_type: "",
    },
  ]);
  const [startFrom, setStartFrom] = useState(0);
  const [limit, setLimit] = useState(10);
  const [selection, setSelection] = useState("all");

  useEffect(() => {
    let data = {
      selection: selection,
      startFrom: Number(startFrom),
      limit: Number(limit),
    };
    axios
      .post(`${ServerURL}/api/organizers/getAdmins`, {
        data: data,
      })
      .then((res) => {
        if (res.data.result) {
          res.data.result === null
            ? alert("No result found")
            : setOrganizers(res.data.result);
        } else if (res.data.error) {
        } else console.log(res.data);
      });
  }, []);

  const handleChanges = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    switch (name) {
      case "startFrom":
        setStartFrom(value);
        break;
      case "limit":
        setLimit(value);
        break;
      case "managementTable":
        setSelection(value);
        break;
    }
  };
  const handleFilter = (e) => {
    e.preventDefault();
    let data = {
      selection: selection,
      startFrom: Math.abs(Number(startFrom)),
      limit: Math.abs(Number(limit)),
    };

    axios
      .post(`${ServerURL}/api/organizers/getAdmins`, {
        data: data,
      })
      .then((res) => {
        if (res.data.result) {
          res.data.result === null
            ? alert("No result found")
            : setOrganizers(res.data.result);
        } else if (res.data.error) {
        } else console.log(res.data);
      });
  };

  return (
    <>
      <Col lg="7">
        <div id='management-table-div' >
          <Card>
            <CardHeader>
              <div className="tools float-right">
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                    <DropdownItem
                      className="text-danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Remove Data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div style={{ display: "flex" }}>
                <CardTitle tag="h5">
                  Manage :&nbsp;
                  <select
                    id="management-table"
                    name="managementTable"
                    style={{
                      textAlign: "center",
                      borderRadius: "5px",
                      border: "2px solid black",
                      width: "50px",
                      cursor: "pointer",
                    }}
                    onChange={handleChanges}
                  >
                    <option value="all">All</option>
                    <option value="organizer">Organizers</option>
                    <option value="attendee">Attendees</option>
                  </select>
                </CardTitle>
                <div style={{ marginLeft: "5%" }}>
                  <label>Start from:&nbsp;</label>
                  <input
                    placeholder="number!"
                    min={0}
                    type="text"
                    pattern="\d*"
                    maxlength="4"
                    name="startFrom"
                    value={startFrom}
                    style={{
                      width: "50px",
                      borderRadius: "5px",
                      border: "none",
                      textAlign: "center",
                    }}
                    onChange={handleChanges}
                  />
                  <label>&nbsp;Limit:&nbsp;</label>
                  <input
                    placeholder="number!"
                    min={1}
                    type="text"
                    pattern="\d*"
                    maxlength="4"
                    name="limit"
                    value={limit}
                    style={{
                      width: "50px",
                      borderRadius: "5px",
                      border: "none",
                      textAlign: "center",
                    }}
                    onChange={handleChanges}
                  />
                  &nbsp;
                  <button
                    style={{
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                    onClick={handleFilter}
                  >
                    Filter
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th className="text-center">#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Milestone</th>
                    <th className="text-right">$ubscription</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {organizers.map((org) => (
                    <tr>
                      <td className="text-center">
                        <div className="photo">
                          <img
                            alt="..."
                            src={require("assets/img/emilyz.jpg").default}
                          />
                        </div>
                      </td>
                      <td>{org.fname}</td>
                      <td>{org.user_type}</td>
                      <td className="text-center">
                        <div className="progress-container progress-sm">
                          <Progress multi>
                            <span className="progress-value">75%</span>
                            <Progress bar max="100" value="75" />
                          </Progress>
                        </div>
                      </td>
                      <td className="text-right">€ 99,201</td>
                      <td className="text-right">
                        <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip30547133"
                          size="sm"
                          title="Refresh"
                          type="button"
                        >
                          <i className="tim-icons icon-refresh-01" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip30547133">
                          Tooltip on top
                        </UncontrolledTooltip>
                        <Button
                          className="btn-link btn-icon"
                          color="danger"
                          id="tooltip156899243"
                          size="sm"
                          title="Delete"
                          type="button"
                        >
                          <i className="tim-icons icon-simple-remove" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip156899243"
                        >
                          Tooltip on top
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default ManagementTable;
