import React from "react";
import {
  icons1,
  icons2,
  icons3,
  icons4,
  icons5,
  icons6,
} from "./imports";

import "./style.css";
const logos = [icons1,
  icons2,
  icons3,
  icons4,
  icons5,
  icons6,
];

const Tools = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            key={index}
            className="carousel-logo"
          />
        ))}

        {logos.map((logo, index) => (
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            key={`duplicate-${index}`}
            className="carousel-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
