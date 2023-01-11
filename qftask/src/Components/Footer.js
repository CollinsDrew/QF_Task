import React from "react";
import "../Styles/Footer.css";

import QF from "../Images/QF.png";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="foot-head">
        <h2 className="signUp-title">Get 10% off. Sign up today.</h2>
        <form className="signUp" action="/action_page.php">
          <label for="email"> </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email Address"
          />
        </form>
      </div>

      <div className="bottom-section">
        <div className="logo-container">
          <img className="logo" src={QF} />
        </div>
        <div className="lists">
          <div className="qf-commerce">
            <h3>QF Commerce</h3>
            <ul>
              <li>New Releases</li>
              <br></br>
              <li>Shop All</li>
              <br></br>
              <li>Shop By Filter</li>
            </ul>
          </div>

          <div className="information">
            <h3>Information</h3>
            <ul>
              <li>Contact Us</li>
              <br></br>
              <li>About Us</li>
              <br></br>
              <li>Careers</li>
            </ul>
          </div>

          <div className="important">
            <h3>Important</h3>
            <ul>
              <li>Delivery and Returns</li>
              <br></br>
              <li>Cookie Policy</li>
              <br></br>
              <li>Privacy Policy</li>
              <br></br>
              <li>Terms And Conditions</li>
              <br></br>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="touch">
            <h3>Get In Touch</h3>
            <ul>
              <li>Address Line</li>
              <br></br>
              <li>Address Line</li>
              <br></br>
              <li>Address Line</li>
              <br></br>
              <li>Address Line</li>
            </ul>
            <br></br>
            <p>01234 567890</p>
            <br></br>
            <p>hello@qfcommerce.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
