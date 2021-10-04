import React from 'react'
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import '../styles/components/blogsmain.css'
import { BsArrowRight } from "react-icons/bs";
import Header from '../components/Header'
import Footer from '../components/Footer'

import { FaSearch } from 'react-icons/fa'
import { borderBottom, fontFamily, fontWeight } from '@mui/system';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'react-bootstrap';
  
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
const Scard = [ {  imgUrl: process.env.PUBLIC_URL + "/images/crd1.jpg",tittle: 'is hybrid event right for your organization?',
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},{ imgUrl: process.env.PUBLIC_URL + "/images/crd2.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/crd3.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},{ imgUrl: process.env.PUBLIC_URL + "/images/crd4.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},{ imgUrl: process.env.PUBLIC_URL + "/images/crd5.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/crd6.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
{  imgUrl: process.env.PUBLIC_URL + "/images/crd7.jpg",tittle: 'is hybrid event right for your organization?',
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},{ imgUrl: process.env.PUBLIC_URL + "/images/img1.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/img1.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},{ imgUrl: process.env.PUBLIC_URL + "/images/img1.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},{ imgUrl: process.env.PUBLIC_URL + "/images/img1.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/img1.jpg",tittle: 'is hybrid event right for your organization?', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
]

const Blogsmain=()=> {

    const [department, setDepartment] = React.useState(dept);
  const [location, setLocation] = React.useState('Search');
  const[show, setShow] = React.useState(false);
  const handleChange = (event) => {
    setDepartment(event.target.value);
  };
  const hanleChangelocation = (e) => {
    setLocation(e.target.value);
  };

  const redrCard = (val, index) =>{
      return(
        
    
       <Card style={{ width: '24rem',display:"inline-block",margin:"0.56rem", }} key={index} className="blog-crd-main col-sm-12 col-md-6 col-lg-6" >
<Card.Img variant="top" src={val.imgUrl} style={{height:"15vw", borderRadius:"2px",objectFit:'cover'}} />
<Card.Body className="card-body-blg">
<Card.Title className="crd-tiitle">{val.tittle}</Card.Title>
<Card.Text className="crd-text">
 {val.para}
</Card.Text>
<Button variant="transparent" style={{float:"left",fontSize:"1rem",fontFamily: "IBM Plex Sans,sans-serif" }} className="crd-blg-btn">Blogs</Button>
</Card.Body>
</Card>
      

      );
  }
    return (
      <>
      <Header/>
        <div style={{
            marginBottom:"20rem"
        }}>
            <div className="first-main-container">
            <h1 className="resource-headg">Resources</h1>

            <Box sx={{ '& button': { m: 1 } }} className="button-box">
      <div className="col-8 mx-auto">
        <button  color="grey" size="large" className="btn-blog-first btn btn-outline-secondary">Virtual events</button>
        <button  size="large" className="btn-blog-first btn btn-outline-secondary">Hybrid events</button>
        <button  size="large" className="btn-blog-first btn btn-outline-secondary">In-person events</button>
        <button  size="large" className="btn-blog-first btn btn-outline-secondary">Event matchmaking</button>
        <button  size="large" className="btn-blog-first btn btn-outline-secondary">Event sponsorship</button>
        <button  size="large" className="btn-blog-first btn btn-outline-secondary">Event engagement</button>
        <button  size="large" className="btn-blog-first btn btn-outline-secondary">Brella platform</button>
      </div>
      </Box>
      <div className="textblog-frst">
      <TextField
          id="standard-select-currency"
          select
          
          value={department}
          onChange={handleChange}
          variant="standard"
          style={{
            width: "20%",
            justifyItems: "center",
            paddingLeft: "4rem",
          }}
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-basic primary"
          placeholder="Search"
          value={location}
          onChange={hanleChangelocation}
          variant="standard"
          icon= {FaSearch} 
          style={{
            width: "20%",
            justifyItems: "center",
            paddingLeft: "2rem",
            fontSize:"4rem",
            fontWeight:"900",
            borderBottom:"green"
          }}
       >
           
            
          
            <FaSearch />
            
          
        </TextField>
          
        
      </div>
            </div>
            <div className="blogs-card-div col-12 mx-auto ">
             
                 
                     <div className="row1 mx-auto" style={{display:"inline-block", textAlign:"center",}}   >
                         {  Scard.map(redrCard)
                 }
                  </div>

                  {show? (<div className="row1 mx-auto" style={{display:"inline-block", textAlign:"center",}}   >
                         {  Scard.map(redrCard)
                 }
                  </div>) : null}


    </div>
    
    <hr className="hr-lines mx-auto" />
      <div className="after-line-btn">
      <button  size="large" className="btn-blog-firsts btn "
      onClick= {()=>{ setShow(!show)}}
      
      >LOAD MORE </button><span><BsArrowRight size={40} style={{color:"#00af66"}} /></span>
      </div>
      
        </div>
        <Footer/>
        </>
    )
}

export default Blogsmain;
