import React, { useState } from "react";
import "../Styles/NavBar.css";
import { FaUserAlt, FaChevronDown } from "react-icons/fa";
import { BsCart3, BsChevronDown, BsPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { Basket } from "./Basket";

function NavBar(props) {
  const [visible, setVisible] = useState(false);

  const basket = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <div className="navContainer">
      {/* Left side of NavBar */}
      <div className="leftSide"> Q Commerce</div>

      <div className="centre">
        <div class="dropdown">
          <button class="dropbtn">
            Menu Item{" "}
            <i>
              <FaChevronDown />
            </i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">
            Menu Item{" "}
            <i>
              <FaChevronDown />
            </i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">
            Menu Item{" "}
            <i>
              <FaChevronDown />
            </i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">Menu Item</button>
        </div>
      </div>

      <div className="rightSide">
        <i className="icons">
          <BsPersonFill />
        </i>

        <button className="basketBtn" onClick={basket}>
          <i className="icons cart">
            <HiShoppingCart />
            {visible && <Basket sofasInBasket={props.sofasInBasket} />}
          </i>
        </button>
      </div>
    </div>
  );
}

export { NavBar };
