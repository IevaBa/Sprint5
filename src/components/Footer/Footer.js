import React from "react";
import "./Footer.css";

const Footer = () => {
  let newDate = new Date().getFullYear();
  return (
    <div className="text-center fixed-bottom bg-light">
      <p className="pt-3"> &#169; Copyright Ieva Baltriukaite, {newDate}</p>
    </div>
  );
};

export default Footer;
