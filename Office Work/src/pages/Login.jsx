import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../assets/css/login.css'; // Make sure path sahi ho

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", credentials);
    alert("Login button clicked! (Yahan API call aayegi)");
  };

  return (
    <div className="login-wrapper">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="login-card shadow-lg">
          
          <div className="text-center mb-4">
            <h2 className="fw-bold text-indigo">Welcome Back</h2>
            <p className="text-muted">Log in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit}>
            
            {/* Email Address */}
            <div className="form-group mb-3">
              <span className="input-icon"><FaEnvelope /></span>
              <input 
                type="email" 
                className="form-control custom-input" 
                placeholder="Email Address" 
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Password */}
            <div className="form-group mb-2">
              <span className="input-icon"><FaLock /></span>
              <input 
                type="password" 
                className="form-control custom-input" 
                placeholder="Password" 
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Forgot Password Link */}
            <div className="d-flex justify-content-end mb-4">
              <Link to="/forgot-password" className="forgot-link text-sm">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-login w-100">
              LOG IN
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <p className="text-muted">
              Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;