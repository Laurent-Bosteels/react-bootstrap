import React from "react";
import { Container } from "react-bootstrap";
import { Nav, Navbar} from "react-bootstrap";
import { Button } from 'react-bootstrap';

export const Navigation = () => (
  <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
    <Container fluid={true}>
      <Navbar.Brand className="position-absolute top-50 start-50 translate-middle" href="#home">Spark</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Button 
          className="rounded-pill"
          variant="outline-dark">Contact</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
