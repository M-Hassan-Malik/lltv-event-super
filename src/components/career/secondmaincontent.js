import React from 'react'
import '../../styles/components/careers/secondcontent.css';

const Secondmaincontent=()=> {
    return (
        <div >
            <hr className="hr-line mx-auto "/>
            <div className="SecondContent-container">
            <p className="para-1"> 
            <p className="para-11 col-10 mx-auto">
            I admire how everyone in Brella is proud of their role in shaping the company & its culture. Working at Brella seems like you are part 
            of a big family who takes care of each other and are driven by passion, curiosity, empathy and modesty.
                </p>
            <img
                src={process.env.PUBLIC_URL + "/images/img3.jpg"}
                className="img-center"
              />
                   
                   
            <p className="main-para">
            
                Owais Ghaffar
                <br />
                <p style={{fontWeight:"400"}} > JUNIOR DEVELOPER </p>
                </p>
            </p>
            </div>
            <hr className="hr-line mx-auto"/>
            <div className="container3">
                  <p className="para-4">DURING THE PAST 5 YEARS WE'VE HELPED...</p>
            </div>
            <hr className="hr-line mx-auto"/>
            <div className="container-2">
            <h1 className="heaidingflow">Create new jobs
Organizations grow
Get people hired
</h1> 
<h2 className="heaidingflow2">I come from the left side</h2>
            </div>
        </div>
    )
}

export default Secondmaincontent;
