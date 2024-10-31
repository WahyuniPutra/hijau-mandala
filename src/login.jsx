import React from 'react';
import './login.css';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-text">
          KambingFresh 2024. All Right Reserved. | <span className="footer-text-bold">Bantuan</span>
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
            <div className="divider-text">Atau masuk menggunakan</div>
            <div className="divider-line"></div>
          </div>
          <div className="login-text">
            Belum mempunyai akun? <span className="login-text-bold">Daftar</span>
          </div>
          <div className="login-button">
            <div className="login-button-text">Masuk</div>
          </div>
          <div className="remember-me">
            <div className="remember-me-checkbox">
              <div className="remember-me-checkbox-inner"></div>
            </div>
            <div className="remember-me-text">Ingat Saya</div>
          </div>
          <div className="input-field" style={{ top: '170px' }}>
            <input className="input-background" type="password" placeholder="Kata Sandi" />
            <div className="input-icon">
              <div className="input-icon-inner"></div>
            </div>
          </div>
          <div className="input-field" style={{ top: '100px' }}>
            <input className="input-background" type="email" placeholder="Email" />
            <div className="input-icon">
              <div className="input-icon-inner"></div>
            </div>
          </div>
          <div className="title">Masuk ke KambingFresh</div>
          <div className="subtitle">Silahkan Masukkan Email dan Kata Sandi</div>
          <div className="forgot-password">Lupa Kata Sandi?</div>
        </div>
        <img className="image" src="https://via.placeholder.com/585x650" />
      </div>
      <div className="header">
        <div className="header-background"></div>
        <div className="header-text">Kambingfresh | Log In</div>
      </div>
      <div className="help">
        <div className="help-text">Butuh Bantuan?</div>
      </div>
    </div>
  );
};

export default Dashboard;