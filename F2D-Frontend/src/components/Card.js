import React from "react";
import "../style/about.css";

const Card = (props) => {
  return (
    <div>
      <div className="container about-boxes" >
        <div className="box">
          <p className="box-text ">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
