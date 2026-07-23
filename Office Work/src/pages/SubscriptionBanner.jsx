// import React from "react";
// import "../assets/css/SubscriptionBanner.css";
// import GirlImage from "../assets/images/girl.png";
// import { FaArrowRight, FaLightbulb, FaTrophy } from "react-icons/fa";
// import { BsStars } from "react-icons/bs";
// import { MdOutlineSmartToy, MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";
// import { TbCertificate } from "react-icons/tb";
// import { TiMessages } from "react-icons/ti";




// const features = [
//   {
//     icon: <BsStars />,
//     label: "Learn AI and more",
//     color: "#deeae5", // Purple
//   },
//   {
//     icon: <FaTrophy />,
//     label: "Prep for a certification",
//     color: "#BBE7D3", // Gold
//   },
//   {
//     icon: <TiMessages />,
//     label: "Practice with AI coaching",
//     color: "#efd99e", // Cyan
//   },
//   {
//     icon: <FaLightbulb />,
//     label: "Advance your career",
//     color: "#BBE7D3", // Orange
//   },
// ];
// const SubscriptionBanner = () => {
//   return (
//     <section className="sub-banner">

//       {/* dark decorative circles */}
//       <div className="sub-circle sub-circle-1" />
//       <div className="sub-circle sub-circle-2" />
//       <div className="sub-dots"></div>

//       <div className="container sub-inner">

//         {/* ── Left Content ── */}
//         <div className="sub-content">

//           <h2>
//             Build your career with a<br />
//             Personal Plan subscription
//           </h2>

//           <p className="sub-desc">
//             Subscribers save an average of ₹4,000+ in their first month,
//             stop paying per course. Join 5 lakh+ learners, starting at ₹500/month.
//           </p>

//           {/* Features grid */}
//           {/* <div className="sub-features">
//             {features.map((f, i) => (
//               <div className="sub-feature-item" key={i}>
//                 <span className="sub-feature-icon">{f.icon}</span>
//                 <span>{f.label}</span>
//               </div>
//             ))}
//           </div> */}

// <div className="sub-features">
//   {features.map((f, i) => (
//     <div className="sub-feature-item" key={i}>
//       <span
//         className="sub-feature-icon"
//         style={{ background: f.color }}
//       >
//         {f.icon}
//       </span>

//       <span>{f.label}</span>
//     </div>
//   ))}
// </div>

//           <button className="sub-btn">
//             Register Now <FaArrowRight size={14} />
//           </button>

//         </div>

//         {/* ── Right Image ── */}
//         <div className="sub-image">
//           <img src={GirlImage} alt="Student" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SubscriptionBanner;




import React from "react";
import "../assets/css/SubscriptionBanner.css";
import GirlImage from "../assets/images/girl.png";
import { FaArrowRight, FaLightbulb, FaTrophy } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { MdOutlineSmartToy, MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";

const features = [
  {
    icon: <BsStars />,
    label: "Learn AI and more",
    color: "#deeae5", // Purple
  },
  {
    icon: <FaTrophy />,
    label: "Prep for a certification",
    color: "#BBE7D3", // Gold
  },
  {
    icon: <TiMessages />,
    label: "Practice with AI coaching",
    color: "#efd99e", // Cyan
  },
  {
    icon: <FaLightbulb />,
    label: "Advance your career",
    color: "#BBE7D3", // Orange
  },
];
const SubscriptionBanner = () => {
  return (
    <section className="sub-banner">

      {/* dark decorative circles */}
      <div className="sub-circle sub-circle-1" />
      <div className="sub-circle sub-circle-2" />
      <div className="sub-dots"></div>

      <div className="container sub-inner">

        {/* ── Left Content ── */}
        <div className="sub-content">

          <h2>
            Build your career with a<br />
            Personal Plan subscription
          </h2>

          <p className="sub-desc">
            Subscribers save an average of ₹4,000+ in their first month,
            stop paying per course. Join 5 lakh+ learners, starting at ₹500/month.
          </p>

          <div className="sub-features">
            {features.map((f, i) => (
              <div className="sub-feature-item" key={i}>
                <span
                  className="sub-feature-icon"
                  style={{ background: f.color }}
                >
                  {f.icon}
                </span>

                <span>{f.label}</span>
              </div>
            ))}
          </div>

          <button className="sub-btn">
            Register Now <FaArrowRight size={14} />
          </button>

        </div>

        {/* ── Right Image ── */}
        <div className="sub-image">
          <img src={GirlImage} alt="Student" />
        </div>

      </div>
    </section>
  );
};

export default SubscriptionBanner;