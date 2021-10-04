import "./EditEvent.css";
import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import countryList from "react-select-country-list";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Container,
  Col,
  Row,
  Input,
  Form,
  FormGroup,
  Button,
  Label,
} from "reactstrap";
import { ServerURL } from "../../../url";

const EditEvents = () => {
  const MANAGE_EVENT = useSelector((state) => state.userReducer.manageEvent);

  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);

  const countries = useMemo(() => countryList().getData(), []);
  const [submitButton, setSubmitButton] = useState(true);

  const [page, setPage] = useState(1);
  const [page1Enable, setPage1Enable] = useState(true);
  const [page2Enable, setPage2Enable] = useState(false);
  const [page3Enable, setPage3Enable] = useState(false);
  const [page4Enable, setPage4Enable] = useState(false);

  //Page 1
  const [title, setTitle] = useState(MANAGE_EVENT.title);
  const [hostingPlatform, setHostingPlatform] = useState(
    MANAGE_EVENT.hostingPlatform
  );
  const [description, setDescription] = useState(() =>
    EditorState.createEmpty()
  );
  const [moreinfo, setMoreinfo] = useState(() => EditorState.createEmpty());
  const [category, setCategory] = useState(MANAGE_EVENT.category);
  const [eventType, setEventType] = useState(MANAGE_EVENT.eventType);
  const [webURL, setWebURL] = useState(MANAGE_EVENT.webURL);

  //Page 2
  const [dateStart, setDateStart] = useState(
    MANAGE_EVENT.start_date !== ""
      ? new Date(MANAGE_EVENT.start_date)
      : new Date()
  );
  const [dateEnd, setDateEnd] = useState(
    MANAGE_EVENT.end_date !== "" ? new Date(MANAGE_EVENT.end_date) : new Date()
  );
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();

  //Page 3
  const [venue, setVenue] = useState(MANAGE_EVENT.venue);
  const [venueAddress, setVenueAddress] = useState(MANAGE_EVENT.venue_address);
  const [city, setCity] = useState(MANAGE_EVENT.city);
  const [state, setState] = useState(MANAGE_EVENT.state);
  const [zipcode, setZipcode] = useState(MANAGE_EVENT.zipcode);
  const [country, setCountry] = useState(MANAGE_EVENT.country);

  //Page 4
  const [thumbnail, setThumbnail] = useState(MANAGE_EVENT.thumbnail);
  const [imgScr, setiImgScr] = useState("");

  useEffect(() => {
    document.body.classList.toggle("events-page");
    return function cleanup() {
      document.body.classList.toggle("events-page");
    };
  });

  const handleNextPreviousPage = (e) => {
    e.preventDefault();
    const { name } = e.target;
    let pageNumber = page;

    if (name === "next") {
      switch (pageNumber) {
        case 1:
          try {
            if (
              title !== null &&
              title.length > 3 &&
              convertToRaw(description.getCurrentContent()).blocks[0].text
                .length > 1 &&
              convertToRaw(moreinfo.getCurrentContent()).blocks[0].text.length >
                1 &&
              eventType !== "--Event Type--" &&
              eventType !== "" &&
              webURL !== 'https://www."".com' &&
              webURL !== ""
            ) {
              setPage2Enable(true);
              setPage(2);
            } else {
              alert(
                "Before proceeding... Fill fields on this page first, please!"
              );
            }
          } catch (e) {
            alert(
              "Before proceeding... Fill fields on this page first, please!"
            );
          }
          break;
        case 2:
          try {
            if (timeStart !== null && timeEnd !== null) {
              setPage3Enable(true);
              setPage(3);
            } else {
              alert(
                "Before proceeding... Fill fields on this page first, please!"
              );
            }
          } catch (e) {
            alert(
              "Before proceeding... Fill fields on this page first, please!"
            );
          }
          break;
        case 3:
          try {
            if (
              venue.length > 3 &&
              venueAddress.length > 3 &&
              city.length > 3 &&
              state.length > 3 &&
              country.length > 2
            ) {
              setPage4Enable(true);
              setPage(4);
              setSubmitButton(false);
            } else {
              alert(
                "Before proceeding... Fill fields on this page first, please!"
              );
            }
          } catch (e) {
            alert(
              "Before proceeding... Fill fields on this page first, please!"
            );
          }
          break;
      }
    } else {
      switch (pageNumber) {
        case 4:
          setPage3Enable(true);
          setPage(3);
          break;
        case 3:
          setPage2Enable(true);
          setPage(2);
          break;
        case 2:
          setPage1Enable(true);
          setPage(1);
          break;
      }
    }
  };

  const handleNextPage = (e) => {
    e.preventDefault();

    const { name } = e.target;
    switch (name) {
      case "page1":
        page !== 1 && setPage(1);
        break;

      case "page2":
        if (page !== 2) {
          try {
            if (
              title !== null &&
              title.length > 3 &&
              convertToRaw(description.getCurrentContent()).blocks[0].text
                .length > 1 &&
              convertToRaw(moreinfo.getCurrentContent()).blocks[0].text.length >
                1 &&
              eventType !== "--Event Type--" &&
              eventType !== "" &&
              hostingPlatform !== "--Hosting Platform--" &&
              hostingPlatform !== "" &&
              webURL !== 'https://www."".com' &&
              webURL !== ""
            ) {
              setPage2Enable(true);
              setPage(2);
            } else {
              alert(
                "Before proceeding... Fill fields on this page first, please!"
              );
            }
          } catch (e) {
            alert(
              "Before proceeding... Fill fields on this page first, please!"
            );
          }
        }

        break;
      case "page3":
        if (page !== 3) {
          try {
            if (timeStart !== null && timeEnd !== null) {
              setPage3Enable(true);
              setPage(3);
            } else {
              alert(
                "Before proceeding... Fill fields on this page first, please!"
              );
            }
          } catch (e) {
            alert(
              "Before proceeding... Fill fields on this page first, please!"
            );
          }
          break;
        }

      case "page4":
        if (page !== 4) {
          try {
            if (venueAddress.length > 3) {
              setPage4Enable(true);
              setPage(4);
              setSubmitButton(false);
            } else {
              alert(
                "Before proceeding... Fill fields on this page first, please!"
              );
            }
          } catch (e) {
            alert(
              "Before proceeding... Fill fields on this page first, please!"
            );
          }
        }
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    const htmlDescription = draftToHtml(
      convertToRaw(description.getCurrentContent())
    );
    const htmlMoreinfo = draftToHtml(
      convertToRaw(moreinfo.getCurrentContent())
    );

    data.append("eventId", MANAGE_EVENT._id);
    data.append("id", MANAGE_EVENT.organizer_id);
    data.append("title", title);
    data.append("description", htmlDescription);
    data.append("moreinfo", htmlMoreinfo);
    data.append("eventType", eventType);
    data.append("hostingPlatform", hostingPlatform);
    data.append("category", category);
    data.append("webURL", webURL);
    data.append("dateStart", dateStart);
    data.append("dateEnd", dateEnd);
    data.append("timeStart", timeStart);
    data.append("timeEnd", timeEnd);
    data.append("venue", venue);
    data.append("venueAddress", venueAddress);
    data.append("city", city);
    data.append("state", state);
    data.append("zipcode", zipcode);
    data.append("country", country);
    data.append("thumbnail", thumbnail);

    Axios.post(
      `https://lltv-event-server.herokuapp.com/api/generate/updateEvent`,
      data
    ).then((res) => {
      if (res.data.result) {
        alert("Event Updated");
        history.push("admin/dashboard");
        window.location.reload();
      } else if (res.data.error) {
        alert(res.data.error);
      } else console.log("some other error at CreateEvent.js in update events");
    });
  };

  const handleChanges = (e) => {
    const { value, files, name } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        setWebURL(value.replace(/\s/g, "-").toLowerCase());
        break;
      case "description":
        setDescription(value);
        break;
      case "moreinfo":
        setMoreinfo(value);
        break;
      case "eventType":
        setEventType(value);
        break;
      case "hostingPlatform":
        setHostingPlatform(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "venue":
        setVenue(value);
        break;
      case "venueAddress":
        setVenueAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "zipcode":
        setZipcode(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "thumbnail":
        let my = URL.createObjectURL(files[0]);
        setiImgScr(my);
        console.log("files-", my);
        setThumbnail(files[0]);
        break;

      default:
        console.log("Switch => default Block");
        break;
    }
  };
  return (
    <>
      {MANAGE_EVENT === undefined || MANAGE_EVENT.title === "" ? (
        <h1
          style={{
            position: "absolute",
            top: "40vh",
            left: "40vw",
            backgroundColor: "#ff3333",
          }}
        >
          No data found to be edit!
        </h1>
      ) : (
        <div className="content-event-edit">
          <Container>
            <Form
              className="my-form"
              encType="multipart/form-data"
              onSubmit={handleFormSubmit}
            >
              <button
                id="btn-page"
                sm="1"
                name="page1"
                onClick={handleNextPage}
              >
                Details
              </button>
              <button
                id="btn-page"
                sm="1"
                name="page2"
                onClick={handleNextPage}
              >
                Timings
              </button>
              <button
                id="btn-page"
                sm="1"
                name="page3"
                onClick={handleNextPage}
              >
                Location
              </button>
              <button
                id="btn-page"
                sm="1"
                name="page4"
                onClick={handleNextPage}
              >
                Photos
              </button>

              {page === 1 && (
                <>
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="select"
                      name="eventType"
                      value={eventType}
                      onChange={handleChanges}
                    >
                      <option>--Event Type--</option>
                      <option>Virtual</option>
                      <option>Hybrid</option>
                      <option>In-Person</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="text"
                      name="category"
                      value={category}
                      placeholder="Enter event category"
                      onChange={handleChanges}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleChanges}
                      placeholder="Title"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>
                      Event URL probabily be:
                      https://lltv-events-front.netlify.app/{webURL}
                    </label>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="select"
                      name="hostingPlatform"
                      value={hostingPlatform}
                      onChange={handleChanges}
                    >
                      <option>--Hosting Platform--</option>
                      <option>Zoom</option>
                      <option>StreamYard</option>
                    </Input>
                  </FormGroup>
                  <FormGroup style={{ marginTop: "4%" }}>
                    <Editor
                      toolbar={{
                        options: [
                          "inline",
                          "blockType",
                          "fontSize",
                          "fontFamily",
                          "list",
                          "textAlign",
                          "link",
                          "embedded",
                          "emoji",
                          "image",
                          "remove",
                          "history",
                        ],
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: false },
                      }}
                      editorState={description}
                      placeholder="Add Description"
                      onEditorStateChange={setDescription}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                    />

                    {console.log(
                      "description->",
                      draftToHtml(convertToRaw(description.getCurrentContent()))
                    )}
                    {/* {console.log(
                    "description->",
                    String(convertToRaw(description.getCurrentContent()).blocks[0].text)
                  )} */}
                  </FormGroup>

                  <FormGroup style={{ marginTop: "4%" }}>
                    <Editor
                      toolbar={{
                        options: [
                          "inline",
                          "blockType",
                          "fontSize",
                          "fontFamily",
                          "list",
                          "textAlign",
                          "link",
                          "embedded",
                          "emoji",
                          "image",
                          "remove",
                          "history",
                        ],
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: false },
                      }}
                      editorState={moreinfo}
                      placeholder="Why to attend"
                      onEditorStateChange={setMoreinfo}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                    />

                    {/* {console.log(
                    "editorState => ",
                    convertToRaw(moreinfo.getCurrentContent()).blocks[0].text
                  )} */}
                    {/* <Input
                    style={{ backgroundColor: "black" }}
                    type="textarea"
                    name="description"
                    value={description}
                    placeholder="Description"
                    onChange={handleChanges}
                  /> */}
                  </FormGroup>
                </>
              )}
              {/* page Date TIme */}
              {page === 2 && (
                <Row>
                  <Col>
                    <FormGroup>
                      <Label style={{ fontWeight: "bold" }}>Start Date: </Label>
                      <br />
                      <DatePicker
                        minDate={new Date()}
                        onChange={(d) => setDateStart(d)}
                        selected={dateStart}
                        shouldCloseOnSelect
                        closeOnScroll={(e) => e.target === document}
                        dateFormat="dd/ MM / yyyy"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label style={{ fontWeight: "bold" }}>End Date: </Label>
                      <br />
                      <DatePicker
                        minDate={new Date()}
                        onChange={(d) => setDateEnd(d)}
                        selected={dateEnd}
                        shouldCloseOnSelect
                        closeOnScroll={(e) => e.target === document}
                        dateFormat="dd/ MM / yyyy"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label style={{ fontWeight: "bold" }}>Start Time: </Label>
                      <br />
                      <TimePicker
                        // placeholder={
                        //   MANAGE_EVENT.start_time !== null
                        //     ? MANAGE_EVENT.start_time.split(" ")[4]
                        //     : ""
                        // }
                        showSecond={false}
                        use12Hours
                        hideDisabledOptions
                        minuteStep={5}
                        onChange={(t) => {
                          setTimeStart(t);
                        }}
                        value={timeStart}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label style={{ fontWeight: "bold" }}>End Time: </Label>
                      <br />
                      <TimePicker
                        // placeholder={
                        //   MANAGE_EVENT.end_time !== null
                        //     ? MANAGE_EVENT.end_time.split(" ")[4]
                        //     : ""
                        // }
                        showSecond={false}
                        use12Hours
                        hideDisabledOptions
                        minuteStep={5}
                        onChange={(t) => setTimeEnd(t)}
                        value={timeEnd}
                      />
                    </FormGroup>
                  </Col>
                  <pre>{JSON.stringify(timeEnd, null, 4)} </pre>
                </Row>
              )}
              {/* page Address */}
              {page === 3 && (
                <>
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="text"
                      name="venue"
                      value={venue}
                      placeholder="Venue"
                      onChange={handleChanges}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="textarea"
                      name="venueAddress"
                      value={venueAddress}
                      placeholder="Venue Address"
                      onChange={handleChanges}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="text"
                      name="city"
                      value={city}
                      onChange={handleChanges}
                      placeholder="City"
                    />
                  </FormGroup>{" "}
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="text"
                      name="state"
                      value={state}
                      onChange={handleChanges}
                      placeholder="State"
                    />
                  </FormGroup>{" "}
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="number"
                      name="zipcode"
                      value={zipcode}
                      placeholder="Zipcode"
                      onChange={handleChanges}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      style={{ backgroundColor: "black" }}
                      type="select"
                      name="country"
                      value={country}
                      onChange={handleChanges}
                    >
                      <option>--Country--</option>
                      {countries.map((country) => (
                        <option>{country.label}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </>
              )}
              {/* Page Images */}
              {page === 4 && (
                <>
                  <FormGroup>
                    <button id="thumbnail-btn">
                      Select a square image
                      <br />( Thumbnail )
                    </button>
                    <Input
                      onChange={handleChanges}
                      type="file"
                      accept="image/*"
                      name="thumbnail"
                    />
                  </FormGroup>
                  <img
                    style={{
                      maxWidth: "15rem",
                      maxHeight: "15rem",
                      display: "block",
                      marginBottom: "10%",
                    }}
                    src={imgScr === "" ? "" : imgScr}
                  ></img>
                </>
              )}
              <div>
                <button id="btn-submit" type="submit" disabled={submitButton}>
                  Submit Now
                </button>
                <button
                  id="next-prev-btn"
                  name="next"
                  onClick={handleNextPreviousPage}
                >
                  Next {"->>"}
                </button>
                <button
                  id="next-prev-btn"
                  name="previous"
                  onClick={handleNextPreviousPage}
                >
                  {"<<-"} Previous
                </button>
              </div>
            </Form>
          </Container>
        </div>
      )}
    </>
  );
};

export default EditEvents;
