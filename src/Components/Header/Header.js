import React from "react";
import logo from "../../Assets/images/NavLogo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Header.css";


function Header() {

  return (
    <div className="header">
      {["md"].map((expand) => (
        <Navbar 
        fixed="top"
          data-bs-theme="dark"
          key={expand}
          expand={expand}
          className="custom-navbar"
          id="navBar"
        >
          <Container fluid>
            <Navbar.Brand>
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link><Link className="header-item" to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link className="header-item" to="/FeaturedProducts">Featured Products</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
