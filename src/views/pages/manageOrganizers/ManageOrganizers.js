import "./ManageOrganizers.css";
import { useEffect, useState } from "react";
import { Row, Table } from "reactstrap";
import axios from "axios";
import { ServerURL } from "../../../url";
import AddNew from "../../../components/AddNewUser/AddNew";
import Edit from "../../../components/AddNewUser/Edit";
import { useDispatch } from "react-redux";
import moment from "moment";

const ManageOrganizers = () => {
  const dispatch = useDispatch();
  const [organizers, setOrganizers] = useState([{}]);
  const [by, setBy] = useState("fname");
  const [contains, setContains] = useState("contains");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState("list");

  useEffect(() => {
    let data = {
      search: "",
    };
    axios
      .post(`${ServerURL}/api/organizers/get-organizers`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        res.data.result
          ? setOrganizers(res.data.result)
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
      .post(`${ServerURL}/api/organizers/get-organizers`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        res.data.result
          ? setOrganizers(res.data.result)
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
    <div className="manage-org-main">
      {show === "add" && <AddNew who={"organizer"} setShow={setShow} />}
      {show === "edit" && <Edit who={"organizer"} setShow={setShow} />}
      {show === "list" && (
        <>
          <button onClick={(e) => handleShow(e, "add")} id="btn-add">
            + Add New
          </button> 
          <div className="table-div">
            <Row id="row-2">
              <Table>
                <thead>
                  <tr>
                    <th>
                      <select
                        id="select-by"
                        name="select-by"
                        onChange={handleChanges}
                      >
                        <option value="email">Filter</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                        <option value="executive">Executive</option>
                      </select>
                    </th>
                    {by !== "dob" ? (
                      <>
                        <th>
                          <input
                            name="search"
                            id="search"
                            placeholder="search"
                            onChange={handleChanges}
                          ></input>
                          {/* <button
                            id="btn-filter"
                            style={{ fontSize: "1rem", width: "90px" }}
                            onClick={handleFilter}
                          >
                            Search
                          </button> */}
                        </th>
                      </>
                    ) : (
                      <div style={{ marginLeft: "100px" }}>
                        <input
                          title="Must be between 0 - 150"
                          min={0}
                          max={150}
                          name="search"
                          type="number"
                          placeholder="Age"
                          onChange={handleChanges}
                        />
                        <button
                          style={{ marginLeft: "10px", fontSize: "1.5rem" }}
                          id="btn-filter"
                          onClick={handleFilter}
                        >
                          Search
                        </button>
                      </div>
                    )}
                  </tr>
                </thead>
              </Table>
            </Row>
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
                  {organizers.map((organizer, i) => (
                    <tr key={i}>
                      <td>{++i}</td>
                      <td>{organizer.fname + " " + organizer.lname}</td>
                      <td>{organizer.email}</td>

                      <td>{String(organizer.created_at).split("T")[0]}</td>
                      <td>
                        <button
                          id="btn-edit"
                          onClick={(e) => {
                            dispatch({
                              type: "ORG_ATTENDEE_DATA",
                              payload: organizer,
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

export default ManageOrganizers;
