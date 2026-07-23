// // import React from 'react';
// // import Image1 from '../assets/images/image1.png';
// // import Image2 from '../assets/images/image2.png';
// // import Image3 from '../assets/images/image3.png';
// // // import '../assets/css/Hero.css'; // Nayi CSS file yahan import karein

// // const Banner = () => {
// //   return (
// //     // data-bs-ride aur data-bs-interval images ko auto-slide karne ke liye hain
// //     <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      
// //       <div className="carousel-inner">
// //         <div className="carousel-item active">
// //           <img src={Image1} className="d-block w-100 hero-img" alt="First Slide" />
// //         </div>
// //         <div className="carousel-item">
// //           <img src={Image2} className="d-block w-100 hero-img" alt="Second Slide" />
// //         </div>
// //         <div className="carousel-item">
// //           <img src={Image3} className="d-block w-100 hero-img" alt="Third Slide" />
// //         </div>
// //       </div>

// //       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
// //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// //         <span className="visually-hidden">Previous</span>
// //       </button>
// //       <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
// //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
// //         <span className="visually-hidden">Next</span>
// //       </button>

// //     </div>



// //   );
// // };

// // export default Banner;


// import React from "react";
// import '../assets/css/Banner.css'
// import BannerBg from '../assets/images/Banner-Bg.svg'
// import BannerImage from '../assets/images/Banner-Image.png'
// import Container from '../assets/images/Container.png'
// const Banner = () => {
//   return (
//     <section
//     className="banner"
//     style={{
//       backgroundImage: `url(${BannerBg})`,
//     }}
//   >

//       <div className="banner-overlay conta"></div>

//       <div className="banner-container container">

//         <div className="banner-left">

//           <div className="tag">
//         Mentoringminds 🏆 Trusted by 50,000+ Students Across India
//           </div>
//           <div className="banner-contant" >
//           <h1>
//             Build a Career That
//             <span> Companies Want to Hire</span>
//           </h1>

//           <p>
//             Master AI, Data Science, Software Development, Business &
//             Digital Skills with Industry Experts.
//           </p>

//           <p className="small"
//           //  style={{fontWeight:400, fontSize:16, color: "#564336"}}

//           style={{
//             color: "#564336",
//             fontSize: "16px",
//             fontWeight: 400,
//             lineHeight: "24px",
//           }}
           
//            >
//             Mentoring Minds offers industry-focused certification programs
//             designed with top universities and leading companies. Learn through live clases, hands-on Projects,
//             one-on-one mentorship, dedicated placement support.
//           </p>
        
//           </div>
//           <div className="buttons">

//             <button className="btn1">
//               Book Free Counselling
//             </button>

//             <button className="btn2">
//               Explore Courses
//             </button>

//           </div>

//         </div>

//         <div className="banner-right">

//           <img
//             src={BannerImage}
//             alt=""
//           />

//           <div className="preview-card">

//             <div className="play">
//               <img src={Container} alt="" />
//             </div>

//             <div>
//               <small>Masterclass Preview</small>
//               <h4>Watch Free Session</h4>
//             </div>

//           </div>





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

// export default Banner;







import React from "react";
import '../assets/css/Banner.css'
import BannerBg from '../assets/images/Banner-Bg.svg'
import BannerImage from '../assets/images/Banner-Image.png'
import Container from '../assets/images/Container.png'

const Banner = () => {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${BannerBg})`,
      }}
    >
      <div className="banner-overlay conta"></div>

      <div className="banner-container container">
        <div className="banner-left">
          <div className="tag">
            Mentoringminds 🏆 Trusted by 50,000+ Students Across India
          </div>
          <div className="banner-contant">
            <h1>
              Build a Career That
              <span> Companies Want to Hire</span>
            </h1>

            <p>
              Master AI, Data Science, Software Development, Business &
              Digital Skills with Industry Experts.
            </p>

            <p className="small"
              style={{
                color: "#564336",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                margin: 0
              }}
            >
              Mentoring Minds offers industry-focused certification programs
              designed with top universities and leading companies. Learn through live clases, hands-on Projects,
              one-on-one mentorship, dedicated placement support.
            </p>
          </div>
          <div className="buttons">
            <button className="btn1">
              Book Free Counselling
            </button>
            <button className="btn2">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="banner-right">
          <img src={BannerImage} alt="Banner" />

          <div className="preview-card">
            <div className="play">
              <img src={Container} alt="Play icon" />
            </div>
            <div>
              <small>Masterclass Preview</small>
              <h4>Watch Free Session</h4>
            </div>
          </div>
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

export default Banner;