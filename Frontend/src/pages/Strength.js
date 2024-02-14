import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CoreUI from "./cardUI";
import { Grid, Typography } from "@mui/material";

function Strength() {
  const cardData = [
    { text: "5,000 Trained Professionals", color: "#fac78c" },
    { text: "20+ Tied-Up IT Companies", color: "#9dd1fa" },
    { text: "10+ IT Courses", color: "#e3a8e9" },
    
  ];

  return (
    <>
    <Grid container className="home" style={{ height: "100%", }}>
    <Typography variant="h4" align="center" gutterBottom color={'#66023b'} sx={{fontWeight:'600',fontFamily:'serif'}}>
            Our Strength
          </Typography>
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
            <CoreUI text={card.text} color={card.color} />
          </div>
        ))}
      </div>
    </div>
    </Grid>
    </>
  );
}

export default Strength;
