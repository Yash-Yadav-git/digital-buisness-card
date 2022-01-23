import React from "react";
import "../header.css";

const header = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img className="header-image" src="./Reactangle90.png" alt="" />
      </div>
      <section className="wrapper">
        <div className="intro">
          <h3 className="name">Laura Smith</h3>
          <h4 className="designation">Frontend Developer</h4>
          <h6 className="website">laurasmith.website</h6>
        </div>
      </section>

      <section className="buttons">
        <button className="email__button">
          <span className="button__icon">
            <img src="./icon.png" alt="" />
          </span>
          <span className="button__text">Email</span>
        </button>

        <button className="linkedin__button">
          <span className="button__icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7143 1.33334H2.28275C1.75894 1.33334 1.33334 1.76489 1.33334 2.29465V13.7054C1.33334 14.2351 1.75894 14.6667 2.28275 14.6667H13.7143C14.2381 14.6667 14.6667 14.2351 14.6667 13.7054V2.29465C14.6667 1.76489 14.2381 1.33334 13.7143 1.33334ZM5.36311 12.7619H3.38691V6.39882H5.36608V12.7619H5.36311ZM4.37501 5.52977C3.74108 5.52977 3.22918 5.01489 3.22918 4.38394C3.22918 3.75299 3.74108 3.23811 4.37501 3.23811C5.00596 3.23811 5.52084 3.75299 5.52084 4.38394C5.52084 5.01787 5.00894 5.52977 4.37501 5.52977ZM12.7708 12.7619H10.7947V9.66668C10.7947 8.92858 10.7798 7.97918 9.76787 7.97918C8.73811 7.97918 8.58037 8.78275 8.58037 9.61311V12.7619H6.60418V6.39882H8.50001V7.26787H8.5268C8.79168 6.76787 9.43751 6.24108 10.3988 6.24108C12.3988 6.24108 12.7708 7.55953 12.7708 9.27382V12.7619Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="button__text">Linkedin</span>
        </button>
      </section>

      <section className="About__Interests">
        <div className="about">
          <h1 className="about">About</h1>
          <p className="about__description">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="Interests">
          <h1 className="Interests">Interests</h1>
          <p className="Interests__description">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </section>
      <footer>
        <div className="footer-wrapper">
          <img src="./Facebook Icon.png" alt="" className="social-1" />
          <img src="./GitHub Icon.png" alt="" className="social-2" />
          <img src="./Instagram Icon.png" alt="" className="social-3" />
          <img src="./Twitter Icon.png" alt="" className="social-4" />
        </div>
      </footer>
    </div>
  );
};

export default header;
