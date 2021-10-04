import React from 'react';
import {Link } from 'react-scroll';
import '../../styles/components/careers/maincontent.css'

import Seventhcontent from './lastcontent';
import Thirdcontent from './thirdcontent';
import Secondmaincontent from './secondmaincontent';
import Fourthcontent from './fourthcontent';
import Openposition from './openposition';
import SixthComponent from './secondlastcontent';
import Header from '../Header';
import Footer from '../Footer';


const Maincontent =()=> {
    
    return (
        <div className='main-content-row'>
            <Header/>
           <div className="row">
               <div className="left-side col-sm-12 col-md-6 col-lg-6">
                   <h1 className="heaidngone col-sm-6 col-md-8 col-lg-12 mx-auto">
                   Why become a Brellaneer?

                   </h1>
                   <p className="left-side-paragraph mx-auto">
                   It’s all about the bigger purpose.
                   
We all have different roles and responsibilities, but sometimes it is good to <br/>stop for a moment to remind ourselves of the bigger purpose of all this.


At Brella, we are on a mission to help people find life-altering connections.
</p>
    
    <div className="button-container col-6 mx-auto">
                  
                 <Link to="position" smooth={true} duration={100}>
                  <button className="left-buttton">
                     Our Open Position
                  </button>
                  </Link>
    </div>
               </div>
               <div className="right-side col-sm-12 col-md-6 col-lg-6">
                   
                   <img
                src={process.env.PUBLIC_URL + "/images/img2.jpg"}
                className="righth-side-img"
              />
                   

               </div>
               
           </div>

            <Secondmaincontent />
            <Thirdcontent />
            <Fourthcontent />
            <Openposition />
            <SixthComponent />
            <Seventhcontent />
        </div>
    )
}

export default Maincontent;
