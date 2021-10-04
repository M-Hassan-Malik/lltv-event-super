import "./manage-events.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Row, Table, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";
import { ServerURL } from "../../../url";
const ManageEvents = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [by, setBy] = useState("title");
  const [contains, setContains] = useState("contains");
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([
    {
      _id: "",
      title: "",
      category: "",
      start_date: "",
      end_date: "",
      updated_at: "",
      webURL: "",
      images: "",
    },
  ]);
  const [rerender, setRerender] = useState("false");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get(`${ServerURL}/api/events/get-events`).then((res) => {
      res.data.result ? setEvents(res.data.result) : alert(res.data.error);
    });
  }, [rerender]);

  const handleFilter = (e) => {
    e.preventDefault();
    let data = {
      by: by,
      contains: contains,
      search: search,
    };
    axios
      .post(`${ServerURL}/api/events/filter-events`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        res.data.result.length > 0
          ? setEvents(res.data.result)
          : res.data.result.length === 0
          ? alert("No Match Found!")
          : res.data.error
          ? console.log(res.data.error)
          : console.log("error:", res.data);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    switch (name) {
      case "view":
        window.open(
          `https://lltv-event-client.netlify.app/events/${value}`,
          "_blank"
        );
        break;
      case "edit":
        dispatch({ type: "MANAGE_EVENT", payload: JSON.parse(value) });
        history.push("/admin/edit/event");
        break;
      case "delete":
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            let event_id = value;
            axios
              .delete(`${ServerURL}/api/events/delete-event/${event_id}`)
              .then((res) => {
                if (res.data.result) {
                  Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                  );
                  setRerender(!rerender);
                } else Swal.fire("Deletion Failed!");
              });
          }
        });

        break;
    }
  };
  const handleChanges = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "select-by":
        setBy(value);
        if (value === "eventType") {
          (search !== "Virtual" ||
            search !== "In-Person" ||
            search !== "Hybrid") &&
            setSearch("Hybrid");
        } else if (value === "hostingPlatform") {
          (search !== "Zoom" || search !== "StreamYard") && setSearch("Zoom");
        } else setSearch("");
        break;
      case "select-contains":
        setContains(value);
        break;
      case "search":
        setSearch(value);
        break;
    }
  };

  return (
    <div className="main-manage-event">
      {events[0]._id === "" ? (
        <h1 style={{ position: "absolute", top: "40vh", left: "40vw" }}>
          No Data!
        </h1>
      ) : (
        <>
          <Row id="row-1">
            <select id="select-by" name="select-by" onChange={handleChanges}>
              <option value="title">Title</option>
              <option value="category">Category</option>
              <option value="hostingPlatform">Hosting Platform</option>
              <option value="start_date">Start Date</option>
              <option value="eventType">Event Type</option>
              <option value="city">City</option>
              <option value="country">Country</option>
            </select>

            {by !== "eventType" && by !== "hostingPlatform" && (
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
                />
              </>
            )}
            {by === "eventType" && (
              <>
                <select
                  name="search"
                  id="select-contains"
                  onChange={handleChanges}
                >
                  <option selected value="Hybrid">
                    Hybrid
                  </option>
                  <option value="Virtual">Virtual</option>
                  <option value="In-Person">In-Person</option>
                </select>
              </>
            )}
            {by === "hostingPlatform" && (
              <>
                <select
                  id="select-contains"
                  name="search"
                  onChange={handleChanges}
                >
                  <option selected value="Zoom">
                    Zoom
                  </option>
                  <option value="StreamYard">StreamYard</option>
                </select>
              </>
            )}
            <button id="btn-filter" onClick={handleFilter}>
              Search
            </button>
          </Row>
          <Table id="row-2">
            <thead>
              <tr id="thead-row">
                <th>ID</th>
                <th>Title</th>
                <th>Category Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Thumbnail</th>
                <th>Status</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e, i) => (
                <tr key={e._id} id="table-row">
                  <td>{++i}</td>
                  <td>{e.title}</td>
                  <td>{e.category}</td>
                  <td>{e.start_date.split("T")[0]}</td>
                  <td>{e.end_date.split("T")[0]}</td>
                  {e.images !== "" ? (
                    <td>
                      {
                        <img
                          style={{ maxHeight: "10vh", maxWidth: "15vw" }}
                          src={`https://lltv-event-server.herokuapp.com/${e.organizer_id}/${e.webURL}/${e.images[0].filename}`}
                          alt={e.images[0].filename}
                        />
                      }
                    </td>
                  ) : (
                    <td>No Img (</td>
                  )}
                  <td>Enabled</td>
                  <td>{e.updated_at.split("T")[0]}</td>
                  <td>
                    <Container id="container">
                      <button
                        id="btn-view"
                        size="sm"
                        value={e.webURL}
                        name="view"
                        onClick={handleClick}
                      >
                        View
                      </button>
                      <button
                        id="btn-edit"
                        size="sm"
                        value={JSON.stringify(e)}
                        name="edit"
                        onClick={handleClick}
                      >
                        Edit
                      </button>
                      <button
                        id="btn-delete"
                        size="sm"
                        value={e._id}
                        name="delete"
                        onClick={handleClick}
                      >
                        Delete
                      </button>
                    </Container>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default ManageEvents;
