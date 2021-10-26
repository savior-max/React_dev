import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top "
      className="py-lg-0 shadow"
    >
      <Container className="justify-content-between px-lg-5 ">
        <Navbar.Brand>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              className="brand-text m-0 p-0"
              eventKey="0"
            >
              <span className="text-dark display-6 p-0">Savior</span>
            </Nav.Link>
          </Nav.Item>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="  justify-content-end ">
          <Nav
            className="my-2 my-lg-0 p-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                className="nav-link h5"
                eventKey="2"
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blog"
                className="nav-link h5"
                eventKey="1"
              >
                Blog
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link h5"
                eventKey="3"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
