import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Jumbotron = () => (
  <Row className="jumbotron">
    <Container fluid={true}>
      <Col>
        <h1>
          Bureau B is an independent design agency and creative consultancy,
          specializing in brand strategy, visual identity, and holistic brand
          experiences. <br />
          <p className="text-muted">Read More</p>
        </h1>
      </Col>
    </Container>
  </Row>
);
