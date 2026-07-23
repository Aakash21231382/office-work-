





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   FaFacebookF, 
//   FaTwitter, 
//   FaInstagram, 
//   FaYoutube,
//   FaLinkedinIn, 
// } from 'react-icons/fa';
// import '../assets/css/Footer.css';
// import GooglePay from '../assets/images/Google.png';
// import App from '../assets/images/app.png';
// import Logo from '../assets/images/footerLogo.png';

// const Footer = () => {
//   return (
//     <footer className="footer-section">
      
//       {/* Container for Main Content (Part 1 & Part 2) */}
//       <div className="footer-container container">
//         <div className="footer-main-content">
          
//           {/* Part 1: Logo, Social Icons, and App Download */}
//           <div className="footer-brand-col">
//             <div className="footer-logo-wrapper">
//               <img src={Logo} alt="Mentoring Minds Logo" className="footer-logo" />
//               <div className="footer-logo-text">
//                 <h1>MENTORINGMINDS</h1>
//                 <span>Inspire. Guide. Empower.</span>
//               </div>
//             </div>
            
//             <div className="footer-social-icons">
//               <Link to="#" className="social-icon facebook"><FaFacebookF /></Link>
//               <Link to="#" className="social-icon twitter"><FaTwitter /></Link>
//               <Link to="#" className="social-icon linkedin"><FaLinkedinIn /></Link>
//               <Link to="#" className="social-icon youtube"><FaYoutube /></Link>
//               <Link to="#" className="social-icon instagram"><FaInstagram /></Link>
//             </div>

//             <div className="footer-app-section">
//               <p className="app-title">Get Our App Now!</p>
//               <div className="app-links">
//                 <Link to="#">
//                   <img src={GooglePay} alt="Google Play Store" className="app-badge" />
//                 </Link>
//                 <Link to="#">
//                   <img src={App} alt="Apple App Store" className="app-badge" />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Part 2: Course Columns Container */}
//           <div className="footer-courses-wrapper">
            
//             {/* Column 2: Analytics Courses */}
//             <div className="footer-links-col">
//               <h3 className="footer-heading">Analytics Courses</h3>
//               <ul className="footer-links-list">
//                 <li><Link to="#">Data Science Course</Link></li>
//                 <li><Link to="#">Artificial Intelligence Course</Link></li>
//                 <li><Link to="#">Data Analytics Course</Link></li>
//                 <li><Link to="#">Machine Learning Course</Link></li>
//                 <li><Link to="#">Python Data Science Course</Link></li>
//                 <li><Link to="#">Business Analytics Course</Link></li>
//                 <li><Link to="#">Python Course</Link></li>
//               </ul>
//             </div>

//             {/* Column 3: Cloud Courses */}
//             <div className="footer-links-col">
//               <h3 className="footer-heading">Cloud Courses</h3>
//               <ul className="footer-links-list">
//                 <li><Link to="#">Azure Course</Link></li>
//                 <li><Link to="#">DevOps Course</Link></li>
//                 <li><Link to="#">Cyber Security Course</Link></li>
//                 <li><Link to="#">AWS Solutions Architect</Link></li>
//                 <li><Link to="#">Salesforce Course</Link></li>
//                 <li><Link to="#">Selenium Course</Link></li>
//                 <li><Link to="#">AWS DevOps Course</Link></li>
//               </ul>
//             </div>

//             {/* Column 4: Trending Courses */}
//             <div className="footer-links-col">
//               <h3 className="footer-heading">Trending Courses</h3>
//               <ul className="footer-links-list">
//                 <li><Link to="#">Ethical Hacking Course</Link></li>
//                 <li><Link to="#">Power BI Course</Link></li>
//                 <li><Link to="#">Informatica Course</Link></li>
//                 <li><Link to="#">Digital Marketing Course</Link></li>
//                 <li><Link to="#">Business Analyst Course</Link></li>
//                 <li><Link to="#">Investment Banking Course</Link></li>
//                 <li><Link to="#">Azure DevOps Course</Link></li>
//                 <li><Link to="#">Azure Data Engineer Course</Link></li>
//               </ul>
//             </div>

//             {/* Column 5: Popular Courses */}
//             <div className="footer-links-col">
//               <h3 className="footer-heading">Popular Courses</h3>
//               <ul className="footer-links-list">
//                 <li><Link to="#">Electric Vehicle Course</Link></li>
//                 <li><Link to="#">UI UX Design Course</Link></li>
//                 <li><Link to="#">SQL Course</Link></li>
//                 <li><Link to="#">Tableau Course</Link></li>
//                 <li><Link to="#">Full Stack Developer Course</Link></li>
//                 <li><Link to="#">Data Engineering Course</Link></li>
//                 <li><Link to="#">Supply Chain Management Course</Link></li>
//                 <li><Link to="#">General Management Course</Link></li>
//               </ul>
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* Wrapper for Divider and Bottom Section with custom background */}
//       <div className="footer-bottom-wrapper">
//         <div className="footer-full-divider"></div>

//         <div className="footer-container container">
//           <div className="footer-bottom-row">
//             <ul className="footer-bottom-nav">
//               <li><Link to="#">ABOUT US</Link></li>
//               <span className="separator">|</span>
//               <li><Link to="#">MEDIA</Link></li>
//               <span className="separator">|</span>
//               <li><Link to="#">REFUND POLICY</Link></li>
//               <span className="separator">|</span>
//               <li><Link to="#">PRIVACY POLICY</Link></li>
//               <span className="separator">|</span>
//               <li><Link to="#">TERMS OF USE</Link></li>
//               <span className="separator">|</span>
//               <li><Link to="#">CONTACT US</Link></li>
//               <span className="separator">|</span>
//               <li><Link to="#">BLOG</Link></li>
//               <span className="separator">|</span>
//               <li><Link to="#">INTERVIEW QUESTIONS</Link></li>
//               <span className="separator">|</span>
//               <li><Link to="#">TUTORIALS</Link></li>
//               <span className="separator">|</span>
//               <li><Link to="#">BECOME AN INSTRUCTOR</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;





