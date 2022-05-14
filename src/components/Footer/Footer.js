import React from "react";
import "./Footer.css";

const Footer = () => {
  let newDate = new Date().getFullYear();
  return (
    <div className="text-center fixed-bottom ">
      <p> &#169; Copyright Ieva Baltriukaite, {newDate}</p>
    </div>
  );
};

export default Footer;
