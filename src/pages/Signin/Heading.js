import React from "react";
import "./headers.css";

const Heading = () => {
  return (
    <div className="dog">
      <img
        className="dogimg"
        src="https://github.com/Moyeenwaz/pet-store-client/blob/main/hillspie.png?raw=true"
        alt=""
      />
      <div className="link">
        <a href="#">Home</a> {">"} <a href="#">Login</a> {">"}
        <a href="#">Create account</a>{" "}
      </div>
    </div>
  );
};

export default Heading;
