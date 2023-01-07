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
        {/* <ul> */}
        {/* <div className="dropdown">
            <button className="dropbtn">
              <li>
                <p>
                  Menu Item
                  <i>
                    <FaChevronDown />
                  </i>
                </p>
              </li>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <p>Item 1</p>
                  </li>
                  <li>
                    <p>Item 2</p>
                  </li>
                  <li>
                    <p>Item 3</p>
                  </li>
                </ul>
              </div>
            </button>
          </div> */}
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

        {/* <li>
            <p>
              Menu Item
              <i>
                <FaChevronDown />
              </i>
            </p>
          </li>
          <li>
            <p>
              Menu Item
              <i>
                <FaChevronDown />
              </i>
            </p>
          </li>
          <li>
            <p>Menu Item</p>
          </li>
        </ul> */}
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
