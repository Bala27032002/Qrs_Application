import React from "react";
import Modal from "@mui/material/Modal";
import HomeEnquiry from "../../pages/HomeEnquiry";

// import MainRegister from "../../pages/MainRegister";
// import Applynow from "../../pages/Applynow";

 // Import your MainRegister component here

const HomeEnquiryModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", overflowY: "auto", maxHeight: "100vh" }}>
        <HomeEnquiry /> {/* Render the MainRegister component */}
      </div>
    </Modal>
  );
};

export default HomeEnquiryModal;
