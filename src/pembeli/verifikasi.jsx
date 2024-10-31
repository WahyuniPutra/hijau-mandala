import React from 'react';
import './verifikasi.css';

const Verifikasi = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-text">KambingFresh 2024. All Right Reserved.</div>
        <div className="footer-icon">
          <div className="footer-icon-inner"></div>
          <div className="footer-icon-inner-small"></div>
        </div>
        <div className="footer-divider"></div>
        <div className="social-media">
          <div className="social-media-text" style={{ top: 106 }}>Twitter</div>
          <div className="social-media-icon" style={{ top: 102 }}>
            <div className="social-media-icon-background"></div>
            <div className="social-media-icon-twitter"></div>
            <div className="social-media-icon-content"></div>
          </div>
          <div className="social-media-text" style={{ top: 72 }}>Instagram</div>
          <div className="social-media-icon" style={{ top: 68 }}>
            <div className="social-media-icon-background"></div>
            <div className="social-media-icon-instagram"></div>
            <div className="social-media-icon-content"></div>
          </div>
          <div className="social-media-text" style={{ top: 38 }}>Facebook</div>
          <div className="social-media-icon" style={{ top: 34 }}>
            <div className="social-media-icon-facebook"></div>
            <div className="social-media-icon-content"></div>
          </div>
          <div className="social-media-title">Ikuti Kami</div>
        </div>
        <div className="contact">
          <div className="contact-title">Kontak Kami</div>
          <div className="contact-content">kambingfresh@gmail.com<br/><br/>+6281234589534</div>
        </div>
      </div>
      <div className="main-content">
        <div className="main-content-header"></div>
        <div className="main-content-title">Verifikasi</div>
        <div className="main-content-description">
          <div className="main-content-description-title">Masukkan Kode Verifikasi</div>
          <div className="main-content-description-text">
            Kode verifikasi telah dikirimkan melalui SMS ke Nomor Handphone anda <span className="main-content-description-bold">(+628115232480)</span>
          </div>
          <div className="main-content-description-code">Kode Verifikasi</div>
        </div>
        <div className="main-content-button">
          <div className="main-content-button-text">Verifikasi</div>
        </div>
        <div className="main-content-note">
          Mohon menunggu 60 Detik untuk mengirim ulang atau Mengganti <span className="main-content-note-bold">Nomor Handphone</span>
        </div>
      </div>
      <img className="image" src="https://via.placeholder.com/576x482" />
      <div className="title">Verifikasi Pembuatan Toko Anda</div>
      <div className="header">
        <div className="header-content">
          <div className="header-text">Kambingfresh</div>
          <img className="header-logo" src="https://via.placeholder.com/107x83" />
          <div className="header-search">
            <div className="header-search-background"></div>
            <div className="header-search-icon">
              <div className="header-search-icon-inner"></div>
            </div>
            <div className="header-search-text">Pencarian</div>
          </div>
          <div className="header-profile">
            <div className="header-profile-divider"></div>
            <img className="header-profile-image" src="https://via.placeholder.com/34x34" />
            <div className="header-profile-text">Hijau Mandala</div>
          </div>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon-group">
          <div className="icon">
            <div className="icon-inner">
              <div className="icon-inner-background"></div>
            </div>
          </div>
          <div className="icon">
            <div className="icon-inner">
              <div className="icon-inner-background-small"></div>
            </div>
          </div>
          <div className="icon">
            <div className="icon-inner">
              <div className="icon-inner-background-rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifikasi;