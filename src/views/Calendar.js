import React, { Children } from "react";
import axios from "axios";

// react component used to create a calendar with events on it
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";

// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

import { events } from "../variables/general";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  
  const [view, setView] = React.useState("month");
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [event, setEvents] = React.useState(events);
  const [alert, setAlert] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/events/get-events`)
      .then((res) => {
        res.data.error
          ? console.log(res.data.error)
          : res.data.result
          ? setRecievedEvents(res.data.result)
          : console.log(res.data);
      });
  }, []);

  const setRecievedEvents = (events) => {
    let eventNew = [],
      count = 0;
    events.map((e, i) => {
      let color;
      count === 0
        ? (color = "azure")
        : count === 1
        ? (color = "orange")
        : count === 2
        ? (color = "green")
        : (color = "red");
      ++count;

      let startDate = new Date(e.start_date);
      let s_y = startDate.getFullYear();
      let s_m = startDate.getMonth();
      let s_d = startDate.getDate();
      let startTime = new Date(e.start_time);
      let s_h = startTime.getHours();
      let s_min = startTime.getMinutes();
      let s_sec = startTime.getSeconds();

      let endDate = new Date(e.end_date);
      let e_y = endDate.getFullYear();
      let e_m = endDate.getMonth();
      let e_d = endDate.getDate();
      let endTime = new Date(e.end_time);
      let e_h = endTime.getHours();
      let e_min = endTime.getMinutes();
      let e_sec = endTime.getSeconds();

      eventNew.push({
        title: e.title,
        start: new Date(s_y, s_m, s_d, s_h, s_min,s_sec),
        end: new Date(e_y, e_m, e_d, e_h, e_min,e_sec),
        details: e,
        color: color,
      });

      count === 3 && (count = 0);
    });
    setEvents(eventNew);
  };

  const OnSelectedSlot = (slotInfo) => {
    setView("day");
    setCurrentDate(slotInfo.start);
  };

  const selectedEvent = (event) => {
    
    window.open(`https://lltv-event-client.netlify.app/events/${event.details.webURL}`, '_blank');
  };

  // const addNewEventAlert = (slotInfo) => {
  //   setAlert(
  //     <SweetAlert
  //       input
  //       showCancel
  //       style={{ display: "block", marginTop: "-100px" }}
  //       title="Input something"
  //       onConfirm={(e) => addNewEvent(e, slotInfo)}
  //       onCancel={() => hideAlert()}
  //       confirmBtnBsStyle="info"
  //       cancelBtnBsStyle="danger"
  //     />
  //   );
  // };
  // const addNewEvent = (e, slotInfo) => {
  //   var newEvents = events;
  //   newEvents.push({
  //     title: e,
  //     start: slotInfo.start,
  //     end: slotInfo.end,
  //   });
  //   setAlert(null);
  //   setEvents(newEvents);
  // };
  const hideAlert = () => {
    setAlert(null);
  };

  const eventColors = (event, start, end, isSelected) => {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor,
    };
  };

  const ColoredDateCellWrapper = (e) => {
    const { children, value } = e;
    return React.cloneElement(Children.only(children), {
      style: {
        ...children.style,
        backgroundColor: String(value) === String(currentDate) ? "grey" : "",
      },
    });
  };

  const onNavigate = (e) => {
    setCurrentDate(e);
  };
  const onView = (e) => {
    setView(e);
  };

  return (
    <>
      <div className="content">
        {alert}
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <Card className="card-calendar">
              <CardBody>
                <BigCalendar
                  startAccessor="start"
                  endAccessor="end"
                  date={currentDate}
                  selectable={true}
                  onNavigate={onNavigate}
                  onView={onView}
                  localizer={localizer}
                  view={view}
                  events={event}
                  onSelectEvent={(event) => selectedEvent(event)}
                  onSelectSlot={(slotInfo) => OnSelectedSlot(slotInfo)}
                  eventPropGetter={eventColors}
                  components={{
                    dateCellWrapper: ColoredDateCellWrapper,
                  }}
                  // slotPropGetter={(slotDate) => slotPropGetter(slotDate)}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Calendar;
