import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../Styles/Content.css";
import {
  BsChevronRight,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";
import sofa1 from "../Images/sofa1.webp";
import sofa2 from "../Images/sofa2.webp";
import sofa3 from "../Images/sofa3.webp";
import sofa4 from "../Images/sofa4.webp";
import sofa5 from "../Images/sofa5.webp";

function Content() {
  return (
    <div className="mainContainer">
      <div className="product-Left">
        <p className="breadcrumb">
          Breadcrumb <BsChevronRight /> Breadcrumb
        </p>
        <p className="timer">
          Order In THe Next <span className="countdown">2:55:49</span> For Next
          Day Delivery
        </p>
        <i className="arrowIcons">
          <BsArrowLeftCircle />
        </i>

        <img className="productImage" src={sofa1} />
        <i className="arrowIcons">
          <BsArrowRightCircle />
        </i>
      </div>
      <div className="product-Right">this is the right side</div>
    </div>
  );
}

export { Content };
