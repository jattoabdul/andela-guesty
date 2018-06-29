import React, { Component } from 'react';
import andela_logo from '../../assets/andela-logo.png';
import google_btn from '../../assets/google-btn.svg';
import './Login.scss';

class Login extends Component {

  loginUser = () => {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="Auth">
        <div className="login-screen">
          <div className="left-item">
            <div className="login-panel">
              <div className="inner-login-panel">
                <div className="login-content-panel">
                  <img src={andela_logo} className="App-logo" alt="logo" />
                  <h1>Andela Guesty</h1>
                  <p>Sign in to access your account.</p>
                </div>
                <div className="google-btn-panel" onClick={this.loginUser}>
                  <img src={google_btn} className="Andela-App-logo" alt="andela-logo" />
                </div>
              </div>
            </div>
          </div>
        
          <div className="right-item">
            <div className="slider-panel">
              <div className="inner-slider-panel">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
