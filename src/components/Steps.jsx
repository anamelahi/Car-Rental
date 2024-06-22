import React from "react";

function Steps(props) {
  return (
    <div className="headsteps">
      <div className="steps">
        <img className="stepofbooking" src={props.imgsrc} alt="" />
      </div>
      <h4>{props.title}</h4>
    </div>
  );
}

export default Steps;
