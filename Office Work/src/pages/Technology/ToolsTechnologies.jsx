import React from "react";
import "../../assets/css/technology/ToolsTechnologies.css";

// Python icon image jo aapke folder mein hai
import PythonIcon from "../../assets/images/Python.png";

const toolsData = [
  { id: 1, name: "Python", image: PythonIcon },
  { id: 2, name: "NumPy", image: PythonIcon },
  { id: 3, name: "NumPy", image: PythonIcon },
  { id: 4, name: "SciPy", image: PythonIcon },
  { id: 5, name: "PyTorch", image: PythonIcon },
  { id: 6, name: "TensorFlow", image: PythonIcon },
  { id: 7, name: "LangChain", image: PythonIcon },
  { id: 8, name: "HuggingFace", image: PythonIcon }, // Agar iski alag image ho toh variable change kar sakte hain
  { id: 9, name: "AWS", image: PythonIcon },
  { id: 10, name: "Azure", image: PythonIcon },
  { id: 11, name: "Docker", image: PythonIcon },
  { id: 12, name: "K8s", image: PythonIcon },
];

const ToolsTechnologies = () => {
  return (
    <section className="tools-tech-section">
      <div className="container tools-tech-container">
        
        {/* Header Section */}
        <div className="tools-tech-header text-center">
          <h2>
            Tools & Technologies <span>You'll Learn</span>
          </h2>
        </div>

        {/* Grid Cards List */}
        <div className="tools-grid">
          {toolsData.map((tool) => (
            <div className="tool-card" key={tool.id}>
              <div className="tool-icon-box">
                <img src={tool.image} alt={tool.name} />
              </div>
              <h4>{tool.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ToolsTechnologies;