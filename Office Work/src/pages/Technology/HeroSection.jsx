import React from 'react';
// CSS file import according to your folder structure
import '../../assets/css/technology/HeroSection.css'; 

// Background image import
import HeroBg from '../../assets/images/Herosection-Bg.png'; 

import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { MdOutlineSupportAgent, MdPlayCircleOutline, MdWorkOutline } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import { FaUserTie } from 'react-icons/fa6';
import { HiMiniCheckBadge } from 'react-icons/hi2';
import { LuHandHeart } from "react-icons/lu";
import { FaUsersGear } from "react-icons/fa6";

const indiaFlag = "https://flagcdn.com/w40/in.png"; 

const HeroSection = () => {
  return (
    <section 
      className="ai-hero-section"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="ai-hero-container container">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="ai-hero-left">
          <h1>
            Master Agentic <br />
            <span>AI & Generative AI</span>
          </h1>
          <h3>Build Autonomous AI That Thinks & Acts</h3>
          
          <ul className="ai-hero-list">
            <li>
              {/* <FaCheckCircle className="ai-check-icon" /> */}
              <HiMiniCheckBadge size={28}  style={{   color: "#FDBA21"  }}/>
              Build AI agents with LangChain, CrewAI & Hugging Face
            </li>
            <li>
            <HiMiniCheckBadge size={28}  style={{   color: "#FDBA21"  }}/>
              Master Prompt Engineering, RAG, MCP & Multi-Agent AI
            </li>
            <li>
            <HiMiniCheckBadge size={28}  style={{   color: "#FDBA21"  }}/>
              Connect AI with APIs, databases & external tools
            </li>
            <li>
            <HiMiniCheckBadge size={28}  style={{   color: "#FDBA21"  }}/>
              Earn an Industry-Recognized AI Certification
            </li>
          </ul>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="ai-hero-right">
          <div className="ai-form-card">
            
            <div className="form-head-row">
              <div className="counsellor-icon">
                <MdOutlineSupportAgent />
              </div>
              <div className="form-head-text">
                <h4>Talk to a Counsellor</h4>
                <p>Get expert guidance for your learning journey</p>
              </div>
            </div>

            <div className="ai-input-group">
              <div className="country-code-box">
                <img src={indiaFlag} alt="IN Flag" />
                <span>+91</span>
                <FaChevronDown className="chevron-down" />
              </div>
              <input type="tel" placeholder="Enter your phone number" maxLength={10}/>
            </div>

            <button className="ai-submit-btn">
              Request a Call Back
            </button>

            <p className="ai-terms">
              By click, i accept the <strong>T&C</strong> and <strong>Privacy Policy</strong>.
            </p>

            <div className="form-footer-features">
              <div className="form-feat-item">
              
<FaUsersGear className='feat-icon'/>
                
                <span>Expert<br />Mentors</span>
              </div>
              <div className="form-feat-item">
                <MdPlayCircleOutline className="feat-icon" />
                <span>Live &<br />Interactive</span>
              </div>
              <div className="form-feat-item">
                <TbCertificate className="feat-icon" />
                <span>Industry<br />Certificate</span>
              </div>
              <div className="form-feat-item">
                <MdWorkOutline className="feat-icon" />
          {/* <LuHandHeart className='feat-icon'/> */}
                <span>Placement<br />Support</span>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;