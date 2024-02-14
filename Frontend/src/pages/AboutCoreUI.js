import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../about/about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';

const AboutCoreUI = (props) => {
  return (
    <div style={{background:'#66023b'}} className="container p-4">
        <div className="row">
          <div className="col text-start justify-content-center mt-2 pt-2 d-flex" style={{marginRight: "20px",marginLeft: "20px"}}>
          <FontAwesomeIcon icon={faSmileBeam} spin  style={{color: "#f79c8d", width: "25px", height: "25px", alignItems: "center"}}/>&nbsp;&nbsp;
          <h5 className="text-center" style={{color: "white",fontFamily: "sans-serif",fontWeight:'700',textAlign:'justify'}}>{props.title}</h5>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col text-dark text-start">
            <h6 style={{color: "white",fontFamily: "sans-serif",fontSize: "15px",textAlign: "justify"}}>{props.text}</h6>
          </div>
        </div>
      </div>
  );
}

export default AboutCoreUI;


