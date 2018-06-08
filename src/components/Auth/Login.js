import React, { Component } from 'react';
import andela_logo from '../../assets/andela-logo.png';
import google_btn from '../../assets/google-btn.svg';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="Auth">
        <div class="login-screen">
          <div class="left-item">
            <div class="login-panel">
              <div class="inner-login-panel">
                <div className="login-content-panel">
                  <img src={andela_logo} className="App-logo" alt="logo" />
                  <h1>Andela Guesty</h1>
                  <p>Sign in to access your account.</p>
                </div>
                <div class="google-btn-panel">
                  <img src={google_btn} className="Andela-App-logo" alt="andela-logo" />
                </div>
              </div>
            </div>
          </div>
        
          <div class="right-item">
            <div class="slider-panel">
              <div class="inner-slider-panel">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
