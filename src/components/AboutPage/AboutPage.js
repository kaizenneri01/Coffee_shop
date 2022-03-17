import React, { useState } from "react";
import "./aboutpage-styles.css";
import Cards from "../Cards/Cards";

const AboutPage = () => {
  const [info, setInfo] = useState([
    {
      icon: "https://cdn-icons-png.flaticon.com/512/92/92135.png",
      description:
        "coffee, beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plants of African origin.",
    },
    {
      icon: "https://cdn-icons.flaticon.com/png/512/2735/premium/2735138.png?token=exp=1647529821~hmac=5eb96eb112dec15bbf8b3841d4a92c60",
      description:
        "Coffee is one of the three most popular beverages in the world (alongside water and tea) and one of the most profitable international commodities.",
    },
    {
      icon: "https://cdn-icons.flaticon.com/png/512/3188/premium/3188448.png?token=exp=1647529838~hmac=2856638b083aea0620e0488467f1cbd1",
      description:
        "Though coffee is the basis for an endless array of beverages, its popularity is mainly attributed to its invigorating effect, which is produced by caffeine, an alkaloid present in coffee.",
    },
  ]);

  return (
    <div id="about">
      <div className="about__title">
        <div className="about__title2">ABOUT</div>
      </div>
      <div className="about__cards">
        {info.map((information, indx) => (
          <Cards key={indx} item={information} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
