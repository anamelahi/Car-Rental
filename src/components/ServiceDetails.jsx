import React from "react";

function ServiceDetails(props){
    return(
        <div className="service-details">
            <div className="icon-div">
                <img style={{marginTop:"2px", height:"4  0px"}} src={props.iconsrc} alt="" />
            </div>
            <div>
                <h4 style={{marginLeft:"20px"}}>{props.title}</h4>
                <p style={{marginLeft:"20px"}}>{props.deets}</p>
            </div>
        </div>
    )
}

export default ServiceDetails;