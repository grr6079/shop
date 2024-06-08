import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const cartItemsCount = useSelector((state) => state.cart.reduce((total, item) => total + item.quantity, 0));

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link">Cart ({cartItemsCount})</Link>
    </nav>
  );
};

export default Navbar;
