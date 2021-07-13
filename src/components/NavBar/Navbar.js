import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css"


function NavBar(props) {
  return (
    <>
     <Navbar className="navbarbgd" expand="lg">
        <figure className="figure">
  <img src={process.env.PUBLIC_URL + "/images/S-logo-white-sm.png"} className="figure-img img-fluid rounded" alt="..."/>
</figure>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mt-5 mr-4 fs-4">
            <Nav.Link className="text-light mr-4" href="#/">home</Nav.Link>
            <Nav.Link  className="text-light mr-4" href="#/Portfolio">portfolio</Nav.Link>
            <Nav.Link  className="text-light mr-4" href="#/Contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  </>
  );
}

export default NavBar;
