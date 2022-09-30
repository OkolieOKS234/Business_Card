import React from "react";
import Twitter from "../assets/Twitter.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
const Footer = () => {
  return (
    <footer className="social">
      <img src={Twitter} alt="twitter icon" className="social_icons" />
      <img src={Facebook} alt="twitter icon" className="social_icons" />
      <img src={Instagram} alt="twitter icon" className="social_icons" />
    </footer>
  );
};
export default Footer;
