import React from "react";
import "../Styles/NavBar.css";
import { FaUserAlt, FaChevronDown } from "react-icons/fa";
import { BsCart3, BsChevronDown, BsPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";

function NavBar() {
  return (
    <div className="navContainer">
      {/* Left side of NavBar */}
      <div className="leftSide"> Q Commerce</div>

      <div className="centre">
        <div class="dropdown">
          <button class="dropbtn">
            Menu Item <FaChevronDown />
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">
            Menu Item <FaChevronDown />
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">
            Menu Item <FaChevronDown />
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

        <i className="icons cart">
          <HiShoppingCart />
        </i>
      </div>
    </div>
  );
}

export { NavBar };
