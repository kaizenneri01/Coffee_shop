import React from "react";
import "./navigationbar-styles.css";
import Logo from "./coffee.png";

const NavigationBar = () => {
  return (
    <div className="nav__navbar">
      <img className="nav__logo" src={Logo} alt="coffee" />
      <ul className="nav__list">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PRODUCT</li>
      </ul>
    </div>
  );
};

export default NavigationBar;
