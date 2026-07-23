// import { useState, useRef } from "react";
// import { FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "../assets/css/Navbar.css";

// import NavLogo1 from '../assets/images/NavLogo1.png';
// import USLogo from '../assets/images/USlogo.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const openMenu = () => setIsOpen(true);
//   const closeMenu = () => { setIsOpen(false); setActiveDropdown(null); };

//   const handleDropdownClick = (e, menuName) => {
//     if (window.innerWidth < 992) {
//       e.preventDefault();
//       setActiveDropdown(prev => prev === menuName ? null : menuName);
//     }
//   };

//   return (
//     <>
//       {/* ── Top Announcement Bar ── */}
//       <div className="top-bar">
//         <div className="top-bar-inner">
//           <span className="announcement-text">
//             🚀 Admissions Open for 2026 Batch | Get Up to 30% Scholarship
//           </span>
//           <div className="top-bar-buttons">
//             <button className="btn-apply" style={{ background: '#fff', color: '#222', border: 'none', height: 42 }}>Apply Now</button>
//             <button className="btn-talk" style={{ background: 'transparent', color: '#fff', border: '1.5px solid #fff', height: 42 }}>Talk to Expert</button>
//           </div>
//         </div>
//       </div>

//       {/* ── Mobile overlay — OUTSIDE nav so clicks register correctly ── */}
//       {isOpen && <div className="mobile-overlay show" onClick={closeMenu} />}

//       {/* ── Main Navbar ── */}
//       <nav className="premium-navbar">
//         <div className="nav-inner">

//           {/* Logo */}
//           <Link className="logo-link" to="/" onClick={closeMenu}>
//             <img src={NavLogo1} alt="Mentoring Minds" className="brand-logo" />
//           </Link>

//           {/* Search — desktop only */}
//           <div className="search-box">
//             <FaSearch className="search-icon" />
//             <input
//               type="text"
//               placeholder="Search Courses, Skills, Universities..."
//               className="search-input"
//             />
//           </div>

//           {/* Hamburger — mobile only */}
//           <button className="hamburger" onClick={openMenu} aria-label="Open navigation">
//             <FaBars />
//           </button>

//           {/* Nav menu — slide-in panel on mobile, flex row on desktop */}
//           <div className={`nav-menu ${isOpen ? "open" : ""}`}>

//             {/* Mobile close button */}
//             <div className="mobile-header">
//               <button className="close-btn" onClick={closeMenu}><FaTimes /></button>
//             </div>

//             {/* Mobile search */}
//             <div className="search-box-mobile">
//               <FaSearch className="search-icon" />
//               <input type="text" placeholder="Search Courses..." className="search-input" />
//             </div>

//             {/* Nav links */}
//             <ul className="nav-links" style={{gap:18, fontWeight:500, color:"black" , }}>
//               <li className="nav-item has-dropdown">
//                 <Link className="nav-link" to="/courses" onClick={(e) => handleDropdownClick(e, 'courses')}>
//                   <span>Courses</span>
//                   <span className="badge-new">New</span>
//                   <FaChevronDown className={`chevron ${activeDropdown === 'courses' ? 'rotate' : ''}`} />
//                 </Link>
//                 <ul className={`dropdown-menu-custom ${activeDropdown === 'courses' ? 'open-mobile' : ''}`}>
//                   <li><Link to="/courses/technology" className="dropdown-link" onClick={closeMenu}>Technology</Link></li>
//                   <li><Link to="/courses/management" className="dropdown-link" onClick={closeMenu}>Management</Link></li>
//                   <li><Link to="/courses/design" className="dropdown-link" onClick={closeMenu}>Design</Link></li>
//                 </ul>
//               </li>

//               <li className="nav-item has-dropdown">
//                 <Link className="nav-link" to="/certifications" onClick={(e) => handleDropdownClick(e, 'certifications')}>
//                   <span>Certifications</span>
//                   <FaChevronDown className={`chevron ${activeDropdown === 'certifications' ? 'rotate' : ''}`} />
//                 </Link>
//                 <ul className={`dropdown-menu-custom ${activeDropdown === 'certifications' ? 'open-mobile' : ''}`}>
//                   <li><Link to="/certifications/it" className="dropdown-link" onClick={closeMenu}>IT Certifications</Link></li>
//                   <li><Link to="/certifications/marketing" className="dropdown-link" onClick={closeMenu}>Marketing</Link></li>
//                 </ul>
//               </li>

//               <li className="nav-item has-dropdown">
//                 <Link className="nav-link" to="/study-abroad" onClick={(e) => handleDropdownClick(e, 'study')}>
//                   <span>Study abroad</span>
//                   <FaChevronDown className={`chevron ${activeDropdown === 'study' ? 'rotate' : ''}`} />
//                 </Link>
//                 <ul className={`dropdown-menu-custom ${activeDropdown === 'study' ? 'open-mobile' : ''}`}>
//                   <li><Link to="/study-abroad/usa" className="dropdown-link" onClick={closeMenu}>USA</Link></li>
//                   <li><Link to="/study-abroad/uk" className="dropdown-link" onClick={closeMenu}>UK</Link></li>
//                   <li><Link to="/study-abroad/canada" className="dropdown-link" onClick={closeMenu}>Canada</Link></li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/mentorship" onClick={closeMenu}>Mentorship</Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/centres" onClick={closeMenu}>Centres</Link>
//               </li>
//             </ul>

//             {/* Divider */}
//             <div className="nav-divider" />

