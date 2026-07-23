// import React from "react";
// import "../assets/css/InstructionSection.css";

// import Teacher from "../assets/images/master.png";
// import CardLine from "../assets/images/cards-lines.svg";
// import companylogo from "../assets/images/teacher-company.png";

// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// const instructors = [
//   {
//     id: 1,
//     bg: "blue",
//     name: "Pramanth Raj Sinha",
//     role: "Founder & Trustee",
//     company: companylogo,
//     desc: "Former McKinsey Partner, Co-Founder & Trustee of Ashoka University, and PhD holder in Mechanical.....",
//   },
//   {
//     id: 2,
//     bg: "cyan",
//     name: "Pramanth Raj Sinha",
//     role: "Founder & Trustee",
//     company: companylogo,
//     desc: "Former McKinsey Partner, Co-Founder & Trustee of Ashoka University, and PhD holder in Mechanical.....",
//   },
//   {
//     id: 3,
//     bg: "green",
//     name: "Pramanth Raj Sinha",
//     role: "Founder & Trustee",
//     company: companylogo,
//     desc: "Former McKinsey Partner, Co-Founder & Trustee of Ashoka University, and PhD holder in Mechanical.....",
//   },
// ];

// const InstructionSection = () => {
//   return (
//     <section className="instruction-section">
//       <div className="container">
//         {/* Header */}

//         <div className="instruction-header">
//           <div>
//             <span className="instruction-tag">INSTRUCTORS</span>

//             <h2>
//               Master your craft with
//               <span> renowned faculty</span>
//             </h2>

          
//           </div>

//           <a href="/" className="view-course">
//             View All Courses
//             <MdKeyboardArrowRight size={24} />
//           </a>
//         </div>

//         {/* Cards */}

//         <div className="instruction-wrapper">
//           <button className="instruction-arrow left">
//             <MdKeyboardArrowLeft />
//           </button>

//           <div className="instruction-grid">
//             {instructors.map((item) => (
//               <div key={item.id} className={`instruction-card ${item.bg}`}>
//                 <img src={CardLine} alt="" className="card-lines" />
//                 <img src={Teacher} alt={item.name} className="teacher-image" />

//                 <h3>{item.name}</h3>

//                 <h4>{item.role}</h4>
//                 <div className="card-desc">
//                   <p className="working">
//                     Working at
//                     {/* <strong>{item.company}</strong> */}
//                     <img src={companylogo} alt="" />
//                   </p>

//                   <p className="teacher-desc">{item.desc}</p>

//                   <div className="social">
//                     <h5>View Social Media Profile</h5>

//                     <div className="social-icons">
//   <span className="facebook">
//     <FaFacebookF />
//   </span>

//   <span className="twitter">
//     <FaTwitter />
//   </span>

//   <span className="linkedin">
//     <FaLinkedinIn />
//   </span>

//   <span className="youtube">
//     <FaYoutube />
//   </span>
// </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="instruction-arrow right">
//             <MdKeyboardArrowRight />
//           </button>
//         </div>

//         {/* Dots */}

//         {/* <div className="instruction-dots">
//           <span></span>
//           <span></span>
//           <span className="active"></span>
//         </div> */}

//         <div className="slider-dots">
//           <span className="dot"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//           <span className="dot active"></span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InstructionSection;



import React from "react";
import "../assets/css/InstructionSection.css";

import Teacher from "../assets/images/master.png";
import CardLine from "../assets/images/cards-lines.svg";
import companylogo from "../assets/images/teacher-company.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const instructors = [
  {
    id: 1,
    bg: "blue",
    name: "Pramanth Raj Sinha",
    role: "Founder & Trustee",
    company: companylogo,
    desc: "Former McKinsey Partner, Co-Founder & Trustee of Ashoka University, and PhD holder in Mechanical.....",
  },
  {
    id: 2,
    bg: "cyan",
    name: "Pramanth Raj Sinha",
    role: "Founder & Trustee",
    company: companylogo,
    desc: "Former McKinsey Partner, Co-Founder & Trustee of Ashoka University, and PhD holder in Mechanical.....",
  },
  {
    id: 3,
    bg: "green",
    name: "Pramanth Raj Sinha",
    role: "Founder & Trustee",
    company: companylogo,
    desc: "Former McKinsey Partner, Co-Founder & Trustee of Ashoka University, and PhD holder in Mechanical.....",
  },
];

const InstructionSection = () => {
  return (
    <section className="instruction-section">
      {/* ── Yahan instruction-container add kiya gaya hai ── */}
      <div className="container instruction-container">
        
        {/* Header */}
        <div className="instruction-header">
          <div>
            <span className="instruction-tag">INSTRUCTORS</span>
            <h2>
              Master your craft with
              <span> renowned faculty</span>
            </h2>
          </div>

          <a href="/" className="view-course">
            View All Courses
            <MdKeyboardArrowRight size={24} />
          </a>
        </div>

        {/* Cards */}
        <div className="instruction-wrapper">
          <button className="instruction-arrow left">
            <MdKeyboardArrowLeft />
          </button>

          <div className="instruction-grid">
            {instructors.map((item) => (
              <div key={item.id} className={`instruction-card ${item.bg}`}>
                <img src={CardLine} alt="" className="card-lines" />
                <img src={Teacher} alt={item.name} className="teacher-image" />

                <h3>{item.name}</h3>
                <h4>{item.role}</h4>
                
                <div className="card-desc">
                  <p className="working">
                    Working at
                    <img src={companylogo} alt="" />
                  </p>

                  <p className="teacher-desc">{item.desc}</p>

                  <div className="social">
                    <h5>View Social Media Profile</h5>

                    <div className="social-icons">
                      <span className="facebook">
                        <FaFacebookF />
                      </span>
                      <span className="twitter">
                        <FaTwitter />
                      </span>
                      <span className="linkedin">
                        <FaLinkedinIn />
                      </span>
                      <span className="youtube">
                        <FaYoutube />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="instruction-arrow right">
            <MdKeyboardArrowRight />
          </button>
        </div>

        {/* Dots */}
        <div className="slider-dots" style={{marginTop: 40}}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
        </div>
      </div>
    </section>
  );
};

export default InstructionSection;