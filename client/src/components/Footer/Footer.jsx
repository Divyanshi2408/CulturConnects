import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./l3.png" alt="" width={220} />
          <span className="secondaryText">
          Explore the richness of Indian culture with CulturConnect. <br />
          Unlock unforgettable experiences and immerse yourself in the beauty of tradition.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">UttarPradesh , India</span>
          <div className="flexCenter f-menu">
            <span>Events</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
