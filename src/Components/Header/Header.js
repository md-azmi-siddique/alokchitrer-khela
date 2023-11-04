import React from "react";
import logo from "../../Assets/images/NavLogo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {["md"].map((expand) => (
        <Navbar fixed="top"  key={expand} expand={expand} className="custom-navbar" id="navBar">
          <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 searchBox"
              style={{width:'800px'}}
            />
          </Col>
          <Col xs="auto">
            
          </Col>
        </Row>
      </Form>
            
          </Nav>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
