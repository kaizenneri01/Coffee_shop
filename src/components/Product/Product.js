import React from "react";
import "./product-styles.css";

const Product = () => {
  return (
    <div id="product">
      <div className="product__container">
        <div className="product__title">OUR PRODUCT</div>
      </div>
      <div className="product__page">
        <img
          className="product__picture"
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="coffeee"
        />
        <div className="product__details">
          <span className="product__highlight">COFFEE </span>
          Wild coffee plants, probably from Kefa (Kaffa), Ethiopia, were taken
          to southern Arabia and placed under cultivation in the 15th century.
          One of many legends about the discovery of coffee is that of Kaldi, an
          Arab goatherd who was puzzled by the strange antics of his flock.
          About 850 CE Kaldi supposedly sampled the berries of the evergreen
          bush on which the goats were feeding and, on experiencing a sense of
          exhilaration, proclaimed his discovery to the world. Whatever the
          actual origin of coffee, its stimulating effect undoubtedly made it
          popular. Ironically, though Islamic authorities pronounced the drink
          intoxicating and therefore prohibited by the Qurʾān, many Muslims were
          attracted to the beverage as a substitute for alcohol
        </div>
      </div>
    </div>
  );
};

export default Product;
