import React from "react";
import Instgram from "../assets/instagram.png";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com/limitless_fitnessclub_gym/" target="_blank" rel="noreferrer"><img className='InstaLogo' src={Instgram} alt="" /></a>
        </div>
        <div className="logo-f">
          Sagar Dubey
          Limitless fitness club
          <p>Contact: 6264583214</p>
        </div>
      </div>
      <div className="footer-blur-1"></div>
      <div className="footer-blur-2"></div>
    </div>
  );
}

export default Footer;
