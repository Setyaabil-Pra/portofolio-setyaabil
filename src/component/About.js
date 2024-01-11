// src/components/About.js
import React from "react";
import "../assets/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          Halo! Saya Setya Abil Pratama, seorang pengembang web yang passion
          dalam menciptakan aplikasi web yang indah dan fungsional. Saya senang
          mengubah ide menjadi kenyataan melalui kode dan selalu berusaha untuk
          belajar dan mengeksplorasi teknologi baru.
        </p>
        <p>
          Kemampuan saya melibatkan teknologi front-end seperti HTML, CSS, dan
          React, serta teknologi back-end seperti Node.js. Saya menikmati
          bekerja dalam lingkungan kolaboratif dan selalu bersemangat untuk
          menghadapi tantangan baru.
        </p>
        <p>
          Di luar dunia coding, Anda dapat menemukan saya mengeksplorasi tren
          terbaru dalam pengembangan web, membaca blog teknologi, dan menikmati
          secangkir kopi yang baik.
        </p>
      </div>
    </div>
  );
};

export default About;
