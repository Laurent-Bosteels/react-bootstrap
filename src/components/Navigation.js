import React from "react";
import { Container } from "react-bootstrap";
import { Nav, Navbar} from "react-bootstrap";

export const Navigation = () => (
    <Navbar className="custom-navbar" collapseOnSelect expand="lg" variant="light">
    <Container fluid={true}>
    <Navbar.Brand href="/">BUREAU B</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
      <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/about">ABOUT</Nav.Link>
        <Nav.Link href="/contact">CONTACT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
);
