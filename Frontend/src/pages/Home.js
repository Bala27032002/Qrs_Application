import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { Button, Grid, Typography } from "@mui/material";
import Banner from "../images/Group-4477.webp";
import "../styles/HomeStyles.css";
import Core from "./card";
import SignupForm from "./SignupForm";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Gallery from "./Gallery";
import HomeEnquiryModal from "../components/Modal/HomeEnquiryModal";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const dynamicText = " IT Career Development with QR solutions ";
  const typingSpeed = 100;
  const imageMoveSpeed = 0.01;
  const [open, setOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    let timerId;

    const typeText = () => {
      currentText += dynamicText[currentIndex];
      setTypedText(currentText);
      currentIndex++;

      if (currentIndex === dynamicText.length) {
        clearTimeout(timerId);
      } else {
        timerId = setTimeout(typeText, typingSpeed);
      }
    };

    timerId = setTimeout(typeText, typingSpeed);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    let isMovingUp = true;
    let imagePosition = 0;
    let requestId;

    const moveImage = () => {
      const imageContainer = document.querySelector(".movingImageContainer");

      if (isMovingUp) {
        imagePosition -= imageMoveSpeed;
        if (imagePosition <= -1) {
          isMovingUp = false;
        }
      } else {
        imagePosition += imageMoveSpeed;
        if (imagePosition >= 0) {
          isMovingUp = true;
        }
      }

      imageContainer.style.transform = `translateY(${imagePosition}rem)`;

      requestId = requestAnimationFrame(moveImage);
    };

    moveImage();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  const features = [
    "World class training and 100% placement ensured with course completion certification by our Industry experienced professional trainers,Feel the live productive IT environment right at our No.1 Training & Placement Institute in Trichy.",
   
    // Add more feature descriptions as needed
  ];

  return (
    <Layout>
      <Grid container className="home" style={{ height: "100%" }}>
        <Grid item xs={12} sm={6} className="contentContainer">
          <img style={{ position: "absolute", marginTop: "1rem", marginRight: "70rem", width: "9rem", zIndex: "-1" }} src="https://smartcliff.in/assets/images/dotted-image1.png" alt="dotted line" />
          <div className="headerContainer">
            <Typography variant="h4" style={{ fontWeight: "700", color: "#66023b", textAlign: "justify", position: "relative", marginTop: "3rem", fontFamily: 'serif' }}>
              Get start your {typedText}
            </Typography>
            <br />
            <Typography variant="subtitle1" style={{ textAlign: "justify", fontWeight: "600" }}>
              {features.map((feature, index) => (
                <span key={index}>
                  {feature}
                  <br />
                </span>
              ))}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>

    <Button onClick={openModal} className="Enquirybutton" variant="contained" style={{ textDecoration: 'none', backgroundColor: "#66023b", fontSize: "15px", fontWeight: "bold", color: "#ffffff", fontFamily: 'serif',position:'relative',left:'1rem' }}>
    Enquiry Now
      <ArrowRightAltIcon />
    </Button>

  {/* <Button className="button" variant="outlined" style={{ fontSize: "15px", fontWeight: "bold", position: "relative", right: "13rem", background: '#f5d3e6', color: 'black', fontFamily: 'serif', borderBlockColor: 'black' }} onClick={openModal}>
    Enquiry Now
  </Button> */}
  <style>
  {`
    @media (max-width: 768px) {
      .button {
        position: relative;
        left: 0rem;
        display: none;
      }
      .image {
        width: 100%; /* Make the image width fill its container */
        display:none; /* Maintain the aspect ratio and adjust the height accordingly */
      }
    }
  `}
</style>

</div>


          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="movingImageContainer">
            <img style={{ position: "relative", marginTop: "5rem", width: "37rem", height: "28rem" }} src={Banner} alt="logo" className="image" />
          </div>
          {/* <img style={{ position: "absolute", marginTop: "-8rem", marginLeft: "32rem", width: "6rem", zIndex: '-1' }} src="https://smartcliff.in/assets/images/shape8.png" alt="shape" /> */}
        </Grid>
      </Grid>
      <HomeEnquiryModal  open={isModalOpen} handleClose={closeModal} />
      {/* <Modal open={isModalOpen} onClose={closeModal}>
        <EnquiryForm onCloseModal={closeModal} />
      </Modal> */}
      <Core />
      
      {/* <PlacementHireForm /> */}
      <SignupForm />  
      <Gallery />
    </Layout>
  );
};

export default Home;
