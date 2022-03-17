import React from "react";
import "./aboutpage-styles.css";
import Cards from "./Cards";

const AboutPage = () => {
  return (
    <div>
      <div className="about__title">
        <div className="about__title2">ABOUT</div>
      </div>
      <div className="about__cards">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default AboutPage;
