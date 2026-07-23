// import React, { useState } from "react";
// import "../assets/css/ChooseCareer.css";
// import { courses } from "../data/coursesData";
// import CourseCard from "../component/CourseCard";
// import { Link } from "react-router-dom";
// import { MdKeyboardArrowRight } from "react-icons/md";

// import Agentic   from "../assets/images/Agentic.png";
// import Artifical from "../assets/images/Artifical.png";
// import Doctorate from "../assets/images/Doctorate.png";
// import Machine   from "../assets/images/machine.png";
// import DataScience from "../assets/images/learning.png";

// const tabs = [
//   { key: "agentic",    label: "Agentic AI",            count: 6,  img: Agentic   },
//   { key: "ai",         label: "Artificial Intelligence",count: 10, img: Artifical },
//   { key: "doctorate",  label: "Doctorate",              count: 10, img: Doctorate },
//   { key: "ml",         label: "Machine Learning",       count: 15, img: Machine   },
//   { key: "ds",         label: "Data Science",           count: 7,  img: DataScience },
// ];

// const ChooseCareer = () => {
//   const [activeTab, setActiveTab] = useState("agentic");

//   return (
//     <section className="career-section">
//       <div className="container career-container">

//         {/* ── Heading ── */}
//         <div className="career-heading">
//           <h2>
//             Choose <span>Your Career</span> Path
//           </h2>
//           <p>Discover industry-leading programs designed to accelerate your professional growth.</p>
//         </div>

//         {/* ── Category Tabs ── */}
//         <div className="career-tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab.key}
//               className={`career-tab ${activeTab === tab.key ? "active" : ""}`}
//               onClick={() => setActiveTab(tab.key)}
//             >
//               <img src={tab.img} alt={tab.label} />
//               <span>{tab.label}</span>
//               <strong>({tab.count})</strong>
//             </button>
//           ))}
//         </div>

//         {/* ── Top Row ── */}
//         <div className="career-top">
//           <h3>
//             Top AI <span>Courses ({tabs.find(t => t.key === activeTab)?.count})</span>
//           </h3>
//           <Link to="#" className="view-all-btn">
//             View All Course <MdKeyboardArrowRight size={24} />
//           </Link>
//         </div>

//         {/* ── Course Cards with Nav Arrows ── */}
//         <div className="course-slider-wrapper">
//           <div className="row g-4">
//             {courses.map((course) => (
//               <div className="col-lg-4 col-md-6 col-12" key={course.id}>
//                 <CourseCard course={course} />
//               </div>
//             ))}
//           </div>

//           <button className="slider-arrow slider-arrow-left">
//             <span>&#8249;</span>
//           </button>

//           <button className="slider-arrow slider-arrow-right">
//             <span>&#8250;</span>
//           </button>
//         </div>

//       </div>

//       <div className="slider-dots">
//   <span className="dot"></span>
//   <span className="dot"></span>
//   <span className="dot"></span>
//   <span className="dot active"></span>
// </div>
//     </section>
//   );
// };

// export default ChooseCareer;

import React, { useState } from "react";
import "../assets/css/ChooseCareer.css";
import { courses } from "../data/coursesData";
import CourseCard from "../component/CourseCard";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

import Agentic from "../assets/images/Agentic.png";
import Artifical from "../assets/images/Artifical.png";
import Doctorate from "../assets/images/Doctorate.png";
import Machine from "../assets/images/machine.png";
import DataScience from "../assets/images/learning.png";

const tabs = [
  { key: "agentic", label: "Agentic AI", count: 6, img: Agentic },
  { key: "ai", label: "Artificial Intelligence", count: 10, img: Artifical },
  { key: "doctorate", label: "Doctorate", count: 10, img: Doctorate },
  { key: "ml", label: "Machine Learning", count: 15, img: Machine },
  { key: "ds", label: "Data Science", count: 7, img: DataScience },
];

const ChooseCareer = () => {
  const [activeTab, setActiveTab] = useState("agentic");

  return (
    <section className="career-section">
      <div className="container career-container">
        {/* ── Heading ── */}
        <div className="career-heading">
          <h2>
            Choose <span>Your Career</span> Path
          </h2>
          <p>
            Discover industry-leading programs designed to accelerate your
            professional growth.
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <div className="career-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`career-tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <img src={tab.img} alt={tab.label} />
              <span>{tab.label}</span>
              <strong>({tab.count})</strong>
            </button>
          ))}
        </div>

        {/* ── Top Row ── */}
        <div className="career-top">
          <h3>
            Top AI{" "}
            <span>
              Courses ({tabs.find((t) => t.key === activeTab)?.count})
            </span>
          </h3>
          <Link to="#" className="view-all-btn">
            View All Course <MdKeyboardArrowRight size={24} />
          </Link>
        </div>

        {/* ── Course Cards with Nav Arrows ── */}
        <div className="course-slider-wrapper">
          <div className="row g-4">
            {courses.slice(0, 3).map((course) => (
              <div className="col-lg-4 col-md-6 col-12" key={course.id}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <button className="slider-arrow slider-arrow-left">
            <span>&#8249;</span>
          </button>

          <button className="slider-arrow slider-arrow-right">
            <span>&#8250;</span>
          </button>
        </div>
      </div>

      <div className="slider-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot active"></span>
      </div>
    </section>
  );
};

export default ChooseCareer;
