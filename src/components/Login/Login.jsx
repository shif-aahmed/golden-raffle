import React from 'react'
import waveYellow from '../../assets/wave-yellow.svg'
import './Login.css'

function Login() {
  return (
    <div className="login-page">
      <div className="login-hero">
        <div className="login-header">
          <h1 className="login-title">LOGIN</h1>
        </div>
        <div className="wave-container">
          <div className="wave-layer wave-dark-brown"></div>
          <div className="wave-layer wave-yellow">
            <img src={waveYellow} alt="Wave" className="wave-svg" />
          </div>
          <div className="wave-layer wave-light-gray"></div>
        </div>
      </div>
      
      <div className="login-content">
        <div className="login-form-container">
          <form className="login-form">
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="login-input"
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Password" 
                className="login-input"
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="remember-checkbox"
                />
                <label htmlFor="remember" className="remember-label">Remember me</label>
              </div>
              <a href="#" className="forgot-password">LOST YOUR PASSWORD?</a>
            </div>
            
            <button type="submit" className="login-button">
              LOGIN
            </button>
            
            <div className="signup-link">
              <span>Don't have an account? </span>
              <a href="#" className="signup-text">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
