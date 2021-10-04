import React from 'react'
import '../../styles/components/careers/fourthcontent.css'

const Fourthcontent=()=> {
    return (
        <div>
            {/* <div className="fourt-container">
                <div className="leftSide-img-container">
                <img
                src={process.env.PUBLIC_URL + "/images/img1.jpg"}
                className="leftSide-img"
              />
                   
               
                </div>

                <div className="rigthSide-para">
                    <h1>HEllo</h1>

                </div>


                


            </div> */}
            <div className="row-fourth">
               <div className="leftSide  col-sm-10 col-md-4 col-lg-6">
               <img
                src={process.env.PUBLIC_URL + "/images/img1.jpg"}
                className="leftSide-img col-12"
                
              />
                   
    
    
               </div>
               <div className="rightSide  col-sm-10 col-md-4 col-lg-6">  
                   <p className="rightSide-para col-10 mx-auto">
                   Since my first day at the company, I've been surrounded by support, 
                   endless possibilities and intelligent minds in the Brella family. 
                   Working at Brella 
                   has not only taught me the ABC of startups but given me important career skills for the future!
                   </p>
                   <p className="para-rightSide col-12" style={{paddingTop:"3.1rem"}}>Jenni Mämmi
                   
                   <br />
                  <span className="support-lead"> Technical Support Lead</span>
                   </p>
               </div>
               </div>

               </div>
                   

           
            
    )
}

export default Fourthcontent;
