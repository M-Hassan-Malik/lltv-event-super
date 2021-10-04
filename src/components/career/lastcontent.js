import React from 'react'
import { Dropdown, Button } from "react-bootstrap";
import { FaBars, FaTimes, FaEnvira } from "react-icons/fa";
import { Card,CardImg } from 'react-bootstrap';
import { GrTechnology } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faAddressCard,
  faHospital,
  faReceipt,
  faCommentAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
import { IoIosArrowDropright } from "react-icons/io";
import { IoAnalyticsSharp } from "react-icons/io5";
import '../../styles/components/careers/sevencontent.css'


const Seventhcontent=()=> {
  
    return (
        <div>
             <div className="row second-r" >
          {" "}
          {/* Second card start here */}
          <div className="perks-heading">
            <h1 style={{fontSize:"7rem", width:"50%",fontWeight:"700"}} className="col-12 mx-auto">Perks & benefits</h1>
            <p style={{fontSize:"1.5rem", width:"50%", }} className="col-12 mx-auto">There are benefits to being a Brellaneer,
               and we’re not just talking about the office dogs. 
               Our perks & benefits are chosen with an aim to reflect our
                inclusive values and ideals, be it encouraging constant learning,
                 a great work-life balance, or a happy and healthy Brella culture.

</p>
          </div>
          <div class="card pro-card langding-card col-sm-12 col-md-8 col-lg-3 ">
            <div class="card-body">
              <a className="visual-dir">
                <FontAwesomeIcon icon={faAddressCard} size='50x' />
              </a>
              <h5 class="card-title">Keep on learning</h5>
              <p class="card-text">
                Digitize, manage employee personal information, contacts,
                documents, total rewards and benefits in one place.
              </p>
            </div>
          </div>
          <div class="card pro-card langding-card col-sm-8 col-md-8 col-lg-3 ">
            <div class="card-body">
              <a className="visual-dir">
                <FontAwesomeIcon icon={faChalkboardTeacher} />
              </a>
              <h5 class="card-title">Keep on learning</h5>
              <p class="card-text">
                Offer your new hires a positive and memorable first impression{" "}
              </p>
            </div>
          </div>
          <div class="card pro-card langding-card col-sm-8 col-md-8  col-lg-3">
            <div class="card-body">
              <a className="visual-dir">
                <FaEnvira />
              </a>
              <h5 class="card-title">Stay healthy,
safe and happy</h5>
              <p class="card-text">
                Ensure a smooth and compliant and efficient employee exit
              </p>
            </div>
          </div>
          <div class="card pro-card langding-card col-sm-8 col-md-8 col-lg-3 ">
            <div class="card-body">
              <a className="visual-dir">
                <FontAwesomeIcon icon={faCheck} />
              </a>
              <h5 class="card-title">Flexibility is key</h5>
              <p class="card-text">
                Reques, manage, and track your leave request on-the-go
              </p>
            </div>
          </div>
          <div class="card pro-card langding-card col-sm-8 col-md-8 col-lg-3 ">
            <div class="card-body">
              <a className="visual-dir">
                <FontAwesomeIcon icon={faReceipt} />
              </a>
              <h5 class="card-title">Make meaningful connections</h5>
              <p class="card-text">
                i. Setup and manage employee compensation, allowances,
                incentives and other total rewards components
              </p>
            </div>
          </div>
          <div class="card pro-card langding-card col-sm-8 col-md-8 col-lg-3 ">
            <div class="card-body">
              <a className="visual-dir">
                <FontAwesomeIcon icon={faCommentAlt} />
              </a>
              <h5 class="card-title">Celebrate your birthday</h5>
              <p class="card-text">
                Manage, preview, process and post monthly payroll processing
              </p>
            </div>
          </div>
          </div>      
            <div className="hiring-team" >
              <h1 style={{fontSize:"3rem", fontWeight:"700", color:"black"}} className="col-10 mx-auto">MEET OUT HIRING TEAM</h1>
            </div>
            <div className="col-11 mx-auto" style={{textAlign:"center"}}>
            <Card style={{ width: '18rem',display:"inline-block",padding:"30px", border:"none" }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/img1.jpg"} />
  <Card.Body>
  <Card.Title>Camilla Linko</Card.Title>
  <Card.Text>
  
Talent Acquisition Specialist

camilla@brella.io
  </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', display:"inline-block",padding:"30px",border:"none" }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/img1.jpg"} />
  <Card.Body>
  <Card.Title>Camilla Linko</Card.Title>
  <Card.Text>
  
Talent Acquisition Specialist

camilla@brella.io
  </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', display:"inline-block",padding:"30px" ,border:"none"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/img1.jpg"} />
  <Card.Body>
  <Card.Title>Camilla Linko</Card.Title>
  <Card.Text>
  
Talent Acquisition Specialist

camilla@brella.io
  </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', display:"inline-block",padding:"30px",border:"none" }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/img1.jpg"} />
  <Card.Body>
  <Card.Title>Camilla Linko</Card.Title>
  <Card.Text>
  
Talent Acquisition Specialist

camilla@brella.io
  </Card.Text>
  </Card.Body>
</Card>
            </div>
            <div className="partoutstory">
              <h1 style={{fontSize:"4rem",fontWeight:"730", fontFamily:"Gilroy,sans-serif"}} className="col-sm-12 col-md-12 col-lg-4 mx-auto">Be Part of Our Story</h1>

              <p style={{fontSize:"1.6rem", fontStyle:"normal",paddingTop:"3rem" }} className="col-6 mx-auto">We'd love to have you on our team. Take a look at our open positions and apply today.</p>
            <Link to='position' smooth={true} duration={100} > <button className="left-buttton ol-8 mx-auto" style={{fontSize:"1.3rem",fontWeight:"750",marginTop:"3rem", marginBottom:"4rem"}}>
                     Our Open Position
                  </button>
                  </Link>
            </div>
            <hr style={{width:"100%"}}  />
        </div>
    )
}

export default Seventhcontent;
