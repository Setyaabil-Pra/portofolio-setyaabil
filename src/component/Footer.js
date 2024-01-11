// src/components/Footer.js
import React from "react";
import "../assets/Footer.css";
import whatsappIcon from "../gambar/logowa.jpeg";
import instagramIcon from "../gambar/logo1g.jpeg";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="logowa.jpeg" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="logo1g.jpeg" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
