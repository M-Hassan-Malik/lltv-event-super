import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import '../styles/components/features.css';
import Header from '../components/Header'
import Footer from '../components/Footer' 


const FeatureScndlistarray =['Livestream hosting','Livestream hosting','Livestream hosting','Livestream hosting'];
const FeatureRightlistarray =['hello world','hello world paksitan','hello worlddkdhwd bshdy jdjdowojhshuhduwnknsd','hello world sss','hello yetah world',]

const Feature=()=> {


    const featureScndList=(val, index)=>{
        return(
            <>
            
                    
                        <li className="pltform-list col-7 mx-auto">{val}</li>
                        

                    
            
            </>
            

        );

    }
    

    return (
        <div>
            <Header/>
            <div className="our-features-main">
                <h1 className="our-features-hdng">Our features</h1>
                <p className="our-featr-para">Contact our team for a full demo of all our features.

                    </p>
                    <button className="feature-cntct-btn col-sm-6 col-md-6 col-lg-2    mx-auto" style={{fontSize:"1.3rem",fontWeight:"750",marginTop:"3rem",}}>
                     Contact sales<span><BsArrowRight size={40} style={{color:"white",paddingLeft :".923rem"}} /></span>
                  </button>

            </div>
            <div className="platform-div">
                <h1 className="pltfrm-heading">Platform</h1>
                <div className="left-list col=sm-10 col-md-8  col-lg-6 mx-auto">
                <h6 className="ul-heaindg-ftr col-6 mx-auto">Virtual, hybrid & in-person events</h6>
                    <ul className="ul-pltfrm-list">
                    
                        {FeatureRightlistarray.map(featureScndList)}

                    </ul>
                    <br />
                    <h4 className="ul-heaindg-ftr col-6 mx-auto">Available on all platforms</h4>
                    <ul className="ul-pltfrm-list col-11 mx-auto ">
                    
                    {FeatureRightlistarray.map(featureScndList)}

                    </ul>
                    <br />
                    <h4 className="ul-heaindg-ftr col-6 mx-auto">Networking and matchmaking</h4>
                    <ul className="ul-pltfrm-list  ">
                    
                    {FeatureRightlistarray.map(featureScndList)}

                    </ul>
                </div>
                <div className="right-list col=sm-10 col-md-8  col-lg-6 mx-auto">
                <h6 className="ul-heaindg-ftrs col-7 mx-auto">Event Schedule</h6>
                    <ul className="ul-pltfrm-list ">
                    
                    {FeatureRightlistarray.map(featureScndList)}

                    </ul>
                    <br />
                    <h6 className="ul-heaindg-ftrs col-7 mx-auto">Sponsors, partners & exhibitors</h6>
                    <ul className="ul-pltfrm-list  ">
                    
                    {FeatureRightlistarray.map(featureScndList)}

                    </ul>
                    <br />
                    <ul className="ul-pltfrm-list  ">
                    <h6 className="ul-heaindg-ftrs col-7 mx-auto">Event management</h6>
                    {FeatureRightlistarray.map(featureScndList)}
                    </ul>

                </div>

            </div>
            <br />
            <br />
            <br />
            <div className="data-analytics-div">
                <h1 className="pltfrm-heading-data">Data Analytics</h1>
                <div className="left-list col-6 mx-auto">
                    <br/>
                <h6 className="ul-heaindg-ftr-netwrk col-7 mx-auto">Networking & Event Engagement</h6>
                <br />
                    <ul className="ul-pltfrm-list col-8 mx-auto">
                    {
                        FeatureScndlistarray.map(featureScndList)
                    }
                </ul>
                </div>
                <div className="right-list col-6 mx-auto">
                
                <ul className="ul-pltfrm-list col-8 mx-auto ">
                    <h6 className="ul-heaindg-ftrs-beha col-7 mx-auto">Event Schedule</h6>
                      
                        {
                            FeatureRightlistarray.map(featureScndList)
                        }

                    </ul>

                </div>
             
            </div>

            
            <br />
            <br />
            <br />
            <br />
            <br />

            <div  className="bring-div">
            <div className="img-div-right">
                      <img src={process.env.PUBLIC_URL + "/images/feature1.jpg"} className="img-blog"  />
                      <br />
                      <img src={process.env.PUBLIC_URL + "/images/feature2.jpg"} className="img-blog" style={{marginLeft:"8rem", marginTop:"-3rem"}}/>
                  </div>
                  <div className="img-div-left">
                      <img src={process.env.PUBLIC_URL + "/images/feature2.jpg"} className="img-blog1"  />
                      <br />
                      <img src={process.env.PUBLIC_URL + "/images/feature1.jpg"} className="img-blog1" style={{marginRight:"5rem", marginTop:"-3rem"}}/>
                  </div>
                <h6 className="bring-heading  col-sm-12 col-md-8 col-lg-5 mx-auto">Bring your attendees together</h6>
                
                <p className="our-featr-para col-sm-8 col-md-8 col-lg-6 mx-auto">Deliver the same engaging experience and networking opportunities whether your audience attends virtually or in-person. Contact our team to set up a demo of our platform.

                    </p>
                    <button className="feature-cntct-btn col-sm-6 col-md-6 col-lg-2    mx-auto" style={{fontSize:"1.3rem",fontWeight:"750",marginTop:"3rem",marginLeft:"-30rem"}}>
                     Contact sales<span><BsArrowRight size={40} style={{color:"white",paddingLeft :".323rem"}} /></span>
                  </button>
                 

            </div>


                        <Footer/>
        </div>
    )
}

export default Feature;
