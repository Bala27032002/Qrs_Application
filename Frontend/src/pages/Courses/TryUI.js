import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "../../images/atombackground.jpg";


const TryUI = (props) => {
  return (
    <div
    className="container-fluid w-100 mb-5"
    style={{
      backgroundImage: `url(${Banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "180px",
      textAlign: "center",
      opacity: 0.7
    }}
  >
    <h1 style={{color: "white",fontFamily: "serif",paddingTop: "70px"}}><b>{props.text}</b></h1>
  </div>

  );
}

export default TryUI;
