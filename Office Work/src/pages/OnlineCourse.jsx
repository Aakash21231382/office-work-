// import React from "react";
// import "../assets/css/OnlineCourse.css";
// import { onlineCourses, courseCategories, courseFeatures } from "../data/OnlineCourse";
// import { FaCheckCircle, FaArrowRight, FaChevronLeft, FaChevronRight, FaDownload, FaCheck } from "react-icons/fa";
// import { MdKeyboardArrowRight } from "react-icons/md";

// const OnlineCourse = () => {
//   return (
//     <section className="online-course-section">

//       <div className="container">

//         {/* Heading */}
//         <div className="online-course-heading">
//           <h2>
//             Online Courses with <span>Placement Assistance</span>
//           </h2>
//         </div>

//         {/* Category */}
//         <div className="course-category">
//           {courseCategories.map((category, index) => (
//             <button
//               key={index}
//               className={index === 0 ? "active-category" : ""}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Features */}
//         <div className="course-feature-row">
//           {courseFeatures.map((feature, index) => (
//             <div className="oc-feature-item" key={index}>
//               {/* <FaCheckCircle className="oc-check-icon" /> */}
//               <FaCheck className="oc-check-icon"/>
//               <span>{feature}</span>
//             </div>
//           ))}
//           <a href="/" className="oc-view-all">
//             View All Courses <MdKeyboardArrowRight size={24} />
//           </a>
//         </div>

//         {/* Cards */}
//         <div className="oc-card-wrapper">

//           {/* <button className="oc-slider-btn oc-left-btn ">
//             <FaChevronLeft />
//           </button> */}



// <button className="slider-arrow slider-arrow-left">
//             <span>&#8249;</span>
//           </button>

//           <div className="row g-4">
//             {onlineCourses.map((course) => (
//               <div className="col-lg-4 col-md-6 col-12" key={course.id}>
//                 <div className="oc-card">

//                   {/* Image */}
//                   <div className="oc-card-image">
//                     <img src={course.image} alt={course.title} />
//                   </div>

//                   {/* Content */}
//                   <div className="oc-card-content">

//                     <h3>{course.title}</h3>
//                     <p className="oc-subtitle">{course.subtitle}</p>

//                     <ul className="oc-features-list">
//                       {course.features.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>

//                     {/* Skills */}
//                     <div className="oc-skills-row">
//                       <span className="oc-skills-label">Skills and Tools</span>
//                       <div className="oc-skill-icons">
//                         {course.skills.map((skill, i) => (
//                           <img key={i} src={skill} alt="" />
//                         ))}
//                         <span className="oc-more-skill">& {course.extraSkills} more</span>
//                       </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="oc-card-buttons">
//                       <a href={course.program} className="oc-btn-view">View Program</a>
//                       <a href={course.brochure} className="oc-btn-brochure">
//                         Brochure <FaDownload size={12} />
//                       </a>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* <button className="oc-slider-btn oc-right-btn">
//             <FaChevronRight />
//           </button> */}
//   <button className="slider-arrow slider-arrow-right">
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

// export default OnlineCourse;








import React from "react";
import "../assets/css/OnlineCourse.css";
import { onlineCourses, courseCategories, courseFeatures } from "../data/OnlineCourse";
import { FaCheckCircle, FaArrowRight, FaChevronLeft, FaChevronRight, FaDownload, FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const OnlineCourse = () => {
  return (
    <section className="online-course-section">
      {/* ── oc-container class add ki hai ── */}
      <div className="container oc-container">

        {/* Heading */}
        <div className="online-course-heading">
          <h2>
            Online Courses with <span>Placement Assistance</span>
          </h2>
        </div>

        {/* Category */}
        <div className="course-category">
          {courseCategories.map((category, index) => (
            <button
              key={index}
              className={index === 0 ? "active-category" : ""}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Features */}
        <div className="course-feature-row">
          {courseFeatures.map((feature, index) => (
            <div className="oc-feature-item" key={index}>
              <FaCheck className="oc-check-icon"/>
              <span>{feature}</span>
            </div>
          ))}
          <a href="/" className="oc-view-all">
            View All Courses <MdKeyboardArrowRight size={24} />
          </a>
        </div>

        {/* Cards */}
        <div className="oc-card-wrapper">

          <button className="slider-arrow slider-arrow-left">
            <span>&#8249;</span>
          </button>

          <div className="row g-4">
            {onlineCourses.map((course) => (
              <div className="col-lg-4 col-md-6 col-12" key={course.id}>
                <div className="oc-card">

                  {/* Image */}
                  <div className="oc-card-image">
                    <img src={course.image} alt={course.title} />
                  </div>

                  {/* Content */}
                  <div className="oc-card-content">

                    <h3>{course.title}</h3>
                    <p className="oc-subtitle">{course.subtitle}</p>

                    <ul className="oc-features-list">
                      {course.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="oc-skills-row">
                      <span className="oc-skills-label">Skills and Tools</span>
                      <div className="oc-skill-icons">
                        {course.skills.map((skill, i) => (
                          <img key={i} src={skill} alt="" />
                        ))}
                        <span className="oc-more-skill">& {course.extraSkills} more</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="oc-card-buttons">
                      <a href={course.program} className="oc-btn-view">View Program</a>
                      <a href={course.brochure} className="oc-btn-brochure">
                        Brochure <FaDownload size={12} />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

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

export default OnlineCourse;