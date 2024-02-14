import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CoreUI from "./cardUI";
import Banner from "../images/premium2.png";
function Core() {
  
  const cardData = [
    { text: "Premium Training", color: "#fac78c",logo:Banner },
    { text: "100% Placement Support", color: "#9dd1fa",logo:Banner },
    { text: "IT Developer as Trainer", color: "#e3a8e9",logo:Banner },
    { text: "Trending Project & Assignment", color: "#9ce8b5",logo:Banner },
  ];

  return (
    <div className="container-fluid py-4 my-4">
      <div className="row text-center">
        <h3
          className="mb-2 pb-3"
          style={{ fontFamily: "serif", color: "white" }}
        >
          
        </h3>
      </div>
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <CoreUI text={card.text} color={card.color} logo={card.logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Core;
