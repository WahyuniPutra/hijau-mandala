import React from 'react';
import './detail.css';

const App = () => {
  return (
    <div className="main-container">
      {/* Header */}
      <div className="header-container">
        <div className="user-profile">
          <img src="https://via.placeholder.com/34x34" alt="User" />
          <span>Hijau Mandala</span>
        </div>
        <div className="search-container">
          <div className="search-bar" />
          <span>Pencarian</span>
        </div>
        <img className="brand-logo" src="https://via.placeholder.com/107x83" alt="Logo" />
        <div className="brand-title">Kambingfresh</div>
      </div>

      {/* Produk */}
      <div className="product-container">
        <div className="product-header">Deskripsi Produk</div>
        <div className="product-description">
          <h3>Kambing Boer (Ukuran Sedang)</h3>
          <p>
            Dapatkan kambing Boer ukuran sedang yang sehat dan berkualitas tinggi! 
            Kambing ini terkenal dengan produksi daging yang optimal, cocok untuk konsumsi atau acara khusus. 
            Kambing Boer dikenal dengan pertumbuhan cepat, tubuh berotot, dan daging yang berkualitas.
          </p>
          <ul>
            <li>Berat: ±35-45 kg</li>
            <li>Umur: 10-15 bulan</li>
            <li>Jenis Kelamin: Jantan/Betina</li>
            <li>Asal: Peternakan lokal, Jawa Tengah</li>
            <li>Kondisi: Sehat, bebas penyakit</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container">
        <div className="footer-text">KambingFresh 2024. All Right Reserved.</div>
      </div>

      {/* Kontak dan Ikuti Kami */}
      <div className="contact-container">
        <h3>Kontak Kami</h3>
        <p>kambingfresh@gmail.com</p>
        <p>+6281234589534</p>
      </div>
      <div className="follow-us-container">
        <h3>Ikuti Kami</h3>
        <p>Instagram | Facebook | Twitter</p>
      </div>
    </div>
  );
};

export default App;