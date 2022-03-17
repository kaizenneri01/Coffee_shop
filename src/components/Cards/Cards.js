import React from "react";
import "./cards-styles.css";

const Cards = ({ item }) => {
  return (
    <div className="cards__cards">
      <div className="cards__cardlist">
        <img className="cards__icon" src={item.icon} alt="coffee" />
        <div className="list__description">{item.description}</div>
      </div>
    </div>
  );
};

export default Cards;
