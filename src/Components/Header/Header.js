import React, { useState } from 'react';
import logo from '../../Assets/images/NavLogo/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import FeatureProducts from './../FeatureProducts/FeatureProducts';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <>
    <section className="ftco-section">
      <div className="container-fluid px-md-5">
        {/* ... Your existing code for logo, search form, and social media links */}
        <div className="row justify-content-between">
          <div className="col-md-8 order-md-last">
            <div className="row">
              <div className="col-md-6 text-center">
                <Link to="/" className="navbar-brand">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                <form action="#" className="searchform order-lg-last">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control pl-3" placeholder="Search" />
                    <button type="submit" className="form-control search">
                      <span className="fa fa-search"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="social-media">
              <p className="mb-0 d-flex">
                <Link to="https://www.facebook.com/alokchitrerkhela/" target="_blank" className="d-flex align-items-center justify-content-center">
                  <span className="fa fa-facebook"><i className="sr-only">Facebook</i></span>
                </Link>
                <Link to="#" className="d-flex align-items-center justify-content-center">
                  <span className="fa fa-twitter"><i className="sr-only">Twitter</i></span>
                </Link>
                <Link to="#" className="d-flex align-items-center justify-content-center">
                  <span className="fa fa-instagram"><i className="sr-only">Instagram</i></span>
                </Link>
                <Link to="#" className="d-flex align-items-center justify-content-center">
                  <span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {['lg'].map((expand) => (
      <Navbar key={expand} expand={expand} className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo} alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
              <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                <NavDropdown title="Catagories" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                  
                  <Link to="#" className="dropdown-item">Battery</Link>
                  <Link to="#" className="dropdown-item">Charger</Link>
                  <Link to="#" className="dropdown-item">Cleaning Accessories</Link>
                  <Link to="#" className="dropdown-item">Filter</Link>
                  <Link to="#" className="dropdown-item">Phone Accessories</Link>
                  <Link to="#" className="dropdown-item">Battery and SD Card Box</Link>
                  <Link to="#" className="dropdown-item">LED Light</Link>
                  <Link to="#" className="dropdown-item">Strap</Link>
                  <Link to="#" className="dropdown-item">Other Accessories</Link>
                </NavDropdown>
                <li className="nav-item"><Link to="/" className="nav-link">Feature Products</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link"><FontAwesomeIcon icon={faCartShopping} beatFade size="xl" /></Link></li>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          </Container>
      </Navbar>
    ))}
    </>
  );
}

export default Header;