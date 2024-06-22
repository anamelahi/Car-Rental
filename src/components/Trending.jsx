import React from "react";
import Brand from "./Brand";
import Steps from "./Steps";
import location from "../location.png";
import calender from "../calendar.png";
import booking from "../car.png";
import Services from "./Services";
// import line1 from "../Line 1.png"
// import line2 from "../Line 2.png"

function Trending() {
  return (
    <div className="trending">
      <h1 className="trendtitle">SEARCH BY CAR MODELS</h1>
      <div className="brand-div">
        <Brand name="FERRARI" />
        <Brand name="BMW" />
        <Brand name="TOYOTA" />
        <Brand name="HONDA" />
        <Brand name="TESLA" />
        <Brand name="PORSCHE" />
      </div>
      <div className="services">
        <h3>HOW IT WORKS</h3>
        <h2>CarLo following 3 working Steps</h2>
        <div className="trendstep">
          <Steps imgsrc={location} title="Choose a location" />
          <hr />
          <Steps className="pick-date" imgsrc={calender} title="Pick-up date" />
          <hr />
          <Steps imgsrc={booking} title="Book your car" />
        </div>
        <Services />
      </div>
    </div>
  );
}

export default Trending;
