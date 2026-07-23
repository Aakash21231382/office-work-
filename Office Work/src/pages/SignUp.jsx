import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from 'react-icons/fa';
import '../assets/css/signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic Validation: Password Match check
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    setError(''); // Clear error if all good
    alert("Sign Up Successful! (Yahan aap API call kar sakte hain)");
    console.log(formData);
  };

  return (
    <div className="signup-wrapper">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="signup-card shadow-lg">
          
          <div className="text-center mb-4">
            <h2 className="fw-bold text-indigo">Create an Account</h2>
            <p className="text-muted">Join us today to get started!</p>
          </div>

          {/* Error Message Alert */}
          {error && <div className="alert alert-danger text-center py-2">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group mb-3">
              <span className="input-icon"><FaUser /></span>
              <input 
                type="text" 
                className="form-control custom-input" 
                placeholder="Full Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Email Address */}
            <div className="form-group mb-3">
              <span className="input-icon"><FaEnvelope /></span>
              <input 
                type="email" 
                className="form-control custom-input" 
                placeholder="Email Address" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Phone Number */}
            <div className="form-group mb-3">
              <span className="input-icon"><FaPhoneAlt /></span>
              <input 
                type="tel" 
                className="form-control custom-input" 
                placeholder="Phone Number" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Password */}
            <div className="form-group mb-3">
              <span className="input-icon"><FaLock /></span>
              <input 
                type="password" 
                className="form-control custom-input" 
                placeholder="Password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group mb-4">
              <span className="input-icon"><FaLock /></span>
              <input 
                type="password" 
                className="form-control custom-input" 
                placeholder="Confirm Password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-signup w-100 bg-info">
              SIGN UP
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="text-muted">
              Already have an account? <Link to="/login" className="login-link">Log In</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;