import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import CoreUI from "./coreUI";
import AboutCoreUI from "./AboutCoreUI";

function AboutCore() {
  const [cards, setCards] = useState([
    { text: "Achieving SmartCliff’s mission requires creativity, innovative ideas, and new ways of thinking. We’re willing to try hard things, take big bets, and work on problems that haven’t been solved before.", title: "Be Bold, Be Innovative" },
    { text: "At all times, we remain focused on the impact we have for students, and the families and educators who support them. What makes SmartCliff unique is our relentless focus on career mobility and transforming their lives.", title: "Focus on Individual impact" },
    { text: "We believe that the best way to have an impact in the world and to build a great company is through continuous progress, paired with iteration, experimentation and learning. We strive to get better every day and we take a growth mindset.", title: "Progress Over Perfection" },
    { text: "We take a human-first approach to building our organization. We care deeply about our teammates, our clients, the students, educators and families we serve.", title: "Care About People" }
  ]);

  return (
    <div style={{background:'#66023b',position:'relative',bottom:'4rem'}}  className="container-fluid py-4 my-4">
      <div className="row text-center">
        <h3 className="mb-2 pb-3" style={{ fontFamily: "serif", color: "white" }}>
         <u> OUR CORE VALUES</u>
        </h3>
      </div>
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div className="col-6" key={index} style={{width: "500px"}}>
            <AboutCoreUI text={card.text} title={card.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCore;