//             {/* Action buttons */}
//             <div className="action-group">
//               <Link to="/login" className="btn-login" onClick={closeMenu}>Login</Link>
//               <Link to="/signup" className="btn-signup" onClick={closeMenu}>Sign Up</Link>
//               <div className="lang-selector">
//                 <img src={USLogo} alt="US" className="uslogo" />
//                 <span style={{fontSize:16, fontWeight:400}}>English</span>
//                 <FaChevronDown className="chevron" />
//               </div>
//             </div>

//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;




import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

import NavLogo1 from '../assets/images/NavLogo1.png';
import USLogo from '../assets/images/USlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => { setIsOpen(false); setActiveDropdown(null); };

  // 1. Yahan se screen size ki condition hata di hai taaki sab screens par click kaam kare
  const handleDropdownClick = (e, menuName) => {
    e.preventDefault(); 
    setActiveDropdown(prev => prev === menuName ? null : menuName);
  };

  return (
    <>
      {/* ── Top Announcement Bar ── */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <span className="announcement-text">
            🚀 Admissions Open for 2026 Batch | Get Up to 30% Scholarship
          </span>
          <div className="top-bar-buttons">
            <button className="btn-apply" style={{ background: '#fff', color: '#222', border: 'none', height: 42 }}>Apply Now</button>
            <button className="btn-talk" style={{ background: 'transparent', color: '#fff', border: '1.5px solid #fff', height: 42 }}>Talk to Expert</button>
          </div>
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      {isOpen && <div className="mobile-overlay show" onClick={closeMenu} />}

      {/* ── Main Navbar ── */}
      <nav className="premium-navbar">
        <div className="nav-inner">

          {/* Logo */}
          <Link className="logo-link" to="/" onClick={closeMenu}>
            <img src={NavLogo1} alt="Mentoring Minds" className="brand-logo" />
          </Link>

          {/* Search — desktop only */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search Courses, Skills, Universities..."
              className="search-input"
            />
          </div>

          {/* Hamburger — mobile only */}
          <button className="hamburger" onClick={openMenu} aria-label="Open navigation">
            <FaBars />
          </button>

          {/* Nav menu */}
          <div className={`nav-menu ${isOpen ? "open" : ""}`}>

            {/* Mobile close button */}
            <div className="mobile-header">
              <button className="close-btn" onClick={closeMenu}><FaTimes /></button>
            </div>

            {/* Mobile search */}
            <div className="search-box-mobile">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search Courses..." className="search-input" />
            </div>

            {/* Nav links */}
            <ul className="nav-links" style={{gap:18, fontWeight:500, color:"black", justifyContent: "center"}}>
              <li className="nav-item has-dropdown">
                <Link className="nav-link" to="/courses" onClick={(e) => handleDropdownClick(e, 'courses')}>
                  <span>Courses</span>
                  <span className="badge-new">New</span>
                  <FaChevronDown className={`chevron ${activeDropdown === 'courses' ? 'rotate' : ''}`} />
                </Link>
                {/* 2. open-mobile ki jagah ab show-dropdown use kiya hai */}
                <ul className={`dropdown-menu-custom ${activeDropdown === 'courses' ? 'show-dropdown' : ''}`}>
                  <li><Link to="/courses/technology" className="dropdown-link" onClick={closeMenu}>Technology</Link></li>
                  {/* <li><Link to="/courses/management" className="dropdown-link" onClick={closeMenu}>Management</Link></li>
                  <li><Link to="/courses/design" className="dropdown-link" onClick={closeMenu}>Design</Link></li> */}
                </ul>
              </li>

              <li className="nav-item has-dropdown">
                <Link className="nav-link" to="/certifications" onClick={(e) => handleDropdownClick(e, 'certifications')}>
                  <span>Certifications</span>
                  <FaChevronDown className={`chevron ${activeDropdown === 'certifications' ? 'rotate' : ''}`} />
                </Link>
                <ul className={`dropdown-menu-custom ${activeDropdown === 'certifications' ? 'show-dropdown' : ''}`}>
                  <li><Link to="/certifications/it" className="dropdown-link" onClick={closeMenu}>IT Certifications</Link></li>
                  <li><Link to="/certifications/marketing" className="dropdown-link" onClick={closeMenu}>Marketing</Link></li>
                </ul>
              </li>

              <li className="nav-item has-dropdown">
                <Link className="nav-link" to="/study-abroad" onClick={(e) => handleDropdownClick(e, 'study')}>
                  <span>Study abroad</span>
                  <FaChevronDown className={`chevron ${activeDropdown === 'study' ? 'rotate' : ''}`} />
                </Link>
                <ul className={`dropdown-menu-custom ${activeDropdown === 'study' ? 'show-dropdown' : ''}`}>
                  <li><Link to="/study-abroad/usa" className="dropdown-link" onClick={closeMenu}>USA</Link></li>
                  <li><Link to="/study-abroad/uk" className="dropdown-link" onClick={closeMenu}>UK</Link></li>
                  <li><Link to="/study-abroad/canada" className="dropdown-link" onClick={closeMenu}>Canada</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/mentorship" onClick={closeMenu}>Mentorship</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/centres" onClick={closeMenu}>Centres</Link>
              </li>
            </ul>

            {/* Divider */}
            <div className="nav-divider" />

            {/* Action buttons */}
            <div className="action-group">
              <Link to="/login" className="btn-login" onClick={closeMenu}>Login</Link>
              <Link to="/signup" className="btn-signup" onClick={closeMenu}>Sign Up</Link>
              <div className="lang-selector">
                <img src={USLogo} alt="US" className="uslogo" />
                <span style={{fontSize:16, fontWeight:400}}>English</span>
                <FaChevronDown className="chevron" />
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;