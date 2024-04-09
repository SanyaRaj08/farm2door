import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check user authentication status on component mount
    const userInfo = localStorage.getItem('userInfo');
    setIsLoggedIn(!!userInfo); // Set isLoggedIn to true if userInfo is not null
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    
    // Log content before removal
    console.log('Before logout:', localStorage.getItem('userInfo'));
    
    localStorage.removeItem('userInfo');

    // Log content after removal
    console.log('After logout:', localStorage.getItem('userInfo'));

    setTimeout(() => {
      navigate('/');
    }, 100);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          FarmToDoor
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/farmer_auth">
                Farmer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/buyer_auth">
                Buyer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Faq">
                FAQ
              </Link>
            </li>
          </ul>
          <div>
            <div className="profile-icon" onClick={openModal}>
              <i className="fas fa-user fa-2x"></i>
            </div>
            {isModalOpen && <Modal closeModal={closeModal} />}
          </div>
          {isLoggedIn && (
            <button className="button_logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

