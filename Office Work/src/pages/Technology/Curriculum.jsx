import React from "react";
import "../../assets/css/technology/Curriculum.css"; 
import { FaCheckCircle } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const curriculumData = [
  {
    id: 1,
    title: "Foundations of AI",
    isPeach: true,
    points: [
      "Builds a strong foundation in AI, Machine Learning, and Deep Learning.",
      "Explains how AI systems learn from data and how models are trained.",
      "Covers different AI approaches and their real-world applications.",
      "Helps learners gain the context needed to use modern AI tools and frameworks confidently."
    ]
  },
  {
    id: 2,
    title: "Foundations of AI",
    isPeach: false,
    points: [
      "Builds a strong foundation in AI, Machine Learning, and Deep Learning.",
      "Explains how AI systems learn from data and how models are trained.",
      "Covers different AI approaches and their real-world applications.",
      "Helps learners gain the context needed to use modern AI tools and frameworks confidently."
    ]
  },
  {
    id: 3,
    title: "Foundations of AI",
    isPeach: false,
    points: [
      "Builds a strong foundation in AI, Machine Learning, and Deep Learning.",
      "Explains how AI systems learn from data and how models are trained.",
      "Covers different AI approaches and their real-world applications.",
      "Helps learners gain the context needed to use modern AI tools and frameworks confidently."
    ]
  },
  {
    id: 4,
    title: "Foundations of AI",
    isPeach: false,
    points: [
      "Builds a strong foundation in AI, Machine Learning, and Deep Learning.",
      "Explains how AI systems learn from data and how models are trained.",
      "Covers different AI approaches and their real-world applications.",
      "Helps learners gain the context needed to use modern AI tools and frameworks confidently."
    ]
  }
];

const Curriculum = () => {
  return (
    <section className="curriculum-section">
      <div className="container curriculum-container">
        
        {/* Main Section Header */}
        <div className="curriculum-header text-center">
          <h2>
            Agentic AI & Generative <br />
            <span>AI Course Curriculum</span>
          </h2>
        </div>

        {/* Timeline Roadmap */}
        <div className="timeline-wrapper">
          {/* Strict Center Line connecting Node 1 to Node 4 centers */}
          <div className="timeline-center-line"></div>

          {curriculumData.map((item) => {
            return (
              <div 
                className={`timeline-row item-${item.id}`} 
                key={item.id}
              >
                {/* Content Card */}
                <div className={`curriculum-card ${item.isPeach ? "peach-card" : "white-card"}`}>
                  <h3>{item.title}</h3>
                  <ul className="curriculum-list">
                    {item.points.map((point, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="curr-check-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Center Number Bubble */}
                <div className="timeline-number-node">
                  <span>{item.id}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Download Syllabus Button */}
        <div className="curriculum-btn-box text-center">
          <button className="download-syllabus-btn">
            Download Syllabus <FaDownload />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Curriculum;