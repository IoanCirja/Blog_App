import React from 'react';
import Logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Blog App Logo" />
      <span>this is some footer text</span>
    </footer>
  )
}

export default Footer