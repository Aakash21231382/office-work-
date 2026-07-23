import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const RootLayout = () => {

    const location = useLocation();

    const hideHeaderFooterPaths = ["/login", "/signup"];
    const shouldHide = hideHeaderFooterPaths.includes(location.pathname);

  return (
    /* min-vh-100 aur flex-column ensures ki page kam se kam full screen height le */
    <div className="d-flex flex-column min-vh-100">
      
      {/* <Navbar /> */}
      {!shouldHide && <Navbar />}

     
      {/* navbar fixed hai isliye body padding-top CSS mein set hai */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {!shouldHide && <Footer />}
      
    </div>
  );
};

export default RootLayout;