import React from "react";
import logo from "../../Assets/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useCart } from "../CartContext/CartContext"; // Import the useCart hook

function Header() {
  const { cart } = useCart();

  return (
    <div className="header">
      {["sm"].map((expand) => (
        <Navbar
          data-bs-theme="dark"
          key={expand}
          expand={expand}
          className="custom-navbar bg-body-tertiary mb-3"
          id="navBar"
        >
          <Container fluid>
            <Navbar.Brand href="#">
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
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/FeaturedProducts">
                    Featured Products
                  </Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex total-search-box">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 "
                    aria-label="Search"
                    style={{ width: "200px" }}
                  />
                  <Button variant="outline-success" className="d-flex">
                    Search
                  </Button>
                </Form>
                
                <button className="button-primary">
        <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: "#c59716" }} />
        <span className="badge bg-secondary">{cart.length}</span> {/* Display cart length */}
      </button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
