import React from "react";

import "../styles/landing.css";

import otherColors from "../assists/other-landing-color-shoes.png";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-shoes-details">
        <span className="landing-cost">134$</span>
        <span className="landing-brand--model">
          JORDAN
          <br />
          JUMPMAN 2021 PF
        </span>
      </div>
      <div className="description--otherColors">
        <div className="other-colors-container">
          <h4>CHOOSE COLOR:</h4>
          <img src={otherColors} alt="" className="otherColorImage" />
        </div>
        <div className="description-container">
          <h4>LOREM IPSUM DOLAR</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            placeat, explicabo, illo non illum vitae quidem praesentium fugiat
            ducimus, debitis expedita cumque blanditiis corporis nihil?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
