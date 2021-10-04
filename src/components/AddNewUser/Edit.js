import "./AddNew.css";
import { useState } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { ServerURL } from "../../url";
import { useSelector } from "react-redux";
import DatePicker from "react-date-picker";
import moment from "moment";

const Edit = (props) => {
  const { setShow, who } = props;
  const userData = useSelector((state) => state.userReducer.org_attendee);

  const [fname, setFname] = useState(userData.fname);
  const [lname, setLname] = useState(userData.lname);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [address, setAddress] = useState(userData.address);
  const [dob, setDOB] = useState(new Date(userData.dob));
  const [postal, setPostal] = useState(userData.postal);
  const [contact, setContact] = useState(userData.contact);
  const [company, setCompany] = useState(userData.company);
  const [agree, setAgree] = useState(true);
  var errorShower = [];

  const handleChanges = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "fname":
        setFname(value);
        break;
      case "lname":
        setLname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "postal":
        setPostal(value);
        break;
      case "contact":
        setContact(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "agree":
        setAgree(!agree);
        break;

      default:
        break;
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const signupConstrains = () => {
      let regix = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );

      if (regix.test(password) === false) {
        errorShower.push(
          "Password must have min length 8 with:1 atleast upper case letter\n2 atleast lower case letter\n3 atleast one special character\n4 atleast one number\n"
        );
      }
      if (email.includes("@") === false) {
        errorShower.push("Invalid email\n");
      }
      if (agree === false) {
        errorShower.push("Please Agree our terms\n");
      }
      if (fname.length < 3 || lname.length < 3) {
        errorShower.push("Enter real name\n");
      }
      if (errorShower.length === 0) {
        return true;
      } else {
        return false;
      }
    };
    if (signupConstrains() === false) {
      alert(errorShower);
    } else {
      let data = {
        id: userData._id,
        user_type: who,
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        address: address,
        dob: dob,
        postal: postal,
        contact: contact,
        company: company,
        agree: agree,
        created_at: new Date(),
        updated_at: new Date(),
        month: new Date().getMonth() + 1, // start from 0 to 11
      };
      axios
        .patch(`${ServerURL}/api/logging/update-user`, {
          data: JSON.stringify(data),
        })
        .then((res) => {
          res.data.result.modifiedCount
            ? window.location.reload()
            : res.data.error
            ? alert(res.data.error)
            : console.log("addNew User @else:", res.data);
        });
    }
  };

  return (
    <>
      <Form className="add-new-form">
        <button
          id="back-btn"
          onClick={(e) => {
            e.preventDefault();
            setShow("list");
          }}
        >
          &#8592; GO Back
        </button>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                onChange={handleChanges}
                type="text"
                name="fname"
                value={fname}
                placeholder="Enter Name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Last Name</Label>
              <Input
                onChange={handleChanges}
                type="text"
                name="lname"
                value={lname}
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                onChange={handleChanges}
                type="email"
                name="email"
                value={email}
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Password</Label>
              <Input
                onChange={handleChanges}
                type="password"
                name="password"
                value={password}
                placeholder="password placeholder"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Address</Label>
          <Input
            type="text"
            name="address"
            value={address}
            placeholder="1234 Main St"
            onChange={handleChanges}
          />
        </FormGroup>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Date of Birth</Label>
              <br />
              <DatePicker
                showDisabledMonthNavigation
                maxDate={new Date(moment().subtract(18, "years"))}
                onChange={(e) => {
                  setDOB(e);
                }}
                value={dob}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Company</Label>
              <Input
                type="text"
                name="company"
                onChange={handleChanges}
                value={company}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Contact</Label>
              <Input
                type="tel"
                name="contact"
                onChange={handleChanges}
                value={contact}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Zip code</Label>
              <Input
                type="number"
                name="postal"
                onChange={handleChanges}
                value={postal}
              />
            </FormGroup>
          </Col>
        </Row>
        <button id="btn-save" onClick={handleRegistration}>
          Update User
        </button>
      </Form>
    </>
  );
};

export default Edit;
