import React from "react";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      <p>{year} Loud House</p>
    </footer>
  );
};

export default Footer;
