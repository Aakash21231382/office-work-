// import React from "react";
// import "../assets/css/AwardsSection.css";

// import Main from "../assets/images/main.png";
// import FT from "../assets/images/FT.png";
// import YouTube from "../assets/images/youtube.png";

// import  IndianSupport from '../assets/images/IndianSupport.png'
// import GlobalSupport from '../assets/images/GlobalSupport.png'

// const awards = [
//   {
//     id: 1,
//     image: YouTube,
//     data: "You Tube India",
//     title: "YouTube Works Award 2023",
//     desc: "MENTORINGMINDS won the YouTube Works Award 2023 for Local Correction for its in-house campaign.",
//   },
//   {
//     id: 2,
//     image: FT,
//     data: "FT/IFC transformational Business Conference and...",
//     title: "Special Commendation",
//     desc: "UG's DS Program wins Special Commendation by FT/IFC Awards.",
//   },
//   {
//     id: 3,
//     image: FT,
//     data: "FT/IFC transformational Business Conference and...",
//     title: "Special Commendation",
//     desc: "UG's DS Program wins Special Commendation by FT/IFC Awards.",
//   },
// ];

// const AwardsSection = () => {
//   return (

//     <>
    
//     <section className="awards-section">
//       {/* Background */}
//       <div className="award-circle-left"></div>
//       <div className="award-circle-top"></div>
//       <div className="award-circle-right"></div>
//       <div className="award-grid"></div>

//       <div className="container">
//         {/* Heading */}
//         <div className="award-heading">
//           <h2 className="award-title">
//             Awards & <span>Accomplishments</span>
//           </h2>
//         </div>

//         <div className="award-wrapper">
//           {/* Left Image */}
//           <div className="award-left">
//             <img src={Main} alt="Awards" />
//           </div>

//           {/* Right */}
//           <div className="award-right">
//             <div className="award-cards">
//               {awards.map((item) => (
//                 <div className="award-card" key={item.id}>
//                   <img src={item.image} alt={item.title} />
//                   <h5>{item.data}</h5>

//                   <h4>{item.title}</h4>

//                   {item.year && <div className="award-year">{item.year}</div>}

//                   <p>{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="slider-dots">
//               <span className="dot"></span>
//               <span className="dot"></span>
//               <span className="dot"></span>
//               <span className="dot active"></span>
//             </div>
//           </div>
//         </div>
//       </div>

//     </section>

//     <div>

//     {/* =========================================
//     LEARNER SUPPORT
// ========================================= */}

// <div className="learner-support">

//   <h2>
//     <span>MENTORINGMINDS</span> Learner Support
//   </h2>

//   <p>
//     Talk to our experts. We are available 7 days a week, 10 AM to 7 PM
//   </p>

//   <div className="support-cards">

//     <div className="support-card orange">
//       <img src={IndianSupport} alt="Indian Support" />
//     </div>

//     <div className="support-card blue">
//       <img src={GlobalSupport} alt="Global Support" />
//     </div>

//   </div>

// </div>
//     </div>
    
//     </>
 
//   );
// };

// export default AwardsSection;




import React from "react";
import "../assets/css/AwardsSection.css";

import Main from "../assets/images/main.png";
import FT from "../assets/images/FT.png";
import YouTube from "../assets/images/youtube.png";

import  IndianSupport from '../assets/images/IndianSupport.png'
import GlobalSupport from '../assets/images/GlobalSupport.png'

const awards = [
  {
    id: 1,
    image: YouTube,
    data: "You Tube India",
    title: "YouTube Works Award 2023",
    desc: "MENTORINGMINDS won the YouTube Works Award 2023 for Local Correction for its in-house campaign.",
  },
  {
    id: 2,
    image: FT,
    data: "FT/IFC transformational Business Conference and...",
    title: "Special Commendation",
    desc: "UG's DS Program wins Special Commendation by FT/IFC Awards.",
  },
  {
    id: 3,
    image: FT,
    data: "FT/IFC transformational Business Conference and...",
    title: "Special Commendation",
    desc: "UG's DS Program wins Special Commendation by FT/IFC Awards.",
  },
];

const AwardsSection = () => {
  return (
    <>
    <section className="awards-section">
      {/* Background */}
      <div className="award-circle-left"></div>
      <div className="award-circle-top"></div>
      <div className="award-circle-right"></div>
      <div className="award-grid"></div>

      {/* ── awards-container class add ki hai ── */}
      <div className="container awards-container">
        {/* Heading */}
        <div className="award-heading">
          <h2 className="award-title">
            Awards & <span>Accomplishments</span>
          </h2>
        </div>

        <div className="award-wrapper">
          {/* Left Image */}
          <div className="award-left">
            <img src={Main} alt="Awards" />
          </div>

          {/* Right */}
          <div className="award-right">
            <div className="award-cards">
              {awards.map((item) => (
                <div className="award-card" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <h5>{item.data}</h5>
                  <h4>{item.title}</h4>
                  {item.year && <div className="award-year">{item.year}</div>}
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="slider-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot active"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Learner support ke liye container wrapper add kiya hai ── */}
    <div className="container awards-container">
      {/* =========================================
      LEARNER SUPPORT
      ========================================= */}
      <div className="learner-support">
        <h2>
          <span>MENTORINGMINDS</span> Learner Support
        </h2>
        <p>
          Talk to our experts. We are available 7 days a week, 10 AM to 7 PM
        </p>
        <div className="support-cards">
          <div className="support-card orange">
            <img src={IndianSupport} alt="Indian Support" />
          </div>
          <div className="support-card blue">
            <img src={GlobalSupport} alt="Global Support" />
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default AwardsSection;