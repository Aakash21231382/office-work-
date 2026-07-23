import React from "react";
import "../../assets/css/technology/CourseProjects.css";
import { FaCheck } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

// ChatGPT icon image
import ChatGptIcon from "../../assets/images/ChatGpt.png";

const projectsData = [
  {
    id: 1,
    title: "Create ShopAssist AI",
    description: "A conversational chatbot that provides shopping recommendations to users based on their preferences.",
    skills: ["ChatGPT", "GPT 3.5/4", "OpenAI API", "Whisper API", "BERT", "RLHF", "Flask"]
  },
  {
    id: 2,
    title: "Create ShopAssist AI",
    description: "A conversational chatbot that provides shopping recommendations to users based on their preferences.",
    skills: ["ChatGPT", "GPT 3.5/4", "OpenAI API", "Whisper API", "BERT", "RLHF", "Flask"]
  },
  {
    id: 3,
    title: "Create ShopAssist AI",
    description: "A conversational chatbot that provides shopping recommendations to users based on their preferences.",
    skills: ["ChatGPT", "GPT 3.5/4", "OpenAI API", "Whisper API", "BERT", "RLHF", "Flask"]
  },
  {
    id: 4,
    title: "Create ShopAssist AI",
    description: "A conversational chatbot that provides shopping recommendations to users based on their preferences.",
    skills: ["ChatGPT", "GPT 3.5/4", "OpenAI API", "Whisper API", "BERT", "RLHF", "Flask"]
  },
  {
    id: 5,
    title: "Create ShopAssist AI",
    description: "A conversational chatbot that provides shopping recommendations to users based on their preferences.",
    skills: ["ChatGPT", "GPT 3.5/4", "OpenAI API", "Whisper API", "BERT", "RLHF", "Flask"]
  }
];

const CourseProjects = () => {
  return (

   

    <section className="course-projects-section">
      <div className="container course-projects-container">
        
        {/* Header Section */}
        <div className="course-projects-header">
          <div className="title-box">
            <h2>
              Gen AI & Agentic AI Course <br />
              <span>Projects Learn</span> by Doing
            </h2>
          </div>
          <div className="projects-badge">
            <FaRegFileAlt className="badge-icon" />
            <span>Projects <strong>10+</strong></span>
          </div>
        </div>

        {/* Projects Cards List */}
        <div className="projects-list">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-icon-box">
                <img src={ChatGptIcon} alt="ChatGPT Logo" />
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="skills-section">
                  <span className="skills-label">Skills learned</span>
                  <div className="skills-tags">
                    {project.skills.map((skill, index) => (
                      <span className="skill-tag" key={index}>
                        <span className="skill-check"><FaCheck /></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>





   
  );
};

export default CourseProjects;