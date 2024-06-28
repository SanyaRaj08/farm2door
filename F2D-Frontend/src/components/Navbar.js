import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
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

 

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Farm2Door
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
              <NavLink className="nav-link" activeClassName="active-link" exact to="/"> {/* Use NavLink instead of Link */}
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active-link" to="/farmer_auth"> {/* Use NavLink instead of Link */}
                Farmer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active-link" to="/buyer_auth"> {/* Use NavLink instead of Link */}
                Buyer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active-link" to="/Faq"> {/* Use NavLink instead of Link */}
                FAQ
              </NavLink>
            </li>
          </ul>
          {/* <div>
            <div className="profile-icon" onClick={openModal}>
              <i className="fas fa-user fa-2x"></i>
            </div>
            {isModalOpen && <Modal closeModal={closeModal} />}
          </div> */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


