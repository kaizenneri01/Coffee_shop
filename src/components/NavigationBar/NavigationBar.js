import React from "react";
import "./navigationbar-styles.css";
import Logo from "./coffee.png";

const NavigationBar = () => {
  return (
    <div className="nav__navbar">
      <img className="nav__logo" src={Logo} alt="coffee" />
      <ul className="nav__list">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#">PRODUCT</a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
