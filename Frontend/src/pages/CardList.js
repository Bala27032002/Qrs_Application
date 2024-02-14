import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const AnimatedCard = styled(Card)`
  width: 100%;
  max-width: 300px;
  height: 5rem;
  background-color: ${(props) => props.color};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  animation: moveUpDown 10s infinite ease-in-out;

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

const CardList = () => {
  const cardData = [
    { text: "Premium Training", color: "#fac78c" },
    { text: "100% Placement Support", color: "#9dd1fa" },
    { text: "IT Developer as Trainer", color: "#e3a8e9" },
    { text: "Trending Project & Assignment", color: "#9ce8b5" },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Box
      sx={{
        position:'relative',
        top:'2rem',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
        padding: "1rem",
        maxWidth: "100%",
      }}
    >
      {cardData.map((card, index) => (
        <Box
          key={index}
          sx={{
            animation: animate
              ? `moveUpDown ${(index + 1) * 2}s infinite ease-in-out`
              : "none",
          }}
        >
          <AnimatedCard color={card.color}>
            <CardContent>
              <Typography variant="h6" component="div">
                {card.text}
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Box>
      ))}
    </Box>
  );
};

export default CardList;
