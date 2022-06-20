import React from "react";

import "./Doc.css";

import image_1 from "../../static/Doc_1.png";
import image_2 from "../../static/Doc_2.png";

const Documentation = () => {
  return (
    <div>
      <img className="img_1" src={image_1} />
      <img className="img_1" src={image_2} />
    </div>
  );
};

export default Documentation;
