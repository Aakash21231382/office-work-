# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




/* Ribbon Container */
/* .ribbon {
  position:absolute;
  top:-5px;
  right:-5px;
  width:150px;
  height:150px;
  overflow:visible;
  z-index:100;
  text-align: right;
}

.ribbon span {
  position: absolute;
  top: 28px;
  right: -38px;
  width: 170px;
  height: 34px;
  line-height: 34px;
  transform: rotate(45deg);

  display: block;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}


.ribbon span::before{
  content:"";
  position:absolute;
  left:0;
  top:100%;

  border-top:6px solid;
  border-left:6px solid;
  border-right:6px solid transparent;
  border-bottom:6px solid transparent;
}

.ribbon span::after{
  content:"";
  position:absolute;
  right:0;
  top:100%;

  border-top:6px solid;
  border-right:6px solid;
  border-left:6px solid transparent;
  border-bottom:6px solid transparent;
}




.ribbon-blue span{
  background:#1E90FF;
}

.ribbon-blue span::before{
  border-top-color:#0a5a9e;
  border-left-color:#0a5a9e;
}

.ribbon-blue span::after{
  border-top-color:#0a5a9e;
  border-right-color:#0a5a9e;
}


.ribbon-orange span{
  background:#F07500;
}

.ribbon-orange span::before{
  border-top-color:#B85A00;
  border-left-color:#B85A00;
}

.ribbon-orange span::after{
  border-top-color:#B85A00;
  border-right-color:#B85A00;
}
 */

























import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

import NavLogo1 from '../assets/images/NavLogo1.png';
import USLogo from '../assets/images/USlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (e, menuName) => {
    if (window.innerWidth < 992) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === menuName ? null : menuName);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ── Top Announcement Bar ── */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <span className="announcement-text">
            🚀 Admissions Open for 2026 Batch | Get Up to 30% Scholarship
          </span>
          <div className="top-bar-buttons">
            <button className="btn-apply" style={{background:'#fff', color:'#222', border:'none' , height:45, }}>Apply Now</button>
            <button className="btn-talk" style={{background:'transparent', color:'#fff', border:'1.5px solid #fff', height:45}}>Talk to Expert</button>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav className="premium-navbar" ref={navbarRef}>
        <div className="nav-inner">

          {/* Logo */}
          <Link className="logo-link" to="/" onClick={closeAll}>
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
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
            <FaBars />
          </button>

          {/* Mobile overlay */}
          <div className={`mobile-overlay ${isOpen ? "show" : ""}`} onClick={closeAll} />

          {/* Nav menu */}
          <div className={`nav-menu ${isOpen ? "open" : ""}`}>

            {/* Mobile header */}
            <div className="mobile-header">
              <button className="close-btn" onClick={closeAll}><FaTimes /></button>
            </div>

            {/* Mobile search */}
            <div className="search-box-mobile">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search Courses..." className="search-input" />
            </div>

            {/* Nav links */}
            <ul className="nav-links" style={{gap:20, fontSize:16, fontWeight:500}}>
              <li className="nav-item has-dropdown">
                <Link className="nav-link" to="/courses" onClick={(e) => handleDropdownClick(e, 'courses')}>
                  <span>Courses</span>
                  <span className="badge-new">New</span>
                  <FaChevronDown className={`chevron ${activeDropdown === 'courses' ? 'rotate' : ''}`} />
                </Link>
                <ul className={`dropdown-menu-custom ${activeDropdown === 'courses' ? 'open-mobile' : ''}`}>
                  <li><Link to="/courses/technology" className="dropdown-link" onClick={closeAll}>Technology</Link></li>
                  <li><Link to="/courses/management" className="dropdown-link" onClick={closeAll}>Management</Link></li>
                  <li><Link to="/courses/design" className="dropdown-link" onClick={closeAll}>Design</Link></li>
                </ul>
              </li>

              <li className="nav-item has-dropdown">
                <Link className="nav-link" to="/certifications" onClick={(e) => handleDropdownClick(e, 'certifications')}>
                  <span>Certifications</span>
                  <FaChevronDown className={`chevron ${activeDropdown === 'certifications' ? 'rotate' : ''}`} />
                </Link>
                <ul className={`dropdown-menu-custom ${activeDropdown === 'certifications' ? 'open-mobile' : ''}`}>
                  <li><Link to="/certifications/it" className="dropdown-link" onClick={closeAll}>IT Certifications</Link></li>
                  <li><Link to="/certifications/marketing" className="dropdown-link" onClick={closeAll}>Marketing</Link></li>
                </ul>
              </li>

              <li className="nav-item has-dropdown">
                <Link className="nav-link" to="/study-abroad" onClick={(e) => handleDropdownClick(e, 'study')}>
                  <span>Study abroad</span>
                  <FaChevronDown className={`chevron ${activeDropdown === 'study' ? 'rotate' : ''}`} />
                </Link>
                <ul className={`dropdown-menu-custom ${activeDropdown === 'study' ? 'open-mobile' : ''}`}>
                  <li><Link to="/study-abroad/usa" className="dropdown-link" onClick={closeAll}>USA</Link></li>
                  <li><Link to="/study-abroad/uk" className="dropdown-link" onClick={closeAll}>UK</Link></li>
                  <li><Link to="/study-abroad/canada" className="dropdown-link" onClick={closeAll}>Canada</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/mentorship" onClick={closeAll}>Mentorship</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/centres" onClick={closeAll}>Centres</Link>
              </li>
            </ul>

            {/* Divider */}
            <div className="nav-divider" />

            {/* Action buttons */}
            <div className="action-group">
              <Link to="/login" className="btn-login" onClick={closeAll}>Login</Link>
              <Link to="/signup" className="btn-signup" onClick={closeAll}>Sign Up</Link>
              <div className="lang-selector" style={{fontWeight:400, fontSize:16}}>
                <img src={USLogo} alt="US" className="uslogo" />
                <span className="text-black">English</span>
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
















