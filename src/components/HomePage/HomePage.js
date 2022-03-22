import React from "react";
import "./homepage-styles.css";

const HomePage = () => {
  return (
    <div id="home" className="sec__main">
      <img
        className="sec__image"
        src="https://images.unsplash.com/photo-1630338606772-392095666116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"
        alt="coffee"
      />
      <div className="sec__description">
        <h1 className="sec__h1">
          <span className="sec__highlight">
            <strong>BLACK COFFEE </strong>
          </span>
          To an old man a cup of coffee is like the door post of an old house —
          it sustains and strengthens him.
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
