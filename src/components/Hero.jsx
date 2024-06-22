import React from "react";
import car from "../hero-car.png"

function Hero(){
    return(
        <div className="hero">
            <div className="content-hero">
            <h1>FIND YOUR NEXT<br /> RENTAL CAR</h1>
            <button className="rent">Services</button>
            </div>
            <img className="hero-car" src={car} alt="" />
            
        </div>
    )
}

export default Hero;