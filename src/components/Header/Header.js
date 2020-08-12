import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
  return (

    <header>
      <Navbar collapseOnSelect className="navbar sticky-top navbar-expand-lg" expand="lg">
        <Navbar.Brand className="navbar-brand">
          <Link to="/">
            <img className="my-0 mr-md-auto" src="assets/images/Logo.png" alt="Logo" to="/home" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav">
          <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <Nav.Link eventKey="1" as={Link} className="header-link p-3 nav-item nav-link active ml-auto" to="/">home <span className="sr-only">(current)</span></Nav.Link>
            <Nav.Link eventKey="2" as={Link} className="header-link p-3 nav-item nav-link ml-auto" to="/architecture">architecture</Nav.Link>
            <Nav.Link eventKey="2" as={Link} className="header-link p-3 nav-item nav-link ml-auto" to="/it">it</Nav.Link>
            <Nav.Link eventKey="3" as={Link} className="header-link p-3 nav-item nav-link ml-auto" to="/hobby">hobby</Nav.Link>
            <Nav.Link eventKey="4" as={Link} className="header-link p-3 nav-item nav-link ml-auto" to="/mycv">mycv</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;


