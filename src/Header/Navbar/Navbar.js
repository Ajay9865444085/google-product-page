import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
      <img src="logo1.png" alt='logo' />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="create-account"><Link to="/create-account">Create Account</Link></li>
      </ul>
    </nav>



  );
};

export default Navbar;
