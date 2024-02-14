import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../components/Layout/unnamed.png";
import Banner from "../images/admin2.jpg";


const AdminTryUI = (props) => {
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
     {/* <Toolbar disableGutters> */}
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography
              
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={50} width="180" />
            </Typography> */}
    <h1 style={{color: "white",fontFamily: "serif",paddingTop: "70px"}}><b>{props.text}</b></h1>

  </div>

  );
}

export default AdminTryUI;
