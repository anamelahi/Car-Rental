import React from "react";
import car from "../rangecar.png";
import ServiceDetails from "./ServiceDetails";
import deal from "../label.png";
import wallet from "../wallet.png";
import support from "../customer-service.png";

function Services() {
  return (
    <div className="service">
      <div className="service-div">
        <img className="service-car" src={car} alt="" />
        <div className="service-heading-div">
          <h4 className="best-service">BEST SERVICES</h4>
          <h2>Feel the best experience with our rental deals</h2>
          <hr className="service-rule" />
          <div className="service-content">
        <ServiceDetails
          iconsrc={deal}
          title="Deals for every budget"
          deets="Incredible price according to your budget worldwide"
        />
        <ServiceDetails
          iconsrc={wallet}
          title="Best price guaranteed"
          deets="Found a lower price? We'll refund you 100% of the difference"
        />
        <ServiceDetails
          iconsrc={support}
          title="Support 24/7"
          deets="Got a problem? We are here to help"
        />
      </div>
        </div>
      </div>
     
    </div>
  );
}

export default Services;