import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaLinkedinIn, 
} from 'react-icons/fa';
import '../assets/css/Footer.css';
import GooglePay from '../assets/images/Google.png';
import App from '../assets/images/app.png';
import Logo from '../assets/images/footerLogo.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      
      {/* Container for Main Content (Part 1 & Part 2) */}
      <div className="footer-container container">
        <div className="footer-main-content">
          
          {/* Part 1: Logo, Social Icons, and App Download */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrapper">
              <img src={Logo} alt="Mentoring Minds Logo" className="footer-logo" />
              <div className="footer-logo-text">
                <h1>MENTORINGMINDS</h1>
                <span>Inspire. Guide. Empower.</span>
              </div>
            </div>
            
            <div className="footer-social-icons">
              <Link to="#" className="social-icon facebook"><FaFacebookF /></Link>
              <Link to="#" className="social-icon twitter"><FaTwitter /></Link>
              <Link to="#" className="social-icon linkedin"><FaLinkedinIn /></Link>
              <Link to="#" className="social-icon youtube"><FaYoutube /></Link>
              <Link to="#" className="social-icon instagram"><FaInstagram /></Link>
            </div>

            <div className="footer-app-section">
              <p className="app-title">Get Our App Now!</p>
              <div className="app-links">
                <Link to="#">
                  <img src={GooglePay} alt="Google Play Store" className="app-badge" />
                </Link>
                <Link to="#">
                  <img src={App} alt="Apple App Store" className="app-badge" />
                </Link>
              </div>
            </div>
          </div>

          {/* Part 2: Course Columns Container */}
          <div className="footer-courses-wrapper">
            
            {/* Column 2: Analytics Courses */}
            <div className="footer-links-col">
              <h3 className="footer-heading">Analytics Courses</h3>
              <ul className="footer-links-list">
                <li><Link to="#">Data Science Course</Link></li>
                <li><Link to="#">Artificial Intelligence Course</Link></li>
                <li><Link to="#">Data Analytics Course</Link></li>
                <li><Link to="#">Machine Learning Course</Link></li>
                <li><Link to="#">Python Data Science Course</Link></li>
                <li><Link to="#">Business Analytics Course</Link></li>
                <li><Link to="#">Python Course</Link></li>
              </ul>
            </div>

            {/* Column 3: Cloud Courses */}
            <div className="footer-links-col">
              <h3 className="footer-heading">Cloud Courses</h3>
              <ul className="footer-links-list">
                <li><Link to="#">Azure Course</Link></li>
                <li><Link to="#">DevOps Course</Link></li>
                <li><Link to="#">Cyber Security Course</Link></li>
                <li><Link to="#">AWS Solutions Architect</Link></li>
                <li><Link to="#">Salesforce Course</Link></li>
                <li><Link to="#">Selenium Course</Link></li>
                <li><Link to="#">AWS DevOps Course</Link></li>
              </ul>
            </div>

            {/* Column 4: Trending Courses */}
            <div className="footer-links-col">
              <h3 className="footer-heading">Trending Courses</h3>
              <ul className="footer-links-list">
                <li><Link to="#">Ethical Hacking Course</Link></li>
                <li><Link to="#">Power BI Course</Link></li>
                <li><Link to="#">Informatica Course</Link></li>
                <li><Link to="#">Digital Marketing Course</Link></li>
                <li><Link to="#">Business Analyst Course</Link></li>
                <li><Link to="#">Investment Banking Course</Link></li>
                <li><Link to="#">Azure DevOps Course</Link></li>
                <li><Link to="#">Azure Data Engineer Course</Link></li>
              </ul>
            </div>

            {/* Column 5: Popular Courses */}
            <div className="footer-links-col">
              <h3 className="footer-heading">Popular Courses</h3>
              <ul className="footer-links-list">
                <li><Link to="#">Electric Vehicle Course</Link></li>
                <li><Link to="#">UI UX Design Course</Link></li>
                <li><Link to="#">SQL Course</Link></li>
                <li><Link to="#">Tableau Course</Link></li>
                <li><Link to="#">Full Stack Developer Course</Link></li>
                <li><Link to="#">Data Engineering Course</Link></li>
                <li><Link to="#">Supply Chain Management Course</Link></li>
                <li><Link to="#">General Management Course</Link></li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Wrapper for Divider and Bottom Section with custom background */}
      <div className="footer-bottom-wrapper">
        <div className="footer-full-divider"></div>

        <div className="footer-container container">
          <div className="footer-bottom-row">
            <ul className="footer-bottom-nav">
              <li><Link to="#">ABOUT US</Link></li>
              <span className="separator">|</span>
              <li><Link to="#">MEDIA</Link></li>
              <span className="separator">|</span>
              <li><Link to="#">REFUND POLICY</Link></li>
              <span className="separator">|</span>
              <li><Link to="#">PRIVACY POLICY</Link></li>
              <span className="separator">|</span>
              <li><Link to="#">TERMS OF USE</Link></li>
              <span className="separator">|</span>
              <li><Link to="#">CONTACT US</Link></li>
              <span className="separator">|</span>
              <li><Link to="#">BLOG</Link></li>
              <span className="separator">|</span>
              <li><Link to="#">INTERVIEW QUESTIONS</Link></li>
              <span className="separator">|</span>
              <li><Link to="#">TUTORIALS</Link></li>
              <span className="separator">|</span>
              <li><Link to="#">BECOME AN INSTRUCTOR</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;