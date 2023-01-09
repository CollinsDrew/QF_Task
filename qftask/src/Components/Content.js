import React from "react";

import "react-slideshow-image/dist/styles.css";
import "../Styles/Content.css";
import { Slide } from "react-slideshow-image";

import { BsChevronRight } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";

import sofa1 from "../Images/MaskGroup3.png";
import sofa2 from "../Images/sofa2.webp";
import sofa3 from "../Images/sofa3.webp";
import sofa4 from "../Images/sofa4.webp";
import sofa5 from "../Images/sofa5.webp";
import Tan from "../Images/leather_Tan.jpeg";
import Black from "../Images/leather_Black.jpeg";
import Creame from "../Images/leather_cream.jpeg";

function Content() {
  const images = [{ sofa1 }, { sofa2 }, { sofa3 }, { sofa4 }, { sofa5 }];

  return (
    <div className="mainContainer">
      {/* Left side for image carousel */}
      <div className="imageSlider">
        <p className="breadcrumb">
          Breadcrumb <BsChevronRight /> Breadcrumb
        </p>
        <p className="timer">
          ORDER IN THE NEXT <span className="countdown">2:55:49</span> FOR NEXT
          DAY DELIVERY
        </p>
        <Slide autoplay={false}>
          <div className="each-slide-effect">
            <div style={{ padding: "10px" }}>
              <img src={sofa1} width="100%"></img>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ padding: "10px" }}>
              <img src={sofa2} width="100%"></img>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ padding: "10px" }}>
              <img src={sofa3} width="100%"></img>
            </div>
          </div>
        </Slide>
        <div className="thumbnails">
          <div className="imageBox">
            <img src={sofa2}></img>
          </div>
          <div className="imageBox">
            <img src={sofa3}></img>
          </div>
          <div className="imageBox">
            <img src={sofa4}></img>
          </div>
          <div className="imageBox">
            <img src={sofa5}></img>
          </div>
        </div>
      </div>

      {/* Right side for pricing and info etc */}
      <div className="info">
        <div className="sofa-title">
          <h1>Montreal Leather Sofa</h1>
          <i className="fave">
            <BiHeartCircle />
          </i>
        </div>
        <div className="price">
          <h2 className="current">£649.00</h2>
          <p className="oldPrice">£949.00</p>
        </div>
        <div className="options">
          <p>Colour: TAN</p>
          <div className="thumbnails">
            <div className="optionsBox">
              <img src={Tan} />
            </div>
            <div className="optionsBox">
              <img src={Black} />
            </div>
            <div className="optionsBox">
              <img src={Creame} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Content };
