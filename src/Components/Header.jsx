import React from "react";
import "../header.css";

const header = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src="./Reactangle90.png" alt="" />
      </div>
      <section className="wrapper">
        <div className="intro">
          <h3 className="name">Laura Smith</h3>
          <h4 className="designation">Frontend Developer</h4>
          <h6 className="website">laurasmith.website</h6>
        </div>
      </section>
    </div>
  );
};

export default header;
