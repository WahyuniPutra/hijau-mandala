import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-text">
          <span>KambingFresh 2024. All Right Reserved. | </span>
          <span className="footer-text-bold">Bantuan</span>
        </div>
        <div className="footer-icon">
          <div className="footer-icon-inner"></div>
          <div className="footer-icon-inner-small"></div>
        </div>
      </div>
      <div className="main-content">
        <div className="main-content-background"></div>
        <div className="form-container">
          <div className="form-background"></div>
          <div className="button button-google">
            <div className="button-icon">
              <div className="button-icon-google"></div>
              <div className="button-icon-google-inner"></div>
              <div className="button-icon-google-inner-small"></div>
              <div className="button-icon-google-inner-smallest"></div>
            </div>
          </div>
          <div className="button button-facebook">
            <div className="button-icon">
              <div className="button-icon-facebook"></div>
              <div className="button-icon-facebook-inner"></div>
            </div>
          </div>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">Atau daftar menggunakan</div>
            <div className="divider-line"></div>
          </div>
          <div className="login-text">
            <span>Sudah mempunyai akun? </span>
            <span className="login-text-bold">Login</span>
          </div>
          <div className="register-button">
            <div className="register-button-text">Daftar</div>
          </div>
          <div className="input-field" style={{ top: '384px' }}>
            <input className="input-background" type="password" placeholder="Konfirmasi Kata Sandi" />
            <div className="input-icon">
              <div className="input-icon-inner"></div>
            </div>
          </div>
          <div className="input-field" style={{ top: '313px' }}>
            <input className="input-background" type="password" placeholder="Kata Sandi" />
            <div className="input-icon">
              <div className="input-icon-inner"></div>
            </div>
          </div>
          <div className="input-field" style={{ top: '242px' }}>
            <input className="input-background" type="tel" placeholder="Nomor Telepon" />
          </div>
          <div className="input-field" style={{ top: '171px' }}>
            <input className="input-background" type="email" placeholder="Email" />
          </div>
          <div className="input-field" style={{ top: '100px' }}>
            <input className="input-background" type="text" placeholder="Nama Lengkap" />
          </div>
          <div className="description">Daftarkan akun anda agar Anda dapat mengakses akun pribadi Anda.</div>
          <div className="title">Daftar Akun KambingFresh</div>
        </div>
        <img className="image" src="https://via.placeholder.com/585x650" />
      </div>
      <div className="header">
        <div className="header-background"></div>
        <div className="header-text">Kambingfresh | Daftar</div>
      </div>
      <div className="help">
        <div className="help-text">Butuh Bantuan?</div>
      </div>
    </div>
  );
};

export default App;