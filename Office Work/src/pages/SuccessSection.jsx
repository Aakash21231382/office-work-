

// import React from "react";
// import "../assets/css/SuccessSection.css";

// import Learning1 from "../assets/images/learning1.png";
// import Learning2 from "../assets/images/learning2.png";
// import Learning3 from "../assets/images/learning3.png";
// // import Student from "../assets/images/student.png";
// import Student from '../assets/images/student.png'

// import { FaPlay, FaPlayCircle } from "react-icons/fa";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// const SuccessSection = () => {
//   return (
//     <section className="success-section">

//       {/* ==================== TOP STATS ==================== */}

//       <div className="container">

//         <div className="success-heading">

//           <span className="success-tag">
//             YOUR GOALS ARE OUR GOALS
//           </span>

//           <h2>
//             Invest in yourself today. Unlock
//             <span> success for a lifetime.</span>
//           </h2>

//         </div>

//         <div className="success-stats">

//           <div className="success-item">
//             <h3>15 Million</h3>
//             <p>STUDENTS AND ALUMNI</p>
//           </div>

//           <div className="success-item">
//             <h3>4.6/5</h3>
//             <p>PROGRAM RATING</p>
//           </div>

//           <div className="success-item">
//             <h3>50%</h3>
//             <p>AVG. HIKE POST PROGRAM*</p>
//           </div>

//           <div className="success-item">
//             <h3>4500+</h3>
//             <p>HIRING COMPANIES*</p>
//           </div>

//         </div>

//       </div>

//       {/* ==================== STORY CARD ==================== */}

//       <div className="container">

//         <div className="story-wrapper">

//           <button className="story-arrow left">
//             <MdKeyboardArrowLeft />
//           </button>

//           <div className="story-card">

//             {/* Left */}

//             <div className="story-content">

//               <h3>
//                 “I was able to restart my career with the Data Science
//                 and Engineering course”
//               </h3>

//               <p className="story-desc">
//                 <strong>MENTORINGMINDS</strong> Academy helped me put together an
//                 online portfolio of the projects I worked on. This came in handy
//                 during interviews. Within 1 month of completing the course, I
//                 cracked the role of ML Engineer at Aviso AI.
//               </p>

//               <h4>Alfred Elver</h4>

//               <span>
//                 Post Graduate Program in Data Science and Engineering
//               </span>

//               <div className="story-dots">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <span className="active"></span>
//               </div>

//             </div>

//             {/* Right */}

//             <div className="story-image">

//               <img src={Student} alt="Student" />

//               <button className="watch-btn">
//                 <FaPlayCircle />
//                 Watch story
//               </button> 

//            <div className="student-info">

//                 <h4>ALFRED ELVER</h4>

//                 <p>ML Engineer, Aviso AI</p>

//               </div>

//             </div>

//           </div>

//           <button className="story-arrow right">
//             <MdKeyboardArrowRight />
//           </button>

//         </div>

//       </div>

//       {/* ==================== LEARNERS BANNER ==================== */}

//       <div className="container">

//         <div className="learners-banner">

//         <div className="circle-left"></div>
//          <div className="circle-right"></div>
//           <div className="learners-dots"></div>

//           <div className="learner-content">

//             <div className="learner-top">

//               <div className="learner-images">

//                 <img src={Learning1} alt="" />
//                 <img src={Learning2} alt="" />
//                 <img src={Learning3} alt="" />
//                 <img src={Learning1} alt="" />

//               </div>

//               <h4>WHAT OUR LEARNERS SAY</h4>

//             </div>

//             <h2>
//               From promotions to transitions,
//               <span> MENTORINGMINDS </span>
//               opens new doors
//             </h2>

//             <p>
//               Our learners share their experiences about their
//               MENTORINGMINDS journey and outcomes.
//             </p>

//           </div>

//           <button className="testimonial-btn">
//             Watch Testimonials
//             <FaPlayCircle />
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default SuccessSection;




import React from "react";
import "../assets/css/SuccessSection.css";

import Learning1 from "../assets/images/learning1.png";
import Learning2 from "../assets/images/learning2.png";
import Learning3 from "../assets/images/learning3.png";
import Student from '../assets/images/student.png'

import { FaPlay, FaPlayCircle } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SuccessSection = () => {
  return (
    <section className="success-section">

      {/* ==================== TOP STATS ==================== */}

      <div className="container success-container">

        <div className="success-heading">
          <span className="success-tag">
            YOUR GOALS ARE OUR GOALS
          </span>
          <h2>
            Invest in yourself today. Unlock
            <span> success for a lifetime.</span>
          </h2>
        </div>

        <div className="success-stats">
          <div className="success-item">
            <h3>15 Million</h3>
            <p>STUDENTS AND ALUMNI</p>
          </div>
          <div className="success-item">
            <h3>4.6/5</h3>
            <p>PROGRAM RATING</p>
          </div>
          <div className="success-item">
            <h3>50%</h3>
            <p>AVG. HIKE POST PROGRAM*</p>
          </div>
          <div className="success-item">
            <h3>4500+</h3>
            <p>HIRING COMPANIES*</p>
          </div>
        </div>

      </div>

      {/* ==================== STORY CARD ==================== */}

      <div className="container success-container">

        <div className="story-wrapper">

          <button className="story-arrow left">
            <MdKeyboardArrowLeft />
          </button>

          <div className="story-card">

            {/* Left */}
            <div className="story-content">
              <h3>
                “I was able to restart my career with the Data Science
                and Engineering course”
              </h3>
              <p className="story-desc">
                <strong>MENTORINGMINDS</strong> Academy helped me put together an
                online portfolio of the projects I worked on. This came in handy
                during interviews. Within 1 month of completing the course, I
                cracked the role of ML Engineer at Aviso AI.
              </p>
              <h4>Alfred Elver</h4>
              <span>
                Post Graduate Program in Data Science and Engineering
              </span>

              <div className="story-dots">
                <span></span>
                <span></span>
                <span></span>
                <span className="active"></span>
              </div>
            </div>

            {/* Right */}
            <div className="story-image">
              <img src={Student} alt="Student" />
              <button className="watch-btn">
                <FaPlayCircle />
                Watch story
              </button> 

              <div className="student-info">
                <h4>ALFRED ELVER</h4>
                <p>ML Engineer, Aviso AI</p>
              </div>
            </div>

          </div>

          <button className="story-arrow right">
            <MdKeyboardArrowRight />
          </button>

        </div>

      </div>

      {/* ==================== LEARNERS BANNER ==================== */}

      <div className="container success-container">

        <div className="learners-banner">

          <div className="circle-left"></div>
          <div className="circle-right"></div>
          <div className="learners-dots"></div>

          <div className="learner-content">

            <div className="learner-top">
              <div className="learner-images">
                <img src={Learning1} alt="" />
                <img src={Learning2} alt="" />
                <img src={Learning3} alt="" />
                <img src={Learning1} alt="" />
              </div>
              <h4>WHAT OUR LEARNERS SAY</h4>
            </div>

            <h2>
              From promotions to transitions,
              <span> MENTORINGMINDS </span>
              opens new doors
            </h2>

            <p>
              Our learners share their experiences about their
              MENTORINGMINDS journey and outcomes.
            </p>

          </div>

          <button className="testimonial-btn">
            Watch Testimonials
            <FaPlayCircle />
          </button>

        </div>

      </div>

    </section>
  );
};

export default SuccessSection;