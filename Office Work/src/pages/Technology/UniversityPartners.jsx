import React from "react";
import "../../assets/css/technology/UniversityPartners.css"; 

import LOGO1 from "../../assets/images/logo1.png";
import LOGO2 from "../../assets/images/logo2.png";
import LOGO3 from "../../assets/images/logo3.png";
import LOGO4 from "../../assets/images/logo4.png";
import LOGO5 from "../../assets/images/logo5.png";
import LOGO6 from "../../assets/images/logo6.png";
import LOGO7 from "../../assets/images/logo7.png";

import FeaturesIcon1 from '../../assets/images/featuresicon1.png'
import FeaturesIcon2 from '../../assets/images/featuresicon2.png'
import FeaturesIcon3 from '../../assets/images/featuresicon3.png'

const universityPartnersData = [
  { id: 1, image: LOGO1, name: "Logo 1" },
  { id: 2, image: LOGO2, name: "Logo 2" },
  { id: 3, image: LOGO1, name: "Logo 3" },
  { id: 4, image: LOGO3, name: "Logo 4" },
  { id: 5, image: LOGO4, name: "Logo 5" },
  { id: 6, image: LOGO5, name: "Logo 6" },
  { id: 7, image: LOGO6, name: "Logo 7" },
  { id: 8, image: LOGO7, name: "Logo 8" },
  { id: 9, image: LOGO2, name: "Logo 9" },
];




const readinessCards = [
  {
    id: 1,
    icon:FeaturesIcon1,
    title: "Automation risk in your profile",
  },
  {
    id: 2,
    icon: FeaturesIcon2,
    title: "Skill relevancy for AI roles",
  },
  {
    id: 3,
    icon:FeaturesIcon3,
    title: "Ability to adapt",
  },
];


const UniversityPartners = () => {
  return (

    <div>
 <section className="uni-partners-section">
      <div className="uni-left-circle"></div>
      <div className="uni-right-circle"></div>
      <div className="uni-right-circle-small"></div>
      <div className="uni-dot-pattern"></div>

      <div className="container uni-partners-container">
        
        {/* Left Side Heading & Description */}
        <div className="uni-partners-left">
          <h2>
            Our Top <span>University Partners</span>
          </h2>

          <p>
            We partner with world-renowned universities so you earn certificates
            recognised by organisations across the globe.
          </p>
        </div>

        {/* Right Side 3x3 Grid Logos */}
        <div className="uni-partners-right">
          {universityPartnersData.map((item) => (
            <div className="uni-logo-box" key={item.id}>
              <img src={item.image} alt={item.name} />
            </div>
          ))}

          {/* Slider Dots */}
          <div className="uni-slider-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
          </div>
        </div>

      </div>
    </section>

    <section className="ai-readiness-section">
      <div className="container ai-readiness-container">
        
        {/* Section Heading */}
        <div className="ai-readiness-header text-center">
          <h2>
            How AI-Ready Is <span>Your Career?</span>
          </h2>
          <p>
            The work you do today may already be easy for AI to replace. Find out where you truly stand.
          </p>
        </div>

        {/* 3 Cards Grid (Using Bootstrap row/col) */}
        <div className="row justify-content-center g-4 ai-cards-row">
          {readinessCards.map((card) => (
            <div className="col-lg-4 col-md-6 col-12" key={card.id}>
              <div className="ai-readiness-card">
                <div className="icon-circle">
                <img src={card.icon} alt="" className=""/>
                </div>
                
                <h4>{card.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="ai-readiness-btn-box text-center">
          <button className="check-readiness-btn">
            Check My AI Readiness
          </button>
        </div>

      </div>
    </section>
    </div>
   
  );
};

export default UniversityPartners;