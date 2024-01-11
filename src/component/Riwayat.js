// src/components/Education.js
import React from "react";
import "../assets/Riwayat.css";

const Riwayat = () => {
  return (
    <div className="riwayat-container">
      <h2 className="section-title">Riwayat</h2>
      <div className="riwayat-item">
        <h3 className="riwayat-degree">RIWAYAT PENDIDIKAN</h3>
        <p className="riwayat-school">MI Khalafiyah Syafi'iah</p>
        <p className="riwayat-date">2011-2017</p>
        <p className="riwayat-school">SMP NEGERI 3 TANGGUL</p>
        <p className="riwayat-date">2017-2020</p>
        <p className="riwayat-school">SMK NEGERI 6 JEMBER</p>
        <p className="riwayat-date">2020-2024</p>
      </div>
    </div>
  );
};

export default Riwayat;
