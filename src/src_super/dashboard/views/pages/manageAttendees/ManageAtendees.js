import "./ManageAtendees.css";
import { useEffect, useState } from "react";
import { Row, Table } from "reactstrap";

import axios from "axios";
import { ServerURL } from "../../../url";
import AddNew from "../../../components/AddNewUser/AddNew";
import Edit from "../../../components/AddNewUser/Edit";
import { useDispatch } from "react-redux";
import DatePicker from "react-date-picker";
import moment from "moment";

const ManageAtendees = () => {
  const dispatch = useDispatch();

  const [attendees, setAttendees] = useState([{}]);
  const [by, setBy] = useState("fname");
  const [contains, setContains] = useState("contains");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState("list");

  useEffect(() => {
    let data = {
      search: "",
    };
    axios
      .post(`${ServerURL}/api/attendees/get-attendees`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        res.data.result
          ? setAttendees(res.data.result)
          : res.data.error
          ? console.log(res.data.error)
          : console.log("error:", res.data);
      });
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();

    let data = {
      by: by,
      contains: contains,
      search: search,
    };
    axios
      .post(`${ServerURL}/api/attendees/get-attendees`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        res.data.result
          ? setAttendees(res.data.result)
          : res.data.error
          ? console.log(res.data.error)
          : console.log("error:", res.data);
      });
  };

  const handleChanges = (e) => {
    e.preventDefault();
    const { name, value, placeholder } = e.target;
    switch (name) {
      case "select-by":
        setBy(value);
        break;
      case "select-contains":
        setContains(value);
        break;
      case "search":
        if (placeholder === "Age") {
          let dates = [];
          dates.push(
            new Date(moment().subtract(value, "years").startOf("year"))
          );
          dates.push(new Date(moment().subtract(value, "years").endOf("year")));
          setSearch(dates);
        } else {
          setSearch(value);
        }

        break;
    }
  };

  const handleShow = (e, screen) => {
    e.preventDefault();
    setShow(screen);
  };

  return (
    <div className="manage-attendee-main">
      {show === "add" && <AddNew who={"attendee"} setShow={setShow} />}
      {show === "edit" && <Edit who={"attendee"} setShow={setShow} />}
      {show === "list" && (
        <>
          <button onClick={(e) => handleShow(e, "add")} id="btn-add">
            + Add New
          </button>

          <div className="table-div">
            <div id="row-2">
              <select name="select-by" id="select-by" onChange={handleChanges}>
                <option value="email">Email</option>
                <option value="fname">First Name</option>
                <option value="dob">Age</option>
              </select>

              {by !== "dob" ? (
                <>
                  <select
                    name="select-contains"
                    id="select-contains"
                    onChange={handleChanges}
                  >
                    <option value="contains">Contains</option>
                    <option value="=">=</option>
                  </select>

                  <input
                    name="search"
                    id="search"
                    placeholder="search"
                    onChange={handleChanges}
                  ></input>
                  <button id="select-contains" onClick={handleFilter}>
                    Search
                  </button>
                </>
              ) : (
                <>
                  <input
                    id="age-input"
                    title="Must be between 0 - 150"
                    min={0}
                    max={150}
                    name="search"
                    type="number"
                    placeholder="Age"
                    onChange={handleChanges}
                  />
                  <button id="select-contains" onClick={handleFilter}>
                    Search
                  </button>
                </>
              )}
            </div>
            <Row id="row-3">
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {attendees.map((attendee, i) => (
                    <tr key={i}>
                      <td>{++i}</td>
                      <td>{attendee.fname + " " + attendee.lname}</td>
                      <td>{attendee.email}</td>

                      <td>{String(attendee.created_at).split("T")[0]}</td>
                      <td>
                        <button
                          id="btn-edit"
                          onClick={(e) => {
                            dispatch({
                              type: "ORG_ATTENDEE_DATA",
                              payload: attendee,
                            });
                            handleShow(e, "edit");
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageAtendees;
