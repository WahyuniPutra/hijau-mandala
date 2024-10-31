import React from 'react';
import './pendaftaran.css';

const Pendaftaran = () => {
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
        <div className="main-content-title">Masukkan Informasi Toko</div>
        <div className="main-content-input" style={{ top: '97px' }}>
          <div className="main-content-input-background"></div>
          <div className="main-content-input-label">Masukkan Nama Lengkap</div>
        </div>
        <div className="main-content-input" style={{ top: '195px' }}>
          <div className="main-content-input-background"></div>
          <div className="main-content-input-label">Masukkan Nama Toko</div>
        </div>
        <div className="main-content-input" style={{ top: '293px' }}>
          <div className="main-content-input-background"></div>
          <div className="main-content-input-label">Masukkan Alamat Toko</div>
        </div>
        <div className="main-content-input" style={{ top: '391px' }}>
          <div className="main-content-input-background"></div>
          <div className="main-content-input-label">Masukkan Email</div>
        </div>
        <div className="main-content-input" style={{ top: '489px' }}>
          <div className="main-content-input-background"></div>
          <div className="main-content-input-label">Masukkan No.Handphone</div>
        </div>
        <div className="main-content-divider"></div>
        <div className="main-content-terms">
          Dengan klik tombol di bawah ini, kamu telah menyetujui <span className="main-content-terms-bold">Syarat & Ketentuan</span> serta <span className="main-content-terms-bold">Pemberitahuan Privasi</span> Pendaftaran Toko.
        </div>
        <div className="main-content-button">
          <div className="main-content-button-text">Lanjut</div>
        </div>
      </div>
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
      <img className="image" src="https://via.placeholder.com/576x482" />
      <div className="title">Ayo Daftarkan Tokomu Sekarang</div>
    </div>
  );
};

export default Pendaftaran;