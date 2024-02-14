import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import { styled } from "@mui/system";

const AnimatedCard = styled(Card)`
  width: 100%;
  max-width: 300px;
  height: 5rem;
  background-color: ${(props) => props.color};
  // box-shadow: 0px 0px 8px 4px ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  // animation: moveUpDown 2s infinite ease-in-out;
  // border: 2px solid black;
  border-radius: 20px;
  // position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // border: 4px dashed black;
    border-radius: 20px;
  }

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const CoreUI = (props) => {
  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   setAnimate(true);
  // }, []);

  return (
    <Box
      sx={{
        width: "19rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2rem",
        position: "relative",
        bottom: "2rem",
        // right:'2rem'
      }}
    >
      <AnimatedCard color={props.color} >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={props.logo}
           
            alt="Logo"
            sx={{
              backgroundColor: "orange",
              width: "3.5rem",
              height: "3.5rem",
              marginRight: "0.5rem",
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", color: "#66023b",fontWeight:'600 ' ,fontFamily:'serif'}}
          >
            {props.text}
          </Typography>
        </Box>
      </AnimatedCard>
    </Box>
  );
};

export default CoreUI;
