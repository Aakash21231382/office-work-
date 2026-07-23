import React, { useState } from "react";
import "../../assets/css/technology/CourseInstructors.css";
import { FaLinkedin } from "react-icons/fa";

import Mentor1 from '../../assets/images/Mentor1.png'
import Mentor2 from '../../assets/images/Mentor2.png'
import Mentor3 from '../../assets/images/Mentor3.png'
import Mentor4 from '../../assets/images/Mentor4.png'

const instructorsData = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Head of AI Research @ Google AI",
    image: Mentor1,
    linkedin: "https://linkedin.com",
    bgColor: "card-bg-1",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "ML Architect @ OpenAI",
    image: Mentor2,
    linkedin: "https://linkedin.com",
    bgColor: "card-bg-2",
  },
  {
    id: 3,
    name: "Anita Rao",
    role: "Sr. Data Scientist @ NVIDIA",
    image: Mentor3,
    linkedin: "https://linkedin.com",
    bgColor: "card-bg-3",
  },
  {
    id: 4,
    name: "Robert Frost",
    role: "NLP VP @ Anthropic",
    image: Mentor4,
    linkedin: "https://linkedin.com",
    bgColor: "card-bg-4",
  },
];

const industryExpertsData = [
  {
    id: 1,
    name: "Alex Turner",
    role: "Principal AI Engineer @ Microsoft",
    image: Mentor4,
    linkedin: "https://linkedin.com",
    bgColor: "card-bg-2",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Lead GenAI Researcher @ Meta",
    image: Mentor3,
    linkedin: "https://linkedin.com",
    bgColor: "card-bg-1",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Director of AI @ Amazon",
    image: Mentor2,
    linkedin: "https://linkedin.com",
    bgColor: "card-bg-4",
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Senior ML Specialist @ Apple",
    image: Mentor1,
    linkedin: "https://linkedin.com",
    bgColor: "card-bg-3",
  },
];

const CourseInstructors = () => {
  const [activeTab, setActiveTab] = useState("instructors");

  // Switch data based on active tab
  const currentData = activeTab === "instructors" ? instructorsData : industryExpertsData;

  return (
    <section className="course-instructors-section">
      <div className="container course-instructors-container">
        
        {/* Header Section */}
        <div className="course-instructors-header text-center">
          <h2>
            Course <span>Instructors</span>
          </h2>
          <p>Guidance from world-class researchers and industry veterans</p>
        </div>

        {/* Clickable Tabs Switcher */}
        <div className="instructors-tabs-header">
          <button
            className={`tab-btn ${activeTab === "instructors" ? "active" : ""}`}
            onClick={() => setActiveTab("instructors")}
          >
            Instructors (10)
          </button>
          <button
            className={`tab-btn ${activeTab === "industry" ? "active" : ""}`}
            onClick={() => setActiveTab("industry")}
          >
            Industry Experts (15)
          </button>
        </div>

        {/* Cards Grid */}
        <div className="instructors-grid">
          {currentData.map((person) => (
            <div className={`instructor-card ${person.bgColor}`} key={person.id}>
              <div className="instructor-img-box">
                <img src={person.image} alt={person.name} />
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                <FaLinkedin className="linkedin-icon" /> LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="instructors-slider-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
        </div>

      </div>
    </section>
  );
};

export default CourseInstructors;