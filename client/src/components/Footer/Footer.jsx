import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./e3.png" alt="" width={220} />
          <span className="secondaryText">
            Explore the richness of Indian culture with CulturConnect. <br />
            Unlock unforgettable experiences and immerse yourself in the beauty of tradition.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
        
          <div className="flexCenter f-menu">
          <Link to="./properties"><span>Events</span></Link> 
          <Link to="./Value"> <span>Services</span></Link> 
          <Link to="./About"> <span>About Us</span></Link> 
          <Link to="./Resources"> <span>Resources</span></Link> 
          
            <a href ="https://divyanshi2408.github.io/page4/"><span>About Us</span></a>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
