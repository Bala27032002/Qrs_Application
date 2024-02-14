import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../images/coursebanner2.webp";

const CourseTryui = ({ updateSelectedCategory, setUpdateUI, text }) => {
  const handleUpdateTasks = () => {
    // Trigger an update of tasks in Reduxcourse component
    setUpdateUI(prevValue => !prevValue);
  };

  return (
    <div
      className="container-fluid w-100 mb-5"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        textAlign: "center",
        opacity: 0.7
      }}
    >
      <h1 style={{ color: "white", fontFamily: "serif", paddingTop: "70px" }}>
        <b>{text}</b>
      </h1>
    </div>
  );
}

export default CourseTryui;