/* ══════════════════════════════════════════════════
   VARIABLES
══════════════════════════════════════════════════ */
:root {
  --orange:   #F6881F;
  --orange2:  #F18D21;
  --grad:     linear-gradient(90deg, #F6881F, #F18D21);
  --dark:     #333;
  --gray:     #666;
  --border:   #E5E5E5;
  --shadow:   0 4px 20px rgba(0,0,0,.08);
  --topbar-h: 61px;
  --navbar-h: 78px;
}

/* ══════════════════════════════════════════════════
   RESET  (scoped to navbar elements)
══════════════════════════════════════════════════ */
.top-bar *, .premium-navbar * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.top-bar a, .premium-navbar a { text-decoration: none; color: inherit; }
.top-bar ul, .premium-navbar ul { list-style: none; }
.premium-navbar button { border: none; outline: none; cursor: pointer; font-family: inherit; background: none; }
.top-bar img, .premium-navbar img { display: block; max-width: 100%; }

/* ══════════════════════════════════════════════════
   TOP BAR
══════════════════════════════════════════════════ */
.top-bar {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: var(--topbar-h);
  background: var(--grad);
  z-index: 1000;
}

.top-bar-inner {
  height: var(--topbar-h);
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.announcement-text {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 24px;
  white-space: nowrap;
  vertical-align: middle;
}

.top-bar-buttons { display: flex; gap: 10px; flex-shrink: 0; }

.btn-apply {
  background: #fff; 
  color: #222;
  width: 118px; 
  height: 40px;
  border-radius: 7px;
  font-size: 15px; 
  font-weight: 600;
  transition: .2s;
}

/* .btn-apply:hover { box-shadow: 0 4px 12px rgba(0,0,0,.18); } */

.btn-talk {
  background: transparent;
  border: 1.5px solid #fff; 
  color: #fff;
  width: 138px;
   height: 40px;
  border-radius: 7px;
  font-size: 15px;
   font-weight: 600;
  transition: .2s;
}
.btn-talk:hover { background: #fff; color: var(--orange); }

/* ══════════════════════════════════════════════════
   MAIN NAVBAR
══════════════════════════════════════════════════ */
.premium-navbar {
  position: fixed;
  top: var(--topbar-h);   /* exactly below top-bar */
  left: 0;
  width: 100%;
  height: var(--navbar-h);
  background: #fff;
  box-shadow: var(--shadow);
  z-index: 999;
}

/* inner container — single horizontal row */
.nav-inner {
  height: var(--navbar-h);
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 18px;
  overflow: visible;
}

/* ── Logo ── */
.logo-link { flex-shrink: 0; display: flex; align-items: center; height: 55px;}
.brand-logo { height: 52px; width: auto; }

/* ── Desktop search ── */
.search-box {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  width: 230px;
  height: 45px;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0 12px;
  background: #fafafa;
}
.search-icon { color: #000000; font-size: 13px; margin-right: 8px; flex-shrink: 0;height: 22px; }
.search-input { flex: 1; border: none; background: transparent; outline: none; font-size: 13px; color: var(--dark);  }
.search-input::placeholder { color: #aaa; }

/* ── Hamburger  (mobile only — hidden on desktop) ── */
.hamburger { display: none; font-size: 24px; color: var(--orange); margin-left: auto; }

/* ══════════════════════════════════════════════════
   NAV MENU  (desktop: flex row filling remaining space)
══════════════════════════════════════════════════ */
.nav-menu {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0;
  min-width: 0;
  overflow: visible;
}

/* Mobile-only pieces — hidden on desktop */
.mobile-header  { display: none; }
.search-box-mobile { display: none; }

/* ── Nav links ── */
.nav-links {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 23px;
}

.nav-item { position: relative; }

.nav-link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 14px;
  color: var(--dark);
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: color .2s;
  position: relative;
}
.nav-link:hover { color: var(--orange); }

/* badge */
.badge-new {
  background: var(--orange); color: #fff;
  font-size: 9px; font-weight: 700;
  padding: 2px 5px;

  border-radius: 4px;
  position: absolute; top: -15px; right: -6px;

}

/* chevron */
.chevron { font-size: 15px; transition: transform .25s; color: var(--gray); flex-shrink: 0; padding-left: 5px; }
.chevron.rotate { transform: rotate(180deg); }

/* ── Dropdown ── */
.dropdown-menu-custom {
  display: none;
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 210px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 12px 30px rgba(0,0,0,.1);
  padding: 8px 0;
  z-index: 500;
}
.has-dropdown:hover .dropdown-menu-custom { display: block; animation: fadeDown .2s ease; }

.dropdown-link {
  display: block; padding: 10px 18px;
  font-size: 14px; color: #444; transition: .2s;
}
.dropdown-link:hover { background: #FFF5EB; color: var(--orange); padding-left: 24px; }

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Divider ── */
.nav-divider { width: 1px; height: 32px; background: #ddd; margin: 0 10px; flex-shrink: 0; }

/* ── Action group ── */
.action-group { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

.btn-login {
  display: flex; 
  align-items: center; 
  justify-content: center;
  width: 76px;
   height: 45px;
  border: 1.5px solid #ccc;
  border-radius: 7px;
  background: #fff;
   color: #191C1D;
  font-size: 16px; 
  font-weight: 600;
   transition: .2s;
}
.btn-login:hover { background: #f5f5f5; }

.btn-signup {
  display: flex; 
  align-items: center;
   justify-content: center;
  width: 88px;
  height: 45px;
  background: var(--grad);
   color: #ffffff;
  border-radius: 7px;
  font-size: 16px;
   font-weight: 600;
    transition: .2s;
}
.btn-signup:hover { box-shadow: 0 6px 18px rgba(246,136,31,.35); }

/* ── Language selector ── */
.lang-selector {
  display: flex; align-items: center; gap: 5px;
  cursor: pointer; color: #333;
  font-size: 16px; font-weight: 400;
  white-space: nowrap; flex-shrink: 0;
  height: 45px;
}
.uslogo { width: 26px; height: 18px; object-fit: cover; border-radius: 2px; }

/* ══════════════════════════════════════════════════
   BODY OFFSET  —  topbar (61) + navbar (78) = 139px
══════════════════════════════════════════════════ */
body {
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  background: #fff;
  padding-top: calc(var(--topbar-h) + var(--navbar-h));
}

/* ══════════════════════════════════════════════════
   MOBILE OVERLAY
══════════════════════════════════════════════════ */
.mobile-overlay {
  display: none;
  position: fixed; inset: 0;
  background: rgba(0,0,0,.5);
  z-index: 998;
  opacity: 0;
  transition: opacity .3s;
}

/* ══════════════════════════════════════════════════
   RESPONSIVE  ≤ 991px
══════════════════════════════════════════════════ */
@media (max-width: 991px) {

  /* top bar off, navbar at top */
  .top-bar { display: none; }
  .premium-navbar { top: 0; height: 68px; }
  .nav-inner { height: 68px; padding: 0 16px; gap: 12px; }
  .brand-logo { height: 44px; }
  body { padding-top: 68px; }

  /* show hamburger, hide desktop search */
  .hamburger { display: block; }
  .search-box { display: none; }

  /* overlay */
  .mobile-overlay { display: block; }
  .mobile-overlay.show { opacity: 1; }

  /* slide-in panel */
  .nav-menu {
    position: fixed;
    top: 0; left: -300px;
    width: 280px; height: 100vh;
    background: #fff;
    z-index: 999;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    overflow-y: auto;
    transition: left .35s cubic-bezier(.77,0,.175,1);
    box-shadow: 4px 0 20px rgba(0,0,0,.12);
    gap: 0;
    flex: none;
  }
  .nav-menu.open { left: 0; }

  /* mobile header */
  .mobile-header {
    display: flex; justify-content: flex-end;
    width: 100%; margin-bottom: 16px;
    padding-bottom: 12px; border-bottom: 1px solid #eee;
  }
  .close-btn { font-size: 26px; color: #333; background: none; border: none; cursor: pointer; }

  /* mobile search */
  .search-box-mobile {
    display: flex; align-items: center;
    width: 100%; border: 1px solid #ddd;
    border-radius: 8px; padding: 10px 12px;
    margin-bottom: 16px; background: #fafafa;
  }
  .search-box-mobile .search-input { margin-left: 8px; }

  /* stacked nav links */
  .nav-links { flex-direction: column; align-items: flex-start; gap: 0; width: 100%; flex: none; font-size: 16px; font-weight: 500;}
  .nav-item { width: 100%; border-bottom: 1px solid #f0f0f0; }
  .nav-link { width: 100%; justify-content: space-between; padding: 14px 0; font-size: 15px; }
  .badge-new { position: static; margin-left: 6px; }

  /* mobile dropdown */
  .has-dropdown:hover .dropdown-menu-custom { display: none; }
  .dropdown-menu-custom {
    position: static; display: none;
    box-shadow: none; border-radius: 0;
    padding: 4px 0 10px 16px;
    background: #fafafa;
    border-left: 2px solid var(--orange);
    margin: 4px 0 8px;
    animation: none; width: 100%;
  }
  .dropdown-menu-custom.open-mobile { display: block !important; }

  /* action group stacked */
  .nav-divider { display: none; }
  .action-group { flex-direction: column; width: 100%; margin-top: 20px; gap: 12px; }
  .btn-login, .btn-signup { width: 100%; height: 44px; }
  .lang-selector { margin-top: 4px; }
}

@media (max-width: 480px) {
  .brand-logo { height: 38px; }
  .nav-menu { width: 260px; }
}

/* ══════════════════════════════════════════════════
   LAPTOP  992–1366px  (tighten spacing a bit)
══════════════════════════════════════════════════ */
@media (min-width: 992px) and (max-width: 1366px) {
  .nav-inner { padding: 0 20px; gap: 14px; }
  .search-box { width: 200px; }
  .nav-links { gap: 2px; }
  .nav-link { font-size: 13px; padding: 6px 10px; }
  .btn-login { width: 72px; }
  .btn-signup { width: 84px; }
  .action-group { gap: 8px; }
  .nav-divider { margin: 0 8px; }
  .lang-selector { font-size: 13px; gap: 4px; }
}
