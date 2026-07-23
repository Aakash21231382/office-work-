import React, { useState } from "react";
import "../../assets/css/technology/CurriculumComparison.css";
import { FaRegClock, FaRegFolderOpen } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";

import Icon1 from "../../assets/images/CharvionIcon1.png";
import Icon2 from "../../assets/images/CharvionIcon2.png";
import Icon3 from "../../assets/images/CharvionIcon3.png";
import Icon4 from "../../assets/images/CharvionIcon4.png";

const curriculumData = {
  iitkgp: {
    partATitle: "Applied AI",
    partABadge: "Foundational Focus",
    partAItems: [
      {
        id: 1,
        title: "Foundations of GenAI & LLMs",
        desc: "Probability, Linear Algebra, and Calculus for AI engineers.",
        hours: "128+ Hours",
        projects: "4 Projects",
        extra: "Live Lab Access",
        icon: Icon1,
      },
      {
        id: 2,
        title: "ML Models & Architectures",
        desc: "Deep dive into CNNs, RNNs, and early-stage Transformers.",
        hours: "188+ Hours",
        projects: "6 Projects",
        extra: null,
        icon: Icon2,
      },
    ],
    partBTitle: "Agentic AI",
    partBBadge: "Advanced Track",
    partBItems: [
      {
        id: 1,
        title: "LLMs & RAG Systems",
        desc: "Building production-grade retrieval architectures and prompt pipelines.",
        hours: "150+ Hours",
        projects: "3 Enterprise Projects",
        extra: null,
        icon: Icon3,
      },
      {
        id: 2,
        title: "Agent Frameworks",
        desc: "Mastering CrewAI, LangGraph, and multi-agent orchestration.",
        hours: "200+ Lab Hours",
        projects: "Capstone Lab",
        extra: null,
        icon: Icon4,
      },
    ],
  },
  iiitb: {
    partATitle: "Applied AI & MLOps",
    partABadge: "Core Track",
    partAItems: [
      {
        id: 1,
        title: "Advanced Python & Data Engineering",
        desc: "Data pipelines, SQL, and high-performance computing frameworks.",
        hours: "140+ Hours",
        projects: "5 Projects",
        extra: "Cloud Setup",
        icon: Icon1,
      },
      {
        id: 2,
        title: "MLOps & Model Deployment",
        desc: "Deploying models with Docker, Kubernetes, and FastAPI.",
        hours: "160+ Hours",
        projects: "4 Projects",
        extra: null,
        icon: Icon2,
      },
    ],
    partBTitle: "Generative AI Specialization",
    partBBadge: "Expert Track",
    partBItems: [
      {
        id: 1,
        title: "Fine-Tuning & Prompt Engineering",
        desc: "LoRA, QLoRA, and custom model tuning on enterprise datasets.",
        hours: "170+ Hours",
        projects: "4 Enterprise Projects",
        extra: null,
        icon: Icon3,
      },
      {
        id: 2,
        title: "Autonomous Agents & Systems",
        desc: "Building self-correcting agent loops and vector database scaling.",
        hours: "220+ Lab Hours",
        projects: "Live Capstone",
        extra: null,
        icon: Icon4,
      },
    ],
  },
};

const CurriculumComparison = () => {
  const [activeTab, setActiveTab] = useState("iitkgp");

  const currentData = curriculumData[activeTab];

  return (
    <section className="curriculum-comp-section">
      <div className="container curriculum-comp-container">
        
        {/* Header Section */}
        <div className="curriculum-comp-header text-center">
          <h2>
            Gen AI & Agentic AI Course <span>Curriculum Comparison</span>
          </h2>
          
          {/* Clickable Switcher Toggle */}
          <div className="comp-toggle-box">
            <button
              className={`toggle-btn ${activeTab === "iitkgp" ? "active" : ""}`}
              onClick={() => setActiveTab("iitkgp")}
            >
              <span className="sub-title">IIT KGP Curriculum</span>
              <span className="main-title">Gen AI & Agentic AI Course</span>
            </button>

            <button
              className={`toggle-btn ${activeTab === "iiitb" ? "active" : ""}`}
              onClick={() => setActiveTab("iiitb")}
            >
              <span className="sub-title">IIITB Curriculum</span>
              <span className="main-title">EPGP in Applied AI & Agentic AI</span>
            </button>
          </div>
        </div>

        {/* Content Comparison Grid */}
        <div className="comparison-content-grid">
          
          {/* Part A Column */}
          <div className="comp-column">
            <div className="column-header">
              <h3>Part A <span>{currentData.partATitle}</span></h3>
              <span className="track-badge">{currentData.partABadge}</span>
            </div>

            <div className="comp-cards-list">
              {currentData.partAItems.map((item) => (
                <div className="comp-card" key={item.id}>
                  <div className="card-icon-box">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="card-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div className="card-meta">
                      <span><FaRegClock /> {item.hours}</span>
                      <span><FaRegFolderOpen /> {item.projects}</span>
                      {item.extra && <span><FiMonitor /> {item.extra}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part B Column */}
          <div className="comp-column">
            <div className="column-header">
              <h3>Part B <span>{currentData.partBTitle}</span></h3>
              <span className="track-badge">{currentData.partBBadge}</span>
            </div>

            <div className="comp-cards-list">
              {currentData.partBItems.map((item) => (
                <div className="comp-card" key={item.id}>
                  <div className="card-icon-box">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="card-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div className="card-meta">
                      <span><FaRegClock /> {item.hours}</span>
                      <span><FaRegFolderOpen /> {item.projects}</span>
                      {item.extra && <span><FiMonitor /> {item.extra}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CurriculumComparison;