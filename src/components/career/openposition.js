import React from "react";
import "../../styles/components/careers/openposition.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const departments = [
  {
    value: "Customer Support",
    label: "Customer Support",
  },
  {
    value: "Customer Success",
    label: "Customer Success",
  },
  {
    value: "Design",
    label: "Design",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
];
const locations = [
  {
    value: "helsinki",
    label: "helsinki",
  },
  {
    value: "All USA",
    label: "All USA",
  },
  {
    value: "jyvaskyla",
    label: "jyvaskyla",
  },
];
const dept = 'Alldepartments';
const Openposition = () => {
  const [department, setDepartment] = React.useState(dept);
  const [location, setLocation] = React.useState('Alllocations');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };
  const hanleChangelocation = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div>
      <br />
      <div className="openContainer">
        <h1 className="position-haeding" id="position">OPEN POSITIONS</h1>
      </div>
      <div className="text-div-container">
        <TextField
          id="standard-select-currency"
          select
          
          value={department}
          onChange={handleChange}
          variant="standard"
          style={{
            width: "30%",
            justifyItems: "center",
            paddingLeft: "10rem",
          }}
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          value={location}
          onChange={hanleChangelocation}
          variant="standard"
          style={{
            width: "30%",
            justifyItems: "center",
            paddingLeft: "10rem",
          }}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <hr className="hr-line mx-auto" />
      <div className="heading-one-open">
        <h1>Customer Support Representative</h1>
        <p style={{ color: "#888", fontSize: "2rem" }}>
          Customer Support - the USA
        </p>
      </div>
      <hr className="hr-line mx-auto" />
      <div className="heading-one-open">
        <h1>Sales Development Representative</h1>
        <p style={{ color: "#888", fontSize: "2rem" }}>
          Sales - Sales Development Representative - the USA
        </p>
      </div>
      <hr className="hr-line mx-auto" />
      <div className="heading-one-open">
        <h1>Account Executive</h1>
        <p style={{ color: "#888", fontSize: "2rem" }}>
          Sales - Account Executive - the USA
        </p>
      </div>
      <hr className="hr-line mx-auto" />
      <div className="heading-one-open">
        <h1>Product Designer</h1>
        <p style={{ color: "#888", fontSize: "2rem" }}>
          Design - Product Designer - Helsinki
        </p>
      </div>
      <hr className="hr-line mx-auto" />
      <div className="heading-one-open">
        <h1>Visual Designer</h1>
        <p style={{ color: "#888", fontSize: "2rem" }}>
          Design - Visual Designer - Helsinki
        </p>
      </div>
      <hr className="hr-line mx-auto" />
      <div className="heading-one-open">
        <h1>Front-end Developer (React)</h1>
        <p style={{ color: "#888", fontSize: "2rem" }}>
          Tech - Frontend Development - Helsinki, Jyväskylä
        </p>
      </div>
      <hr className="hr-line mx-auto" />
      <div className="para-one-open">
        <p style={{ fontSize: "1.3rem" }}>
          We’re just getting started. Join us as we continue to scale
          internationally,
          <br />
          expand our partnerships and build the world’s leading event platform
          for
          <br />
          events of all shapes and sizes.
        </p>
        <p style={{ fontSize: "1.3rem" }}>
          Our Brella team can’t wait to meet you! If there is nothing for you
          currently open,
          <br /> connect with us to be the first to know about our new job
          openings.
        </p>
      </div>
      <hr className="hr-line mx-auto" style={{ marginTop: "10rem" }} />
      <div className="para-one-open">
        <p style={{ fontSize: "1.3rem" }}>
          Here I have really been able to make an impact and also been given the
          freedom to
          <br />
          make it. It’s an amazing feeling when you can grow with the company in
          a truly
          <br />
          global environment, not one day has passed that I wouldn’t have
          learned something
        </p>

        <img
          src={process.env.PUBLIC_URL + "/images/img1.jpg"}
          className="leftSide1-img"
        />
        <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>hukunda achak</p>
      </div>
      <hr
        style={{ width: "50%", alignItems: "center", textAlign: "center" }}
        className="mx-auto"
      />
  
      {/* <div className="col-6  mx-auto">
        <h1 style={{ fontSize: "6rem", fontWeight: "770", color: "black" }}>
          The healthiest growth company in Finland
        </h1>
      </div>

      <div className="last-content-main">
        <div className="div-last-left col-sm-12 col-md-10 col-lg-8 ">
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "700",
              paddingTop: "5rem",
            }}
          >
            With our people-first culture we strive to:
          </p>

          <ul className="list_left mx-auto">
            <li className="list_one mx-auto col-6">
              1.
              <span /> Drive and coach culture that demands growth and ambition.
            </li>
            <li className="list_one mx-auto col-6">
              2.
              <span />
              Attract, recruit and nurture the best possible talent
            </li>
            <li className="list_one mx-auto col-6">
              3.
              <span />
              Support a safe and encouraging work place, where everyone can feel
              confident, trusted and respected.
            </li>
          </ul>

          <p style={{ fontSize: "1.3rem" }}>
            Our goal is to be the healthiest tech growth company in Finland!
          </p>
        </div>
        <div className="div-last-right col-sm-6 col-md-10 col-lg-4">
          <img
            src={process.env.PUBLIC_URL + "/images/img6.jpg"}
            className="rightSide1-img"
          />
        </div>
      </div>
      <div>
         */}
        
    </div>
  );
};

export default Openposition;
