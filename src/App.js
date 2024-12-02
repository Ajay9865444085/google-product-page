import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Header/Navbar/Navbar";
import Home from "./Header/Home";
import Products from "./Header/Products";
import Services from "./Header/Services";
import Aboutus from "./Header/Aboutus";
import CreateAccount from "./Header/Create account";

function App() {
  return (
    <div>
     
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

