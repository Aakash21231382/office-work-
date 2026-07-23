// import React from "react";
// import "../assets/css/University.css";
// import LOGO1 from "../assets/images/logo1.png";
// import LOGO2 from "../assets/images/logo2.png";
// import LOGO3 from "../assets/images/logo3.png";
// import LOGO4 from "../assets/images/logo4.png";
// import LOGO5 from "../assets/images/logo5.png";
// import LOGO6 from "../assets/images/logo6.png";
// import LOGO7 from "../assets/images/logo7.png";

// const logos = [
//   {
//     id: 1,
//     image: LOGO1,
//     name: "Logo 1",
//   },
//   {
//     id: 2,
//     image: LOGO2,
//     name: "Logo 2",
//   },
//   {
//     id: 3,
//     image: LOGO1,
//     name: "Logo 3",
//   },
//   {
//     id: 4,
//     image: LOGO3,
//     name: "Logo 4",
//   },
//   {
//     id: 5,
//     image: LOGO4,
//     name: "Logo 5",
//   },
//   {
//     id: 6,
//     image: LOGO5,
//     name: "Logo 6",
//   },
//   {
//     id: 7,
//     image: LOGO6,
//     name: "Logo 7",
//   },
//   {
//     id: 8,
//     image: LOGO7,
//     name: "Logo 8",
//   },
//   {
//     id: 8,
//     image: LOGO2,
//     name: "Logo 9",
//   },
// ];

// const University = () => {
//   return (
//     <section className="university-section">
//       <div className="left-circle"></div>
//       <div className="right-circle"></div>
//       <div className="dot-pattern"></div>

//       <div className="university-container container">
//         <div className="university-left">
//           <span className="certificate-tag">Earn Certificates from</span>

//           <h2>
//             Prestigious <br /> universities
//           </h2>

//           <p>
//             We partner with world-renowned universities so you earn certificates
//             recognised by organisations across the globe.
//           </p>

//           <button>View all Universities</button>
//         </div>
//         <div className="university-right">
//           {logos.map((item) => (
//             <div className="logo-box" key={item.id}>
//               <img src={item.image} alt={item.name} />
//             </div>
//           ))}

// <div className="slider-dots" style={{marginTop:100}}>
//   <span className="dot"></span>
//   <span className="dot"></span>
//   <span className="dot"></span>
//   <span className="dot active"></span>
// </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default University;





import React from "react";
import "../assets/css/University.css";
import LOGO1 from "../assets/images/logo1.png";
import LOGO2 from "../assets/images/logo2.png";
import LOGO3 from "../assets/images/logo3.png";
import LOGO4 from "../assets/images/logo4.png";
import LOGO5 from "../assets/images/logo5.png";
import LOGO6 from "../assets/images/logo6.png";
import LOGO7 from "../assets/images/logo7.png";

const logos = [
  { id: 1, image: LOGO1, name: "Logo 1" },
  { id: 2, image: LOGO2, name: "Logo 2" },
  { id: 3, image: LOGO1, name: "Logo 3" },
  { id: 4, image: LOGO3, name: "Logo 4" },
  { id: 5, image: LOGO4, name: "Logo 5" },
  { id: 6, image: LOGO5, name: "Logo 6" },
  { id: 7, image: LOGO6, name: "Logo 7" },
  { id: 8, image: LOGO7, name: "Logo 8" },
  { id: 9, image: LOGO2, name: "Logo 9" },
];

const University = () => {
  return (
    <section className="university-section">
      <div className="left-circle"></div>
      <div className="right-circle"></div>
      <div className="dot-pattern"></div>

      <div className="university-container container">
        <div className="university-left">
          <span className="certificate-tag">Earn Certificates from</span>

          <h2>
            Prestigious <br /> universities
          </h2>

          <p>
            We partner with world-renowned universities so you earn certificates
            recognised by organisations across the globe.
          </p>

          <button>View all Universities</button>
        </div>
        <div className="university-right">
          {logos.map((item) => (
            <div className="logo-box" key={item.id}>
              <img src={item.image} alt={item.name} />
            </div>
          ))}

          <div className="slider-dots" style={{ marginTop: 100 }}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default University;