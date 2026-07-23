import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Dashbord from "./component/Dashbord";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Technology from "./component/Technology";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashbord />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/courses/technology" element={<Technology/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;