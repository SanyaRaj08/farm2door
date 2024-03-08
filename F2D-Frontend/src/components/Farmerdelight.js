import React from "react";
import img2 from "../image/image2.png";
import img4 from "../image/image4.png";
import img3 from "../image/image3.png";
const Farmerdelight = () => {
  return (
    <div className="container">
      <div className="delight">
        <div>
          <img className="delight_img" src={img2} alt="" />
        </div>
        <div>
          <img className="delight_img" src={img3} alt="" />
        </div>
        <div>
          <img className="delight_img" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Farmerdelight;
