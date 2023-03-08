import React from "react";
import candle from "../../assets/images/candle.png";

function Slider({ props, active }) {
  return (
    <>
      <div className={active}>
        <div className="container">
          <div className="content">
            <span>{props.category}</span>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <div className="image">
            <div className="multiimages">
              <img src={props.image} alt={props.title} />
              <span>${Math.floor(props.price)}</span>
            </div>
          </div>
          <div className="candle">
            <img src={candle} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
