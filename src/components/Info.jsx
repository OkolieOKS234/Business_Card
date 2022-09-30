import React from "react";
import pic from "../assets/Anne.png";
import Mail from "../assets/Mail.png";
import LinkedIn from "../assets/linkedIn.png";
export default function Info() {
  return (
    <div className="info_section">
      <img src={pic} alt="Picture of Anne" srcset="" />
      <h3 className="my_name">Anne Lee</h3>
      <p className=" my_name position">Frontend Developer</p>
      <p className="my_name website_name">oks.com</p>
      <div className="contact_btn">
        <button className="contact">
          <img src={Mail} alt="email" className="contact_pic" />
          Email
        </button>
        <button className="contact linkedIn">
          <img src={LinkedIn} alt="email" className="contact_pic linkedIn" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
