import React from "react";
import "../Styles/Basket.css";

function Basket(props) {
  return (
    <div className="basket-container">
      Montreal Leather Sofa {props.sofasInBasket}
    </div>
  );
}

export { Basket };
