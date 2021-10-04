import React from 'react'
import '../../styles/components/careers/thirdcontent.css';


const Thirdcontent=()=> {
    return (
        <div>
            <div className="third-container-main">
               <div className="third-main col-sm-4 col-md-6 col-lg-6">
                   <h1 className="heaidngone1">
                   Meet the <br/>Brellaneers

                   </h1>
                   <div className="third-content-img">
                   <img
                src={process.env.PUBLIC_URL + "/images/img4.jpg"}
                className="main-third-img"
              />
                   
                   </div>
                   <div style={{marginTop:"4rem"}}>
                       <p className="light">
                       Brella is a workplace where you can be yourself, no matter who you are. Because when
                       <br />
                       we bring the best versions of ourselves, that’s how we all succeed.
                       </p>
                       <p className="light">
                       Our Brellaneers come from different backgrounds, bringing their own blend of wisdom,
                       <br />
                       domain expertise and diversity to everything they build.
                       
                       </p>
                   </div>
            
            </div>
            </div>
            
        </div>
    )
}

export default Thirdcontent;
