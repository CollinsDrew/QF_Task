import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import "react-slideshow-image/dist/styles.css";
import "../Styles/Content.css";
import { Slide } from "react-slideshow-image";
import Countdown from "react-countdown";

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

  const slideRef = useRef();

  const [timeLeft, setTimeLeft] = useState(0);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "";
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  const millisTillMidnight = () => {
    let midnight = new Date();
    midnight.setHours(24);
    midnight.setMinutes(0);
    midnight.setSeconds(0);
    midnight.setMilliseconds(0);

    return midnight.getTime() - new Date().getTime();
  };

  // ReactDOM.render(
  //   <Countdown date={Date.now() + 10000} />,
  //   document.getElementById("countdown")
  // );

  return (
    <div className="mainContainer">
      {/* Left side for image carousel */}
      <div className="imageSlider">
        <p className="breadcrumb">
          Breadcrumb <BsChevronRight /> Breadcrumb
        </p>
        <p className="timer">
          ORDER IN THE NEXT{" "}
          <span id="countdown">
            <Countdown
              date={Date.now() + millisTillMidnight()}
              renderer={renderer}
            />
          </span>{" "}
          FOR NEXT DAY DELIVERY
        </p>
        <Slide autoplay={false} ref={slideRef}>
          <div className="each-slide-effect">
            <div style={{ padding: "10px" }}>
              <img src={sofa5} width="100%"></img>
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
          <div className="each-slide-effect">
            <div style={{ padding: "10px" }}>
              <img src={sofa4} width="100%"></img>
            </div>
          </div>
        </Slide>
        <div className="thumbnails">
          <div
            className="imageBox"
            onClick={(event) => slideRef.current.goTo(0)}
          >
            <img src={sofa5}></img>
          </div>
          <div
            className="imageBox"
            onClick={(event) => slideRef.current.goTo(1)}
          >
            <img src={sofa2}></img>
          </div>
          <div
            className="imageBox"
            onClick={(event) => slideRef.current.goTo(2)}
          >
            <img src={sofa3}></img>
          </div>
          <div
            className="imageBox"
            onClick={(event) => slideRef.current.goTo(3)}
          >
            <img src={sofa4}></img>
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
        <div className="size-options">
          <p className="size-info">Size:</p>
          <form action="#">
            {/* <label for="size"></label> */}
            <select name="sizes" id="size">
              <option value={0}>2 Seater | 180cm 'W' 80cm 'D' </option>
              <option value={1}>3 Seater | 240cm 'W' 80cm 'D'</option>
              <option value={2}>4 Seater | 300cm 'W' 80cm 'D'</option>
            </select>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export { Content };
